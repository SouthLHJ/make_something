import {useState,useEffect} from "react";



const IconList = ()=>{
    const [list, setList] = useState<JSX.Element|null>(null);

    useEffect(()=>{
        import("react-icons/fc")
        .then((module: any)=>setList(module))
        .catch((e)=>console.log(e.message))
    },[])

    if(!list){
        return (
            <div>Loading...</div>
        )
    }


    const icons = Object.keys(list).map((listName) =>{
        const Compo = list[listName];
        return (
            <div >
                <Compo size={30}/>
                <span>{listName}</span>
            </div>
        )
    })

    return (
        <div style={{height : "400px", overflowY : "scroll"}}>
            {icons}
        </div>
    )
}





export default IconList