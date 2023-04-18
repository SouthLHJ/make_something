


const MakeError = ()=>{

    const handleError = async()=>{
        try{
            await fetch("/nothing",{
                method : "GET"
            })
        }catch(e){

        }


    }


    return(
        <div>
            <button onClick={()=>handleError()}>에러생성</button>
        </div>
    )
}

export default MakeError;