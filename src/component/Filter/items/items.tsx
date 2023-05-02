import {useRef,memo, useState, useEffect, useCallback} from 'react'

import FilterItem from "@src/component/Filter/items/item";

const key = ['교육기간','과정명','아이디','이름','이메일','소속명','수료번호','지역'];

const FilterItems = ({handleSearch}:{handleSearch : (filter: Array<Array<Object>>) => void})=>{

    const [list, setList] = useState<Array<Array<Object>>>([[{filter : "교육기간", value : 1, type : "text"}]]);
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
            setList([[{filter : "교육기간", value : 1, type : "text"}]])
        }
    },[])

    const onChangeList = useCallback((id:String,filter:any,value:any)=>{
        let idIdx = id.split("_").map(item=>Number(item));

        setList(current=>{
            let newList : any = [...current];
            newList = newList.map((ritems : Array<Object>,ridx : Number)=>{
                if(idIdx[0]===ridx){
                    return ritems.map((citems,cidx)=>{
                        if(idIdx[1]===cidx){
                            let newObj = {...citems};
                            newObj.filter  = filter;
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
    
    const handleAddRow = (id:Number)=>{
        console.log("handleAddRow");
        // dummy
        const dum = (Math.random()*10).toFixed(0);
        setList(current=>{
            let item = [...current,[{filter : key[Number(dum)], value : dum , type : "text"}]];
            
            return item;
        })
    }

    const handleAddColumn = (id:String)=>{
        console.log("handleAddColumn")
        let idIdx = id.split("_")
        // dummy
        const dum = (Math.random()*10).toFixed(0);
        setList(current=>{
            let item = current.map((ritems,ridx)=>{
                if(ridx === Number(idIdx[0])){
                    return [...ritems,{filter : key[Number(dum)], value : dum , type : "text"}]
                }else{
                    return ritems
                }
            });
            return item;
        })
    }

  
    return(
        <>
            <div style={{display :'flex', flexDirection : "row"}}>
                {
                    list.map((rfilter, ridx )=>{

                        return (
                            <>
                                <div style={{display :'flex', flexDirection :"column"}}>
                                    {
                                    rfilter.map((filter,cidx)=>{
                                        return (
                                        <>
                                            <FilterItem data={filter} id={`${ridx}_${cidx}`} handleList={onChangeList}/>
                                            {
                                                (cidx === rfilter.length-1 || rfilter.length===1) ?
                                                <button onClick={()=>handleAddColumn(`${ridx}_${cidx}`)}>or</button>
                                                :
                                                <div style={{width : `125px`, height : `${30}px`, borderRight : "1px solid #ddd"}}></div>
                                            }
                                        </>
                                        )
                                    })
                                    }
                                </div>
                                {
                                    (ridx === list.length-1 || list.length===1 )?
                                    <button style={{height : "40px"}} onClick={()=>handleAddRow(ridx)}>and</button>
                                    :
                                    <div style={{width : `${30}px`, height : `20px`, borderBottom : "1px solid #ddd"}}></div>
                                }
                            </>
                        )
                    })
                }
            </div>
            <button onClick={()=>handleSearch(list)}>검색</button>
        </>
    )
}

export default FilterItems;

/*
    const onChangeList = useCallback((id:any,filter:any,value:any)=>{
  
          setList(current=>{
            let item = current;
            item[id].filter = filter;
            item[id].value = value;
            return item;
        })
    },[list])


    const handleAddRow = (id)=>{
        console.log("handleAddRow")
        setList(current=>{
            let item = {...current};
            item[id].row = 50;
            item[Math.random()] = {filter : "교육기간", value : "값1", link : id, row : 0, column : 0}
            return item;
        })
    }

    const handleAddColumn = (id)=>{
        console.log("handleAddColumn")
        setList(current=>{
            let item = {...current};
            item[id].column = 50;
            return item;
        })
    }

*/

/*
<div style={{display : "flex", flexDirection : "row"}}>
    <RowBtnLine width={50} heigth={50}/>
    <RowBtnLine width={50} heigth={50}/>
    <RowBtnLine width={50} heigth={50}/>
</div>
{
    Object.keys(list).map((key,index)=>{
        let id = key;
        return (
            <div key={key} style={{display : "flex", flexDirection : "row"}}>
                <div style={{display :'flex', flexDirection : "column"}}>
                    <div style={{display :'flex', flexDirection :"row"}}>
                        {
                            <>
                                <FilterItem data={list[key]} id={id} handleList={onChangeList}/>
                                {
                                    list[key].row===0 ?
                                    <button style={{height : "21px"}} onClick={()=>handleAddRow(id)}>and</button>
                                    :
                                    <div style={{width : `${list[key].row}px`, height : `10px`, borderBottom : "1px solid #ddd"}}></div>
                                }
                            </>
                        }
                    </div>
                    <div>
                        {
                            list[key].column===0 ?
                            <button onClick={()=>handleAddColumn(id)}>or</button>
                            :
                            <div style={{width : `125px`, height : `${list[key].column}px`, borderRight : "1px solid #ddd"}}></div>
                        }
                    </div>
                </div>
            </div>
        )
    })

}
*/