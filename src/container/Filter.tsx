import {useState} from 'react'


import FilterItems from '@src/component/Filter/items/items';



const Filter = ()=>{
    const [filterUse, setFilterUse] = useState(true);

    return(
        <div>
            {
                !filterUse ?
                <button onClick={()=>setFilterUse(true)}>사용</button>
                :
                <>
                    <FilterItems />
                    <button onClick={()=>setFilterUse(false)}>미사용</button>
                </>
            }
        </div>
    )
}

export default Filter;

