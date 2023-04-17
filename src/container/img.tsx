import { useState, useId } from "react";

const ImageURL = ()=>{
    const [imgurl, setImgURL] = useState("");
    const divId = useId();
    const imageurlId = useId();

    const handleInputChange : React.ChangeEventHandler<HTMLInputElement>  = (event) => {
        setImgURL(event!.target!.value);
    }


    return(
        <div style={{width : "100%",background :"white"}} aria-describedby={divId}>
        <p id={divId} aria-hidden>이미지 컴포넌트 컨테이너</p>
            <input onChange={handleInputChange} aria-describedby={imageurlId}/>
            <div style={{width : "100%",background :"white"}}>
            {
                imgurl &&
                <img id={imageurlId} style={{width : "100%"}} src={`https://kacademy.kisti.re.kr/assets/images${imgurl}`} alt=""/>
            }

            </div>
            <div style={{background :"black"}}>
            {
                imgurl &&
                <img id={imageurlId} style={{width : "100%"}} src={`https://kacademy.kisti.re.kr/assets/images${imgurl}`} alt=""/>
            }

            </div>
            
        </div>
    )
}

export default ImageURL;