

import * as React from "react";
import { ReactGrid, Column, Row, CellChange, TextCell, Id, DefaultCellTypes, Highlight , CellTemplate, CellLocation } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import _ from "lodash";

import CustomTextCellRenderer from "./CustomTextCellRenderer";
import ToolBox from "./ToolBox";


let gridRows =200;
let gridCols = 200;

export interface Person {
    0: string;
    1: string;
    props? : any;
}

type Props = {
    data ?: Row[]
}

function getNextAlphabet(str : string) {
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


// 맥 체크
const isMacOs = () => false;

const SheetItems = ( { data }: Props)=>{

    //=========== 데이터 state
    // 엑셀 행 렬
    const [people, setPeople] = React.useState<Person[]>([]);
    const [columns, setColumns] = React.useState<Column[]>([]);
    // 전체 형태
    const [rows , setRows] =React.useState<Row<DefaultCellTypes>[]>([]);

    //=========== 기능 state
    // 다중 유저 하이라이트
    const [focusList , setFocusList] = React.useState<Highlight[]>([{ columnId: "1", rowId: 3, borderColor: "#00ff00" }, { columnId: "2", rowId: 4, borderColor: "#ff0000" }])

    // 실행취소/다시실행
    const [cellChangesIndex, setCellChangesIndex] = React.useState(() => -1);
    const [cellChanges, setCellChanges] = React.useState<CellChange<TextCell>[][]>(() => []);

    const gridRef = React.useRef<ReactGrid>(null);

    const [selectedCell, setSelectedCell] = React.useState<CellLocation>({rowId : 0, columnId: '1'})

    // 초기 렌더링
    React.useEffect(()=>{
        if(_.isEmpty(data)){
            setPeople(getPeople())
            setColumns(getColumns())
        }
        else{
            if(gridRows < data!.length){
                gridRows = data!.length
            }
            if(gridCols < _.get(data,'0.cells.length' ,0)){
                gridRows = data!.length
            }
            const newData = [...data]
            newData.splice(0,1)
            setPeople(getPeople(newData))
            setColumns(getColumns())
        }
    },[data])
    
    // people 바뀌면 전체 값 변경
    React.useEffect(()=>{
        setRows(getRows(people));
    },[people])

    // 행
    const getRows = (people: Person[], mergeCell ?: any ): Row[] => [
        headerRow,
        ...people.map<Row>((person, idx) =>{
            let cells = [];

            let extracountOfcolspan = 0;
            for(let i=0; i<gridRows; i++){
                let colObj : DefaultCellTypes = { type: 'text', text : '', nonEditable : false };
                _.set(colObj,'type','text')
                _.set(colObj,'text', _.get(person,`${i}`))
                _.set(colObj,'nonEditable', false)
                _.set(colObj,'style', _.get(person,`props.styles.col${i}`, {}))

                //=== row label 부분
                if(i===0){
                    _.set(colObj,'nonEditable',true)
                }
                //--- row label 부분
                //=== colspan 부분
                if(extracountOfcolspan === 0 ){
                    switch (_.get(person, `props.colspan.col${i}`, 1) === 1) {
                        case true:
                            _.set(colObj,'colspan',1)
                            break;
                        case false:
                            _.set(colObj,'colspan',_.get(person, `props.colspan.col${i}`))
                            extracountOfcolspan = Number(_.get(person, `props.colspan.col${i}`))-1;
                            break;
                        default:
                            break;
                    }
                }else{
                    _.set(colObj,'text','')
                    _.set(colObj,'colspan',1)
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


    const headerRow: Row = React.useMemo(()=>{
        let row : Row = {
            rowId: "header",
            cells: [
                { type: "header", text: "" },
                { type: "header", text: "" }
            ]
        }
        let str = "A";
        for (let i = 1; i < gridRows; i++) {
            _.set(row,`cells.${i}`, {type : 'header', text : str})
            str = getNextAlphabet(str);
        }

        return row
    },[gridRows]);
       
    const getColumns =  React.useCallback((data ?: Array<object>): Column[] =>{ 
        
        let arr : Column[] = [];
        let numberObj = {}
        if(data){
            data.forEach((elm,i)=>{
                let colObj= { columnId : 0 }
                _.set(colObj,'columnId', `${i}`)
                _.set(colObj,'width',elm)
                _.set(colObj,'resizable',true)
                arr.push(colObj);
            })
        }else{

            for(let i=0; i<gridRows; i++){
                let colObj= { columnId : 0 }
                _.set(colObj,'columnId', `${i}`)
                _.set(colObj,'width',150)
                _.set(colObj,'resizable',true)
                arr.push(colObj);
            }

        }

        _.set(numberObj,'columnId',  `0`)
        _.set(numberObj,'width',40)
        _.set(numberObj,'resizable',false)
        _.set(arr,'0',numberObj);

        return arr
    },[data,gridCols, gridRows])

    const getPeople = React.useCallback((datas ?: Row[]): Person[] => {
        

        let colObj : Person = { 0 : '1', 1 : '2' }
        let arr = [];
        if(_.isEmpty(datas)){
            for(let i=0; i<gridCols; i++){        
                _.set(colObj, `${i}` ,'')
            }
            for(let i=0; i<gridCols ; i++){
                const cloneDeep = {...colObj};
                _.set(cloneDeep, '0' ,(i+1).toString())
                arr.push(cloneDeep)
            }
        }else{
            // 1차로 데이터 칸 만들고.
            for(let i=0; i<gridCols; i++){        
                _.set(colObj, `${i}` ,'')
            }

            // 라벨링 및 데이터 입력
            for(let i=0; i<gridCols ; i++){
                const cloneDeep = {...colObj};
                _.set(cloneDeep, '0' ,(i+1).toString())

                if(!_.isEmpty(datas![i])){
                    
                    for(let ci=0; ci<_.get(datas,`${i}.cells.length`,0); ci++){    
                        _.set(cloneDeep, `${ci}`, _.get(datas,`${i}.cells.${ci}.text`))
                        const style = _.get(cloneDeep,'props.styles',{})
                        const colspan = _.get(cloneDeep,'props.colspan',{})

                        _.set(style, `col${ci}`,_.get(datas,`${i}.cells.${ci}.style`,{}) )
                        _.set(cloneDeep,'props.styles', style)    

                        _.set(colspan, `col${ci}`,_.get(datas,`${i}.cells.${ci}.colspan`,{}) )
                        _.set(cloneDeep,'props.colspan',colspan)
                    }
                }

                arr.push(cloneDeep)
            }
            // console.log(arr, 'getPeople');

        }
        return arr
    },[data, gridCols, gridRows])


    

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
          _.set(prevPeople,`${personIndex}.${fieldName}`, cell.text)
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

    
    // 텍스트 내용 변경 
    const handleChanges = React.useCallback((changes: CellChange<TextCell>[]) => {
        setPeople((prevPeople) => applyChangesToPeople(changes, prevPeople));
    },[people])
    // 컬럼 넓이 조절
    const handleColumnResize = React.useCallback((ci: Id, width: number) => {
        setColumns((prevColumns) => {
          const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
          const resizedColumn = prevColumns[columnIndex];
          const updatedColumn = { ...resizedColumn, width };
          prevColumns[columnIndex] = updatedColumn;
          return [...prevColumns];
        });
    },[people])

    // 실행취소 작동
    const handleUndoChanges = React.useCallback(() => {
        if (cellChangesIndex >= 0) {
          setPeople((prevPeople) =>
            undoChanges(cellChanges[cellChangesIndex], prevPeople)
          );
        }
    },[people])
    
    // 다시실행 작동
    const handleRedoChanges = React.useCallback(() => {
        if (cellChangesIndex + 1 <= cellChanges.length - 1) {
          setPeople((prevPeople) =>
            redoChanges(cellChanges[cellChangesIndex + 1], prevPeople)
          );
        }
    },[people])

    // 선택 셀 변경 작동
    const handleFocusLocationChanged = React.useCallback((location: CellLocation)=>{
        setSelectedCell(location)
    },[people])

    const handlePaste : React.ClipboardEventHandler<HTMLDivElement> = async(e)=>{
        // e.preventDefault();

        let htmlcode = e.clipboardData.getData('text/html').toString();
        // console.log(htmlcode,'html')
        if(!/<\s{0,}colgroup/.test(htmlcode)){
            const parser = new DOMParser();
            const htmlDoc =  parser.parseFromString(htmlcode, 'text/html');
            const spanElement =  htmlDoc.querySelector('span');

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

            console.log(gridRows,'gridRows')
            console.log(gridCols,'gridCols')

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
    }

    if(_.isEmpty(rows)){

        return (
            null
        )
    }

    return (
        <div className="react_grid_container" style={{display : 'flex', flexDirection:'column', justifyContent : 'center', alignItems : 'flex-start'}}
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

            <button onClick={()=>console.log(rows,'저장하기')}> 
                저장
            </button>
            <ToolBox  handleUndoChanges={handleUndoChanges} handleRedoChanges={handleRedoChanges} setPeople={setPeople} selectedCell={selectedCell} ref={gridRef} />
            
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}} onPaste={handlePaste}>
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