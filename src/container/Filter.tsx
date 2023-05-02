import {useMemo, useState} from 'react'


import FilterItems from '@src/component/Filter/items/items';



const Filter = ()=>{
    const [filterUse, setFilterUse] = useState(true);



    const data = useMemo(()=>{
        
        
    },[filterUse])

    const handleSearch = (filter : Array<Array<Object>>)=>{
        const key = ['교육기간','과정명','아이디','이름','이메일','소속명','수료번호','지역'];

        filter.forEach((andFilter,andIndex)=>{
            console.log(andFilter, andIndex,"==== And");
            andFilter.forEach((orFilter, orIndex)=>{
                console.log('field : ',orFilter.filter, '/ value : ',orFilter.value, orIndex,"==== Or");

                
            })
        });


    }


    return(
        <div>
            {
                !filterUse ?
                <button onClick={()=>setFilterUse(true)}>사용</button>
                :
                <>
                    <FilterItems handleSearch={handleSearch}/>
                    <button onClick={()=>setFilterUse(false)}>미사용</button>
                </>
            }
        </div>
    )
}

export default Filter;

