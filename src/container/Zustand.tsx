
import {useCountStore} from "@lib/Zustand/context";


const Zustand = ()=>{

    const {counts, increaseCount} = useCountStore(state=>state);

    

    return(
        <div>
            <h1>Zustand</h1>
        </div>
    )
}

export default Zustand;

