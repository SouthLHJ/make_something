import { useState } from "react";

 function useAlert(){
    const [open , setOpen] = useState<Boolean>(false);
    const [onfunction ,setOnfunction]= useState<()=>void>(()=>{});


    function fnc( onClose? : ()=>void){
        if(onClose){
            setOnfunction(onClose);
        }else{
            setOnfunction(()=>{});
        }

    }

    return {fnc, onClose : onfunction};
}

export default useAlert;