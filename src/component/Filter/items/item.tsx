import {useEffect, useRef, useState} from 'react'

import './item.css';


const FilterItem = ({data, id, handleList}:{data:any, id: String, handleList : (id: String, filter: any, value: any) => void})=>{
    const [select,setSelect] = useState<string | number | readonly string[] | undefined>('');
    const [input,setInput] = useState<string | number | readonly string[] | undefined>('');

    useEffect(()=>{
        setSelect(data.filter);
        setInput(data.value);
    },[data])

    const handleFilter = ()=>{
        
    }

    return(
        <div style={{display :'flex', flexDirection :"row"}}>
            <div className='container'>
                <select value={select}
                    onChange={(e)=>{
                        setSelect(e.target.value);
                        handleList(id,e.target.value,input);
                    }}
                >
                    <option>교육기간</option>
                    <option>과정명</option>
                    <option>아이디</option>
                    <option>이름</option>
                    <option>이메일</option>
                    <option>소속명</option>
                    <option>수료번호</option>
                    <option>지역</option>
                </select>
                

                
                <input value={input}  type="text"
                    onChange={(e)=>{setInput(e.target.value);handleList(id,select,e.target.value);}}
                />
            </div>

        </div>
    )
}

export default FilterItem;



