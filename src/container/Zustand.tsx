
import {useCountStore} from "@lib/Zustand/context";


const Zustand = ()=>{

    const {counts, increaseCount} = useCountStore(state=>state);

    

    return(
        <div>
            <h1>Zustand</h1>

            <p>{counts}</p>

            <button onClick={()=>increaseCount()}>버튼</button>
        </div>
    )
}

export default Zustand;

