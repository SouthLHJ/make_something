import React, { useRef, useState } from "react";

const CheckImgReg = ()=>{

    const [inputValue, setInputValue] = useState("");

    const handleInputChange : React.ChangeEventHandler<HTMLTextAreaElement>  = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        const match = newValue.match(/<.*img.*\/>/); // regular expression to match only alphabets
        // const match2 = newValue.match(/<.*img.*alt.*=.*("|'|`)("|'|`)\/>/); // regular expression to match only alphabets
        // const match3 = newValue.match(/<.*img.*alt.*=.*("|'|`).*("|'|`)\/>/); // regular expression to match only alphabets

        // if(match2 || (match!==null && (match3===null))){
        //     if(match2){
        //         console.log(match2,"dfsdf")
        //         const namearr= match2[0].match(/\/.*(png|jpg|svg|jpeg)/);
        //         console.log(namearr);
        //         setInputValue(current=>
        //             current.replace(`alt=""`, `alt="${namearr![0].split("/")[1]}"`)
        //         )

        //     }else{
        //         console.log(match,"asdfasdf");
                const namearr= match![0].match(/\/.*.(png|jpg|svg|jpeg)/);
                const n1 = namearr![0].split("/").reverse()[0];
                let url = match![0].match(/src=("|'|`).*("|'|`)/);
                let nwurl = url![0].split("src=")[1]
                console.log(n1,"??");
                setInputValue(current=>
                    current.replace(/<.*img.*\/>/g, `<img src="${nwurl}" alt="${n1}" />`)
                )
                
            // }
        // }

    };
    
      return (
        <div style={{display :"flex",flexDirection:"column",flex : 1}}>
          <textarea  style={{display :"flex", width : "100%", height : 100, overflow:"scroll"}} value={inputValue} onChange={handleInputChange} />
          <div style={{display :"flex",flexDirection:"column",width : "100%", height : 100, overflow:"scroll"}}>
            {
                inputValue.split(">").map(elm=><div data-letter={elm.toLowerCase().trimStart().trimEnd()+">"}>{elm+">"}</div>)
            }

            <input alt=""/>
            <img alt=""/>
            <img alt=""/>
            <img alt=""/>
          </div>
        </div>
    );
}

export default CheckImgReg;