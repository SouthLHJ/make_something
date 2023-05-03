import {useEffect, useRef, useState} from 'react'

import {FieldOption,FilterItemData} from "@container/Filter"

type Props = {
    data : FilterItemData,
    id : string,
    handleList : (id: String, filter: any, value: any) => void,
    field : Array<FieldOption>
}

const FilterItem = ({data, id, handleList, field}:Props)=>{
    const [select,setSelect] = useState<string | number | readonly string[] | undefined>('');
    const [input,setInput] = useState<string | number | readonly string[] | undefined>('');

    useEffect(()=>{
        let timer = setTimeout(()=>{
            handleList(id,select,input??'');
        },600)

        return ()=>{
            clearTimeout(timer)
        }
    },[input])

    useEffect(()=>{
        // delete이후 태그별 데이터 재입력을 위한 업데이트
        setSelect(data.filter);
        setInput(data.value); 
    },[data])

    const handleFilter = ()=>{
        
    }

    return(
        <div className='flex_row'>
            <div className='container'>
                <select value={select} className='select'
                    onChange={(e)=>{
                        setSelect(e.target.value);
                        setInput('');
                        handleList(id,e.target.value,'');
                    }}
                >
                    {
                        field.map(option=><option  value={option.field_en}>{option.field}</option>)
                    }
                </select>
                

                
                {
                    data.type==="text"?
                        <input value={input}  type="text" placeholder='내용입력' className='form-control input'
                            onChange={(e)=>{setInput(e.target.value);}}
                        />
                    
                    :
                        <input value={input}  type="date" className='form-control input'
                            onChange={(e)=>{setInput(e.target.value);}}
                        />
                }
            </div>

        </div>
    )
}

export default FilterItem;



