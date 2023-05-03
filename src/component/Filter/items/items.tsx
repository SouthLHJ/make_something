import {useRef,memo, useState, useEffect, useCallback} from 'react'

import FilterItem from "@src/component/Filter/items/item";
import {FieldOption,FilterItemData} from "@container/Filter"
import './item.scss';

const defaultField = [{field : '교육기간', type : "date", field_en: "learning_date"},{field : '과정명', type : "text", field_en: "cw_kor_title"},
{field : '아이디', type : "text", field_en: "stu.0.stu_id"},{field : '이름', type :"text", field_en: "stu.0.stu_name"},{field : '이메일', type : "text", field_en: "stu.0.stu_email"},
{field : '소속명', type : "text", field_en: "stu.0.stu_org"}];

type Props = {
    handleSearch : (filterData: any) => null | undefined,
    handleResetSearch : () => void,
    originData : Array<any>,
    field : Array<FieldOption>
}

const FilterItems = ({handleSearch,handleResetSearch,originData=[], field=defaultField,}:Props)=>{

    const [list, setList] = useState<Array<Array<FilterItemData>>>([[{filter : "교육기간", value : "1990-01-01", type : "text"}]]);
    /*
        [ $and :
            [$or : {},{},{}],
            [$or : {},{},{}],
            [$or : {},{},{}],
            [$or : {},{},{}],
        ]
    */
    useEffect(()=>{
        return ()=>{
            setList([[{filter : "교육기간", value : '1990-01-01', type : "text"}]])
        }
    },[])

    const onChangeList = useCallback((id:String,filter:any,value:any)=>{
        let idIdx = id.split("_").map(item=>Number(item));

        setList(current=>{
            let newList= [...current];
            newList = newList.map((ritems,ridx)=>{
                if(idIdx[0]===ridx){
                    return ritems.map((citems,cidx)=>{
                        if(idIdx[1]===cidx){
                            let newObj = {...citems};
                            let type = findType(filter);
                            newObj.filter  = filter;
                            newObj.type = type;
                            newObj.value = value;
                            return newObj;
                        }else{
                            return citems
                        }
                    })
                }else{
                    return ritems;
                }
            })

            return newList;

        })
        
    },[list])
    
    const handleAddRow = (id:string)=>{
        console.log("handleAddRow");
        setList(current=>{
            let item = [...current,[{filter : "learning_date", value : '2023-04-30' , type : "date"}]];
            
            return item;
        })
    }

    const handleAddColumn = (id:string)=>{
        console.log("handleAddColumn")
        let idIdx = id.split("_")
        setList(current=>{
            let item = current.map((ritems,ridx)=>{
                if(ridx === Number(idIdx[0])){
                    return [...ritems,{filter : "learning_date", value : '2023-04-30' , type : "date"}]
                }else{
                    return ritems
                }
            });
            return item;
        })
    }

    const handleDeleteColumn = (id:string)=>{
        console.log("handleDeleteColumn");
        const idIdx = id.split("_").map(elm=>Number(elm));
        console.log(idIdx,'========= idIdx')
        console.log(list[idIdx[0]][idIdx[1]], "--- 삭제 원하는 데이터");

        if(list.length <= 1 && list[0].length <=1){
            console.log("필터에 남아있는 조건이 1개 뿐이라서 삭제해서는 안돼!");
            return null;
        }

        if(list[idIdx[0]].length <= 1){
            console.log("선택한 Column이 1개 뿐이라서 삭제하면 아예 그 행을 잘라내야해")
            setList((current)=>{
                let newList = [...current];
                newList.splice(idIdx[0],1);
                return newList;
            })

        }else{
            console.log("선택한 Column이 2개 이상이라서 삭제하면 해당 Column만 삭제해두됨.");
            setList((current)=>{
                let newList = [...current];
                newList[idIdx[0]].splice(idIdx[1],1);
                return newList;
            })
        }

    }

    const findType = useCallback((fieldName:string)=>{
        let type = '';
        field.forEach((elm)=>{
            if(elm.field_en===fieldName)type=elm.type;
        })
        return type
    },[field])

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSearch(list);
    }

  
    return(
        <form className='filter_form_container' onSubmit={handleSubmit} onKeyDown={(e)=>{if(e.code==="Enter")e.preventDefault();}}>
            <div className='flex_row main_container'>
                {
                    list.map((rfilter, ridx )=>{

                        return (
                            <>
                                <div className='flex_column or_container'>
                                    {
                                    rfilter.map((filter,cidx)=>{
                                        return (
                                        <>
                                            <div className='flex_row'>
                                                <FilterItem data={filter} id={`${ridx}_${cidx}`} handleList={onChangeList} field={field}/>
                                                <button style={{width :'10px',marginRight :'5px'}} type='button' title='조건 삭제' onClick={()=>handleDeleteColumn(`${ridx}_${cidx}`)}>
                                                    <img alt='' src='/assets/images/closeBtnBlue.svg' />
                                                </button>
                                            </div>
                                            {
                                                (cidx === rfilter.length-1 || rfilter.length===1) ?
                                                <div className='or_btn_container'>
                                                    <button className='or_btn' type='button' title='or 조건 추가' onClick={()=>handleAddColumn(`${ridx}_${cidx}`)}>or</button>
                                                </div>

                                                :
                                                <div></div>
                                            }
                                        </>
                                        )
                                    })
                                    }
                                </div>
                                {
                                    (ridx === list.length-1 || list.length===1 )?
                                    <button  className='and_btn' type='button' title='and 조건 추가' onClick={()=>handleAddRow(ridx)}>and</button>
                                    :
                                    <div className='img_container'><img className='img' alt='' src='/assets/images/admin/plus_icon.svg'/></div>
                                }
                            </>
                        )
                    })
                }
            </div>

            <div className='btn_container'>
                <button className='search_btn' type='submit' onKeyDown={(e)=>console.log(e)} >통합 검색</button>
                <button className='reset_btn' type='button' onClick={handleResetSearch}><img alt='' src='/assets/images/admin/refresh_icon_white.svg'/></button>
            </div>
        </form>
    )
}

export default FilterItems;

