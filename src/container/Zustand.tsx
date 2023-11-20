
import XcellZustand, {useInitStore} from "@lib/Zustand/context";


const Zustand = ()=>{

    const {isMobile, user} = useInitStore(state=>state);

    

    return(
        <div>
            <XcellZustand/>
            <h1>Zustand</h1>

            <p>{isMobile}</p>
            <p>{user?.email}</p>

            <button onClick={()=>{}}>버튼</button>
        </div>
    )
}

export default Zustand;

