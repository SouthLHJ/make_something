import {forwardRef, useEffect, useMemo, useRef} from "react";
import {Person} from './SheetItem'
import _ from "lodash";
import {CellStyle, CellLocation , Row} from '@silevis/reactgrid'

type Props = {
    handleUndoChanges: () => void,
    handleRedoChanges: () => void,
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>,
    selectedCell: CellLocation,
}

type Style = {
    background:string,
    color:string,
    fontSize:string,
    fontWeight:string,
    justifyContent:string,
}


const ToolBox = forwardRef(({handleUndoChanges, handleRedoChanges, setPeople, selectedCell } : Props, ref)=>{

    const fontSizeRef = useRef<HTMLSelectElement>(null)
    const colorRef = useRef<HTMLInputElement>(null);
    const backgroundRef = useRef<HTMLInputElement>(null);


    const fontList = useMemo(()=>{
        let arr = [];
        for(let i=5;i<=150;i++){
            arr.push(i)
        }
        return arr
    },[])

    useEffect(()=>{
        handleGetSelectedData();
    },[selectedCell])

    const handleChangeStyle = (type: string, value: any) => {
        const range: [] = _.get(ref, 'current.state.selectedRanges', []);
        const cell = _.get(range,'0');
        const columns = _.get(cell,'columns',[]);
        const rows = _.get(cell,'rows',[]);
        columns.forEach((col,coIdx)=>{

            rows.forEach((row,roIdx)=>{
                let colId = _.get(col, 'columnId');
                let rowId = _.get(row, 'rowId');
                if(colId!=0){
                    setPeople(people => {
                        const clone = [...people]
                        const oStyle = _.get(clone, `${rowId}.props.styles.col${colId}`)
                        let newStyle  = {};
                        switch (type) {
                            case 'font-size':
                                newStyle = { ...oStyle, fontSize: `${value}` }
                                _.set(clone, `${rowId}.props.styles.col${colId}`, newStyle)
                                return clone
                            case 'font-bold':
                                const values =  _.get(oStyle, 'fontWeight') == 'bold' ? '' : 'bold'
                                newStyle = { ...oStyle, fontWeight: values }
                                _.set(clone, `${rowId}.props.styles.col${colId}`, newStyle)
                                return clone
            
                            case 'color' : 
                                newStyle = { ...oStyle, color : value }
                                _.set(clone, `${rowId}.props.styles.col${colId}`, newStyle)
                                return clone
            
                            case 'background' : 
                                newStyle = { ...oStyle, background : value }
                                _.set(clone, `${rowId}.props.styles.col${colId}`, newStyle)
                                return clone
            
                            case 'justify-content' :
                                newStyle = { ...oStyle, justifyContent : value }
                                _.set(clone, `${rowId}.props.styles.col${colId}`, newStyle)
                                return clone
            
                            case 'border' :
                                if(value){
                                    newStyle = { ...oStyle, borderLeftStyle : 'solid', borderTopStyle : 'solid', borderLeftWidth : '1px', borderTopWidth : '1px', borderColor : '#000000' }
                                }else{
                                    newStyle = { ...oStyle, borderLeftStyle : 'unset', borderTopStyle : 'unset', borderLeftWidth : 'unset', borderTopWidth : 'unset', borderColor : null, }
                                }
                                _.set(clone, `${rowId}.props.styles.col${colId}`, newStyle)
                                return clone
            
                            default:
                                return clone
                        }
                    })
                }

            })
        })

    }

    const handleGetSelectedData = ()=>{
        const selected = _.get(ref,'current.state.focusedLocation');
        const colIdx = _.get(selected,'column.idx');
        const rowIdx = _.get(selected,'row.rowId');

        const selectedCell = _.get(selected,`row.cells.${colIdx}`);
        const selectedStyle = _.get(selectedCell,'style');
        // console.log(selected)
        if(selectedStyle){
            handleSetSelectedStyle(selectedStyle);
        }

        return selected
    }

    const handleSetSelectedStyle = (style : Style & CellStyle)=>{
        if(style){
            const {background = '#fff', color = '#000', fontSize = '16px', fontWeight, justifyContent} = style

            fontSizeRef.current!.value = fontSize;
    
            colorRef.current!.value = color;
    
            backgroundRef.current!.value = background;
        }
    }

    const handleMergeCells = () => {
        const range: [] = _.get(ref, 'current.state.selectedRanges', []);
        const cell = _.get(range, '0');

        const columns = _.get(cell, 'columns', []);
        const rows = _.get(cell, 'rows', []);
        if (rows.length > 1) {
            alert('1줄이상은 셀병합 기능 지원없음!!!')
            return null;
        }
        if (columns.length <= 1) return null

        const colId = _.get(columns, '0.columnId',0);
        const rowId = _.get(rows,'0.rowId');

        // 선택한 영역 colspan 데이터 넣기
        setPeople(prev => {
            let clone = [...prev];

            // 이미 병합된 셀인지?
            const chkColspan = _.get(clone, `${rowId}.props.colspan.col${colId}`);

            // 병합 해제
            if(chkColspan === columns.length){
                let extracount = columns.length-1;
                _.set(clone, `${rowId}.props.colspan.col${colId}`, 1);
                while(extracount>0){
                    _.set(clone, `${rowId}.props.colspan.subcol${Number(colId)+extracount}`, null);
                    extracount -= 1;
                }
            } else {
                let startColId = colId;
                let length = columns.length;
                // 선택 시작점에 종속점이 있다면
                if(!_.isEmpty(_.get(clone, `${rowId}.props.colspan.subcol${colId}`))){
                    startColId = _.get(clone, `${rowId}.props.colspan.subcol${colId}`,0);
                    length +=  Number(colId) - startColId 
                }
                // console.log(startColId,' startColId')
                // console.log(length,' length')
                let count = 1;
                let saveOldcolspan = {count : 0, id : 0} ;
                _.set(clone, `${rowId}.props.colspan.col${startColId}`,  length);
                while(count < length){
                    _.set(clone, `${rowId}.props.colspan.subcol${Number(startColId)+count}`, startColId);
                    if(_.get(clone,`${rowId}.props.colspan.col${Number(startColId)+count}`,0)!==0){
                        saveOldcolspan.count = _.get(clone,`${rowId}.props.colspan.col${Number(startColId)+count}`,0);
                        saveOldcolspan.id = Number(startColId)+count;
                        _.unset(clone,`${rowId}.props.colspan.col${Number(startColId)+count}`)
                    }
                    count += 1;
                }
                // console.log(saveOldcolspan , 'saveOldcolspan')
                // 처리도중에 발견한 시작점이 있을 경우,
                if(saveOldcolspan.id !== 0 ){
                    const oldLast = saveOldcolspan.id + saveOldcolspan.count - 1;
                    if(oldLast > _.get(columns[columns.length-1],'columnId')){
                        _.set(clone, `${rowId}.props.colspan.col${startColId}`, oldLast-Number(startColId)+1)
                        let count = 1;
                        while(count < saveOldcolspan.count){
                            // console.log(saveOldcolspan.id+count, '업데이트중', startColId)
                            _.set(clone, `${rowId}.props.colspan.subcol${saveOldcolspan.id+count}`, startColId);
                            count += 1;
                        }
                    }

                }

            }
            return clone
        })

    }

    return (
        <div style={{display:"flex"}}>
            <button onClick={handleUndoChanges}>↩</button>
            <button onClick={handleRedoChanges}>↪</button>

            <select ref={fontSizeRef} onChange={()=>handleChangeStyle('font-size',fontSizeRef.current?.value)} defaultValue={'16px'}>
                {
                    fontList.map(elm=>(
                        <option key={elm} value={`${elm}px`}>{elm}</option>
                    ))
                }
            </select>

            <button onClick={()=>handleChangeStyle('font-bold', 'bold')} style={{fontWeight:'bold'}}>B</button>

            <input ref={colorRef} onChange={()=>handleChangeStyle('color', colorRef.current?.value)} defaultValue={'#000'}/>
            
            <input ref={backgroundRef} onChange={()=>handleChangeStyle('background', backgroundRef.current?.value)} defaultValue={'#fff'}/>

            <div>
                <button onClick={()=>handleChangeStyle('justify-content', 'flex-start')}>왼</button>
                <button onClick={()=>handleChangeStyle('justify-content', 'center')}>중</button>
                <button onClick={()=>handleChangeStyle('justify-content', 'flex-end')}>오</button>
            </div>

            {/* <div>
                <button onClick={()=>handleChangeStyle('border', true)}>테있</button>
                <button onClick={()=>handleChangeStyle('border', false)}>테없</button>
            </div> */}

            <button onClick={(e)=>handleMergeCells()}>셀 병합</button>

        </div>
    )
})

export default ToolBox;