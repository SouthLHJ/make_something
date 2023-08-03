

import * as React from "react";
import { ReactGrid, Column, Row, CellChange, TextCell, Id, DefaultCellTypes, Highlight, CellTemplate, CellLocation } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import _ from "lodash";

import CustomTextCellRenderer from "./CustomTextCellRenderer";
import ToolBox from "./ToolBox";
import { DataListContext } from "@src/container/ReactGrid";


let gridRows = 200;
let gridCols = 200;

export interface Person {
    0: string;
    1: string;
    props?: any;
}

type Props = {
    data?: Row[],
    sheetIdx: number,
}

// 다음 알파벳
function getNextAlphabet(str: string) {
    let carry = 1;
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (carry === 0) {
            result = str[i] + result;
            continue;
        }

        let charCode = str.charCodeAt(i) + carry;
        carry = 0;

        if (charCode > "Z".charCodeAt(0)) {
            carry = 1;
            charCode = "A".charCodeAt(0);
        }

        result = String.fromCharCode(charCode) + result;
    }

    if (carry === 1) {
        result = "A" + result;
    }

    return result;
}

// 알파벳 => 인덱스
function getAlphaToIndex(str : string) : number{
    let index = 0;
    let multiplier = 1;
    const upperStr = str.toUpperCase();
    for (let i = upperStr.length - 1; i >= 0; i--) {
      const charValue = upperStr.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
      index += charValue * multiplier;
      multiplier *= 26;
    }
  
    return index;
}

// 시트에서 데이터 찾기.
function getDataOfSheet(str : string, dataList : any[], currentSheet : number, currentPerson : Person[]){
    // 1. 원하는 시트 찾기
    const splitArr = str.split('!');
    // 2. 해당 시트의 원하는 행렬에 있는 값 찾기
    let findData = [];
    for (let i = 0; i < splitArr.length-1; i+=2) {
        const sheet = Number(splitArr[i].slice(5,6));
        const rowcol = splitArr[i + 1];

        // A1 -> 행렬 구분... A
        let rowIdx = 0;
        let colIdx = 0;
        for(let i = 0 ; i<rowcol.length ; i++ ){
            if(rowcol.charCodeAt(i) < 65){
                colIdx = getAlphaToIndex(rowcol.slice(0,i))
                rowIdx = Number(rowcol.slice(i,))
                break;
            }
        }

        let bringData ; 
        // console.log(sheet, currentSheet,'currentSheet')
        if(sheet !== currentSheet || _.isEmpty(currentPerson)){
            const sheetData = _.get(dataList,`${sheet-1}`);
            // console.log(sheetData, 'sheetData sheet')
            bringData = _.get(sheetData,`${rowIdx}.cells.${colIdx}.text`);
            // console.log(bringData, 'bringData sheet!')
        }else{
            const sheetData = _.isEmpty(currentPerson) ? _.get(dataList,`${sheet-1}`): currentPerson ;
            // console.log(sheetData, 'sheetData person')
            // console.log(rowIdx-1,colIdx ,'rowIdx colIdx person')
            bringData = _.get(sheetData,`${rowIdx-1}.${colIdx}`);
            // console.log(bringData, 'bringData person!')
        }
        findData.push(bringData)
    }
    // console.log('========== getDataOfSheet')

    return findData;
}
  


// 맥 체크
const isMacOs = () => false;

