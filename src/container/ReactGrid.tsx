import SheetItem from '../component/ReactGrids/SheetItem'

import { ReactGrid, Column, Row, CellChange, TextCell, Id, DefaultCellTypes, Highlight, CellTemplate, } from "@silevis/reactgrid";

import Original from '../component/ReactGrids/Original'
import '../style/components/reactGrid.scss'
import { useMemo, useState, useEffect, createContext, useRef, SetStateAction } from 'react'
import _ from 'lodash';

import * as Dummy from '../component/ReactGrids/dummy';
import StaticHTML from '../component/ReactGrids/StaticHTML'
import Popup from 'reactjs-popup';

type Props = {
    trigger: JSX.Element | ((isOpen: boolean) => JSX.Element) | undefined
}

type Context = { 
    dataList: any[],
    setDataList : React.Dispatch<SetStateAction<any[]>>,
    collect: boolean,
    setCollect : React.Dispatch<SetStateAction<boolean>>,
}


export const DataListContext = createContext< Context | null>(null);

const ReactGrids = ({ trigger }: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const popupRef = useRef(null);
    const [dataList, setDataList] = useState<any[]>([]);

    const [collect, setCollect] = useState(false);
    const [seletedSheet, setSelectedSheet] = useState(0);

    const sheetList = useMemo(() => {
        const arr = dataList.map((data, idx) => {
            return `sheet${idx + 1}`
        })
        if (_.isEmpty(arr)) {
            arr.push('sheet1')
        }

        return arr
    }, [dataList])

    useEffect(() => {
        getDataList();
    }, [])

    const getDataList = async () => {
        // const { dummy1, dummy2 } =s Dummy;
        // setDataList([dummy1, dummy2])
    }

    const handleSave = ()=>{
        setCollect(true);
    }

    useEffect(()=>{
        console.log(dataList,'데이터 리스트 업데이트 완료?')

    },[dataList])

    return (
        <>
            <StaticHTML/>
        </>
    )

    return (
        
        <div className="xcell_main_container">
            <div style={{ display: 'flex', }}>
                <button onClick={() => _.get(popupRef, 'current.close', () => { })()}>닫기</button>
                <button onMouseDown={() => handleSave()}>                저장                </button>
            </div>

            <DataListContext.Provider value={{ dataList, setDataList, setCollect , collect }}>
                {
                    _.isEmpty(dataList) ?
                        <SheetItem sheetIdx={0}/>
                        :
                        dataList.map((data,idx)=>{
                            if(seletedSheet === idx){
                                return (
                                    <SheetItem data={data} sheetIdx={seletedSheet} />
                                )
                            }
                        })
                }

                <div className="sheet-container" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                    {
                        sheetList.map((sheet, idx) => (
                            <button key={sheet} className={`${seletedSheet === idx && 'selected sheetbtn'}`} onMouseDown={()=>setCollect(true)} onClick={() => {setSelectedSheet(idx); }}>{sheet}</button>
                        ))
                    }


                </div>
            </DataListContext.Provider>
        </div>
    )
}

export default ReactGrids;






