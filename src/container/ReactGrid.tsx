import SheetItem from '../component/ReactGrids/SheetItem'

import { ReactGrid, Column, Row, CellChange, TextCell, Id, DefaultCellTypes, Highlight , CellTemplate, } from "@silevis/reactgrid";

import Original from '../component/ReactGrids/Original'
import '../style/components/reactGrid.scss'
import { useMemo, useState, useEffect } from 'react'
import _ from 'lodash';

import * as Dummy from '../component/ReactGrids/dummy';


interface Data {
    
}

const ReactGrids = ()=>{

    const [dataList, setDataList] = useState<any[]>([]);
    const [seletedSheet, setSelectedSheet] = useState(0);
    const sheetList = useMemo(() => {
        const arr = dataList.map((data,idx)=>{
            return `sheet${idx+1}`
        })
        if(_.isEmpty(arr)){
            arr.push('sheet1')
        }

        return arr
    }, [dataList])

    useEffect(()=>{
        getDataList();

    },[])

    const getDataList = async()=>{
        const {dummy1 } = Dummy;
        setDataList([dummy1])    
    }

    



    return (
       <div style={{display:'flex', flexDirection : 'column', marginTop : 10}}>
        <div style={{display:'flex',}}>
            {/* <button onClick={()=>{console.log(people,'데이터')}}>저장</button> */}
        </div>

        {
            _.isEmpty(dataList) ?
            <SheetItem />
            :
            <SheetItem data={dataList[seletedSheet]}/>
        }
 
        <div style={{width:'100%', display:'flex', justifyContent:'flex-start'}}>
            {
                sheetList.map((sheet,idx) => (
                    // <div onClick={(e)=>{e.preventDefault();console.log(sheet)}} onDoubleClick={(e)=>e.preventDefault()}>
                        // <input value={sheet} disabled/>
                        <button key={sheet} className={`${seletedSheet === idx && 'selected sheetbtn'}`} onClick={()=>setSelectedSheet(idx)}>{sheet}</button>
                    // </div>
                ))
            }


        </div>
       </div>
    )
}

export default ReactGrids;