const SheetItems = ({ data, sheetIdx }: Props) => {
    // 전체 데이터
    const dataContext = React.useContext(DataListContext);

    //=========== 데이터 state
    // 엑셀 행 렬
    const [people, setPeople] = React.useState<Person[]>([]);
    const [columns, setColumns] = React.useState<Column[]>([]);
    // 전체 형태
    const [rows, setRows] = React.useState<Row<DefaultCellTypes>[]>([]);

    //=========== 기능 state
    // 다중 유저 하이라이트
    const [focusList, setFocusList] = React.useState<Highlight[]>([{ columnId: "1", rowId: 3, borderColor: "#00ff00" }, { columnId: "2", rowId: 4, borderColor: "#ff0000" }])

    // 실행취소/다시실행
    const [cellChangesIndex, setCellChangesIndex] = React.useState(() => -1);
    const [cellChanges, setCellChanges] = React.useState<CellChange<TextCell>[][]>(() => []);

    const gridRef = React.useRef<ReactGrid>(null);

    const [selectedCell, setSelectedCell] = React.useState<CellLocation>({ rowId: 0, columnId: '1' })

    // 초기 렌더링
    React.useEffect(() => {
        if (_.isEmpty(data)) {
            setPeople(getPeople())
            setColumns(getColumns())
        }
        else {
            if (gridRows < data!.length) {
                gridRows = data!.length
            }
            if (gridCols < _.get(data, '0.cells.length', 0)) {
                gridRows = data!.length
            }

            const columnData = _.get(data,'column')
            const rowData = _.get(data,'row');

            const newData = [...rowData!]
            newData.splice(0, 1)
            setPeople(getPeople(newData))
            setColumns(getColumns(columnData))
        }
    }, [data])

    // people 바뀌면 전체 값 변경
    React.useEffect(() => {
        setRows(getRows(people));
    }, [people])

    // 데이터 추합 이벤트 발생
    React.useEffect(() => {
        if (dataContext?.collect) {
            if (!_.isEmpty(rows)) {
                dataContext.setDataList((prev) => {
                    const clone = [...prev];
                    clone.splice(sheetIdx, 1, rows);
                    // console.log(prev, '데이터 추합 이벤트 발생')
                    console.log(clone, '데이터 추합 이벤트 발생',sheetIdx)

                    return clone
                })
                dataContext.setCollect(false);
            }
        }
    }, [dataContext?.collect])

    // 행
    const getRows = (people: Person[]): Row[] => [
        headerRow,
        ...people.map<Row>((person, idx) => {
            let cells = [];

            let extracountOfcolspan = 0;
            for (let i = 0; i < gridRows; i++) {
                let colObj: DefaultCellTypes = { type: 'text', text: '', nonEditable: false };
                _.set(colObj, 'type', 'text')

                if(!_.isEmpty(_.get(person, `props.formula.col${i}`, ''))){
                    _.set(colObj, 'text', calculateFormula(_.get(person, `props.formula.col${i}`, '')).text)
                    _.set(colObj, 'formula',_.get(person, `props.formula.col${i}`, ''))
                }
                else{
                    _.set(colObj, 'text', _.get(person, `${i}`,''))
                }
                _.set(colObj, 'nonEditable', false)
                _.set(colObj, 'style', _.get(person, `props.styles.col${i}`, {}))

                //=== row label 부분
                if (i === 0) {
                    _.set(colObj, 'nonEditable', true)
                }
                //--- row label 부분
                //=== colspan 부분
                if (extracountOfcolspan === 0) {
                    switch (_.get(person, `props.colspan.col${i}`, 1) === 1) {
                        case true:
                            _.set(colObj, 'colspan', 1)
                            break;
                        case false:
                            _.set(colObj, 'colspan', _.get(person, `props.colspan.col${i}`))
                            extracountOfcolspan = Number(_.get(person, `props.colspan.col${i}`)) - 1;
                            break;
                        default:
                            break;
                    }
                } else {
                    _.set(colObj, 'text', '')
                    _.set(colObj, 'colspan', 1)
                    extracountOfcolspan -= 1;
                }

                //--- colspan 부분


                cells.push(colObj)
            }

            return {
                rowId: idx,
                cells: cells
            }
        })
    ];


    const headerRow: Row = React.useMemo(() => {
        let row: Row = {
            rowId: "header",
            cells: [
                { type: "header", text: "" },
                { type: "header", text: "" }
            ]
        }
        let str = "A";
        for (let i = 1; i < gridRows; i++) {
            _.set(row, `cells.${i}`, { type: 'header', text: str })
            str = getNextAlphabet(str);
        }

        return row
    }, [gridRows]);

    const getColumns =  React.useCallback((columnData ?: Column[]): Column[] =>{ 
        
        let arr : Column[] = [];
        let numberObj = {}

        // 1. 1차적으로 column 생성하고,
        for(let i=0; i<gridRows; i++){
            let colObj= { columnId : 0 }
            _.set(colObj,'columnId', `${i}`)
            _.set(colObj,'width',100)
            _.set(colObj,'resizable',true)
            arr.push(colObj);
        }
        _.set(numberObj,'columnId',  `0`)
        _.set(numberObj,'width',40)
        _.set(numberObj,'resizable',false)
        _.set(arr,'0',numberObj);


        // 데이터가 들어온게 있다면!
        if(!_.isEmpty(columnData) && columnData){
            columnData.forEach((elm,i)=>{
                _.set(arr,`${elm.columnId}.width`, _.get(elm, `width`));
            })
        }



        return arr
    },[data,gridCols, gridRows])

    const getPeople = React.useCallback((datas?: Row[]): Person[] => {


        let colObj: Person = { 0: '1', 1: '2' }
        let arr = [];
        if (_.isEmpty(datas)) {
            for (let i = 0; i < gridCols; i++) {
                _.set(colObj, `${i}`, '')
            }
            for (let i = 0; i < gridCols; i++) {
                const cloneDeep = { ...colObj };
                _.set(cloneDeep, '0', (i + 1).toString())
                arr.push(cloneDeep)
            }
        } else {

            // 1차로 데이터 칸 만들고.
            for (let i = 0; i < gridCols; i++) {
                _.set(colObj, `${i}`, '')
            }

            // 라벨링 및 데이터 입력
            for (let i = 0; i < gridCols; i++) {
                const cloneDeep = { ...colObj };
                _.set(cloneDeep, '0', (i + 1).toString())


                if (!_.isEmpty(datas![i])) {

                    for (let ci = 0; ci < _.get(datas, `${i}.cells.length`, 0); ci++) {
                        _.set(cloneDeep, `${ci}`, _.get(datas, `${i}.cells.${ci}.text`))
                        if(!_.isEmpty(_.get(datas, `${i}.cells.${ci}.formula`))){
                            console.log(_.get(datas, `${i}.cells.${ci}.formula`), ' formula?')
                            _.set(cloneDeep, `props.formula.col${ci}`, _.get(datas, `${i}.cells.${ci}.formula`))
                        }
                        const style = _.get(cloneDeep, 'props.styles', {})
                        const colspan = _.get(cloneDeep, 'props.colspan', {})

                        _.set(style, `col${ci}`, _.get(datas, `${i}.cells.${ci}.style`, {}))
                        _.set(cloneDeep, 'props.styles', style)

                        _.set(colspan, `col${ci}`, _.get(datas, `${i}.cells.${ci}.colspan`, {}))
                        _.set(cloneDeep, 'props.colspan', colspan)
                    }
                }

                arr.push(cloneDeep)
            }
            // console.log(arr, 'getPeople');

        }
        return arr
    }, [data, gridCols, gridRows])

    // 텍스트 수정
    const applyChangesToPeople = (
        changes: CellChange<TextCell>[],
        prevPeople: Person[]
    ): Person[] => {
        const updated = applyNewValue(changes, prevPeople);
        setCellChanges([...cellChanges.slice(0, cellChangesIndex + 1), changes]);
        setCellChangesIndex(cellChangesIndex + 1);
        return updated
    };

    // 실행취소 / 재 실행 
    const applyNewValue = (
        changes: CellChange<TextCell>[],
        prevPeople: Person[],
        usePrevValue: boolean = false
    ): Person[] => {
        changes.forEach((change) => {
            const personIndex = change.rowId;
            const fieldName = change.columnId;
            const cell = usePrevValue ? change.previousCell : change.newCell;

            _.set(prevPeople, `${personIndex}.${fieldName}`, cell.text)
            //   prevPeople[personIndex][fieldName] = cell.text;
        });
        return [...prevPeople];
    };

    const undoChanges = (
        changes: CellChange<TextCell>[],
        prevPeople: Person[]
    ): Person[] => {
        const updated = applyNewValue(changes, prevPeople, true);
        setCellChangesIndex(cellChangesIndex - 1);
        return updated;
    };

    const redoChanges = (
        changes: CellChange<TextCell>[],
        prevPeople: Person[]
    ): Person[] => {
        const updated = applyNewValue(changes, prevPeople);
        setCellChangesIndex(cellChangesIndex + 1);
        return updated;
    };

    // 수식 계산
    const calculateFormula = (text : string)=>{
        let cal_rst  = { cal : false, text : ''};
        console.log(text,' calculateFormula ')
        // 수식 계산
        if (/^=/.test(text)) {
            // sheet 계산
            if (/SHEET/.test(text.toUpperCase())) {
                const formula = text.split('=')[1].trim();

                // 정보를 찾는 것인지? 시트 간 데이터 계산인지?
                if(/[\+\-\*/]/.test(formula)){
                    /*
                    = sheet1!b1 + sheet2!c2
                    */
                    // 정규식 패턴: 시트 이름, 열, 행, 사칙연산 기호를 포함한 패턴
                    const regex = /(\w+!\w+\d+|[\+\-\*/])/g;
                    const sheetArr = formula.match(regex) ?? [];
                    let findData = [...sheetArr];

                    for(let i = 0 ; i<sheetArr?.length ; i+=2){
                        // console.log(sheetIdx,'sheetIdx?')
                        const getData = getDataOfSheet(sheetArr[i], dataContext!.dataList, sheetIdx+1, people);
                        findData.splice(i,1,getData[0])
                    }
                    console.log(findData,'findData')
                    let join = findData.join(' ')
                    cal_rst.text = `${eval(join)}`;

                }else{
                    const newData = [...rows]
                    console.log(sheetIdx,'sheetIdx?')
                    const getData = getDataOfSheet(formula, dataContext!.dataList,  sheetIdx+1, people);
                    cal_rst.text =`${getData[0]}`;
                }


            }
            // 사칙연산
            else if (/^(\d+[\+\-\*/]?)+\d+$/.test(text.split('=')[1].trim())) {
                const evalRst = eval(text.split('=')[1])
                cal_rst.text =`${evalRst}`;
            }

            cal_rst.cal = true;
        }else{
            cal_rst.text = text;
        }

        return cal_rst;
      
    }

    // 텍스트 내용 변경 
    const handleChanges = React.useCallback((changes: CellChange<TextCell>[]) => {
        setPeople((prevPeople) => applyChangesToPeople(changes, prevPeople));
    }, [people])
    // 컬럼 넓이 조절
    const handleColumnResize = React.useCallback((ci: Id, width: number) => {
        setColumns((prevColumns) => {
            const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
            const resizedColumn = prevColumns[columnIndex];
            const updatedColumn = { ...resizedColumn, width };
            prevColumns[columnIndex] = updatedColumn;
            return [...prevColumns];
        });
    }, [people])

    // 실행취소 작동
    const handleUndoChanges = React.useCallback(() => {
        if (cellChangesIndex >= 0) {
            setPeople((prevPeople) =>
                undoChanges(cellChanges[cellChangesIndex], prevPeople)
            );
        }
    }, [people])

    // 다시실행 작동
    const handleRedoChanges = React.useCallback(() => {
        if (cellChangesIndex + 1 <= cellChanges.length - 1) {
            setPeople((prevPeople) =>
                redoChanges(cellChanges[cellChangesIndex + 1], prevPeople)
            );
        }
    }, [people])

    // 선택 셀 변경 작동
    const handleFocusLocationChanged = React.useCallback((location: CellLocation) => {
        setSelectedCell(location)
    }, [people])

    const handlePaste: React.ClipboardEventHandler<HTMLDivElement> = async (e) => {
        // e.preventDefault();
        try{
            let htmlcode = e.clipboardData.getData('text/html').toString();
            switch (/<table[^>]*data-reactgrid="reactgrid-content"[^>]*>/g.test(htmlcode)) {
                // 자체 내에서 복사.
                case true:
                    const parser = new DOMParser();
                    const htmlDoc =  parser.parseFromString(htmlcode, 'text/html');
                    const trElements =  htmlDoc.querySelectorAll('tr');

                    if(!_.isEmpty(trElements)){
                        setPeople(prev =>{
                            const clone = [...prev]

                            trElements.forEach((trElem, trIdx)=>{
                                const tdElements = trElem.querySelectorAll('td');
                                for(let tdIdx=0; tdIdx<tdElements.length;tdIdx++){
                                    const tdElem = tdElements[tdIdx];
                                    const dataSetValue = tdElem.getAttribute('data-reactgrid') ?? '';
                                    const jsonObject = JSON.parse(dataSetValue);
                                    const styleObject = jsonObject.style;

                                    let styleObj = {}
                                        for(let style in styleObject ){
                                            
                                            switch(style){
                                                case 'fontSize':
                                                    _.set(styleObj,'fontSize',_.get(styleObject,style).replace(/pt/,'px'))
                                                    break;
                                                case 'fontWeight':
                                                    _.set(styleObj,'fontWeight',_.get(styleObject,style))
                                                    break;
                                
                                                case 'color' : 
                                                    _.set(styleObj,'color',_.get(styleObject,style))
                                                    break;
                                
                                                case 'backgroundColor' : 
                                                case 'background' : 
                                                    _.set(styleObj,'background',_.get(styleObject,style))
                                                    break;
                                                
                                
                                                case 'justifyContent' :
                                                case 'textAlign' :
                                                    _.set(styleObj,'justifyContent',_.get(styleObject,style))
                                                    break;
                                
                                                case 'border' :
                                                    break;
                                                default:
                                                    break;
                                            }
                                            
                                        // })
                                        }
                
                                        const rowIndex = Number(selectedCell.rowId)+trIdx
                                        const colIndex = Number(selectedCell.columnId)+tdIdx
                                        const styles = _.get(clone,`${rowIndex}.props.styles`, {});
                                        // console.log(_.get(clone,`${rowIndex}`),'_.get(clone,`${rowIndex}.${colIndex}')
                                        // console.log(styles,'styles')
                                        if(!_.isEmpty(styles)){
                                            // console.log("작동1")
                                            const newRow = {..._.get(clone,`${rowIndex}.props.styles.col${colIndex}`,{}),...styleObj}
                                            _.set(clone,`${rowIndex}.props.styles.col${colIndex}` ,newRow)
                                        }else{
                                            const newRow = {...styleObj}
                                            if(_.isEmpty(_.get(clone,`${rowIndex}.props`))){
                                                _.set(clone,`${rowIndex}.props`,{})
                                            }
                                            // console.log("작동3")
                                            _.set(clone,`${rowIndex}.props.styles`,{})
                                            _.set(clone,`${rowIndex}.props.styles.col${colIndex}` , newRow)
                                        }

                                }

                            })

                            return clone;
                        })

                    }

                    break;
                // 구글 스프레드 시트에서 복사.
                case false:
                    if(!/<\s{0,}colgroup/.test(htmlcode)){
                        const parser = new DOMParser();
                        const htmlDoc =  parser.parseFromString(htmlcode, 'text/html');
                        const spanElement =  htmlDoc.querySelector('span');
                        console.log(htmlcode, 'htmlcode')
                        // 스타일 값 추출
                        const styleValue =  spanElement!.getAttribute('style');
                        let styleObj = {}
                        styleValue?.split(';')?.forEach((style)=>{
                            const arr = style.split(':')
                            switch(arr[0]){
                                case 'font-size':
                                    _.set(styleObj,'fontSize',arr[1].replace(/pt/,'px'))
                                    break;
                                case 'font-weight':
                                    _.set(styleObj,'fontWeight',arr[1])
                                    break;
                
                                case 'color' : 
                                    _.set(styleObj,'color',arr[1])
                                    break;
                
                                case 'background' : 
                                    _.set(styleObj,'background',arr[1])
                                    break;
                
                                case 'justify-content' :
                                case 'text-align' :
                                    _.set(styleObj,'justifyContent',arr[1])
                                    break;
                
                                case 'border' :
                                    break;
                                default:
                                    break;
                            }
                            
                        })
                        // console.log('Style Value:', styleValueArr);            
            
                        // 텍스트 값 추출
                        const textValue = spanElement!.textContent;
                        // console.log('Text Value:', textValue);
                        setPeople(prev =>{
                            const clone = [...prev]
                            const personIndex = selectedCell.rowId;
                            const fieldName = selectedCell.columnId;
                            _.set(clone,`${personIndex}.${fieldName}`, textValue)
                            const styles = _.get(clone,`${personIndex}.props.styles`, {});
                            if(!_.isEmpty(styles)){
                                const newRow = {..._.get(clone,`${personIndex}.props.styles.col${fieldName}`,{}),...styleObj}
                                _.set(clone,`${personIndex}.props.styles.col${fieldName}` ,newRow)
                            }else{
                                const newRow = {...styleObj}
            
                                if(_.isEmpty(_.get(clone,`${personIndex}.props`))){
                                    _.set(clone,`${personIndex}.props`,{})
                                }
                                _.set(clone,`${personIndex}.props.styles`,{})
                                
                                _.set(clone,`${personIndex}.props.styles.col${fieldName}` , newRow)
                                console.log(clone,'clone')
                            }
                            return clone
                        })
                    }else if(/<\s{0,}colgroup/.test(htmlcode)){
                        const parser = new DOMParser();
                        const htmlDoc =  parser.parseFromString(htmlcode, 'text/html');
                        
                        // console.log(htmlDoc,'1')
                        // tr 요소 선택
                        const trElements =  htmlDoc.querySelectorAll('tr');
                        const colElements =  htmlDoc.querySelectorAll('col');
            
            
                        // 부족한 행렬 늘리기
                        if(gridRows < colElements.length){
                            console.log(colElements.length, '잉 왜 작동안해?')
                            gridRows = colElements.length
                        }
                        if(gridCols < trElements.length){
                            console.log(trElements.length,'잉 왜 작동안해?2')
                            gridCols = trElements.length
                        }
            
                        if(!_.isEmpty(trElements)){
                            setPeople(prev =>{
                                const clone = [...prev]
                                for(let trIdx=0 ; trIdx<trElements.length;trIdx++){
                                    const trElem = trElements[trIdx];
                                    const tdElements = trElem.querySelectorAll('td');
                                    for(let tdIdx=0; tdIdx<tdElements.length;tdIdx++){
                                        const tdElem = tdElements[tdIdx];
                                        const textValue = tdElem.innerText;
                                        const styleValue = tdElem.getAttribute('style');
                                        let styleObj = {}
                                        for(let style of styleValue!.split(';') ){
            
                                        // styleValue?.split(';')?.forEach((style)=>{
                                            const arr = style.split(':')
                                            switch(arr[0]){
                                                case 'font-size':
                                                    _.set(styleObj,'fontSize',arr[1].replace(/pt/,'px'))
                                                    break;
                                                case 'font-weight':
                                                    _.set(styleObj,'fontWeight',arr[1])
                                                    break;
                                
                                                case 'color' : 
                                                    _.set(styleObj,'color',arr[1])
                                                    break;
                                
                                                case 'background-color' : 
                                                case 'background' : 
                                                    _.set(styleObj,'background',arr[1])
                                                    break;
                                                
                                
                                                case 'justify-content' :
                                                case 'text-align' :
                                                    _.set(styleObj,'justifyContent',arr[1])
                                                    break;
                                
                                                case 'border' :
                                                    break;
                                                default:
                                                    break;
                                            }
                                            
                                        // })
                                        }
                
                                        const rowIndex = Number(selectedCell.rowId)+trIdx
                                        const colIndex = Number(selectedCell.columnId)+tdIdx
                                        
                                        // console.log(`Cell Text: ${textValue}, Cell Style: ${styleValue}, Location: [${rowIndex}, ${colIndex}]`);
                
                                        // const personIndex = selectedCell.rowId;
                                        // const fieldName = selectedCell.columnId;
                                        _.set(clone,`${rowIndex}.${colIndex}`, textValue)
                                        const styles = _.get(clone,`${rowIndex}.props.styles`, {});
                                        // console.log(_.get(clone,`${rowIndex}`),'_.get(clone,`${rowIndex}.${colIndex}')
                                        // console.log(styles,'styles')
                                        if(!_.isEmpty(styles)){
                                            // console.log("작동1")
                                            const newRow = {..._.get(clone,`${rowIndex}.props.styles.col${colIndex}`,{}),...styleObj}
                                            _.set(clone,`${rowIndex}.props.styles.col${colIndex}` ,newRow)
                                        }else{
                                            const newRow = {...styleObj}
                                            if(_.isEmpty(_.get(clone,`${rowIndex}.props`))){
                                                _.set(clone,`${rowIndex}.props`,{})
                                            }
                                            // console.log("작동3")
                                            _.set(clone,`${rowIndex}.props.styles`,{})
                                            _.set(clone,`${rowIndex}.props.styles.col${colIndex}` , newRow)
                                        }
                                    }
                                }
                                
                                return clone
                            })
                        }
                    }
                    break;
                default:
                    
                    break;
            }

        }catch(e){
            console.log(e,'handlePaste err')
        }
    }

    if (_.isEmpty(rows)) {

        return (
            null
        )
    }

    return (
        <div className="react_grid_container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
            onKeyDown={(e) => {
                if ((!isMacOs() && e.ctrlKey) || e.metaKey) {
                    switch (e.key) {
                        case "z":
                            handleUndoChanges();
                            return;
                        case "y":
                            handleRedoChanges();
                            return;
                    }
                }
            }}
        >

           
            <ToolBox handleUndoChanges={handleUndoChanges} handleRedoChanges={handleRedoChanges} setPeople={setPeople} selectedCell={selectedCell} ref={gridRef} />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPaste={handlePaste}>
                <ReactGrid
                    rows={rows}
                    columns={columns}
                    onCellsChanged={handleChanges}
                    onColumnResized={handleColumnResize}
                    onFocusLocationChanged={handleFocusLocationChanged}
                    stickyLeftColumns={1}
                    //  stickyRightColumns={1}
                    stickyTopRows={1}
                    //  stickyBottomRows={1}
                    //  enableFillHandle
                    enableRangeSelection
                    enableRowSelection
                    enableColumnSelection
                    highlights={focusList}
                    //  enableGroupIdRender
                    ref={gridRef}

                />

            </div>
        </div>
    )
}

export default SheetItems;