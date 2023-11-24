import axios from 'axios';
import fs from 'fs';
import _ from 'lodash';
import PPTXCompose from "pptx-compose";
import { useRef, useState } from "react";


const Powerpoint2HTML = ()=>{

    // const samplePPTX = path.join('!!', "./assets/AI 피부 분석과 맞춤형 화장품 개발_10-2차시_v1.0_231120.pptx");

    
    // Initialize repo
    const composer = new PPTXCompose();

    const inputRef = useRef<HTMLInputElement>(null);

    const [json, setJson ]  = useState<any>('');

    const handleUploadFile = async()=>{
        if(inputRef.current?.files){
            console.log(inputRef.current?.files,'inputRef.current')
            const formData = new FormData();
            formData.append('file', inputRef.current.files[0]);
    
            const rst = await axios.post('http://localhost:8000/ppt2html/filesave',formData)
            console.log(rst,'rst')
        }
    }

    const handlePPT2JSON = async()=>{
        // Parses a PPTX file to JSON
        const {data : rst} = await axios.get('http://localhost:8000/ppt2html/ppt2json',{

        })
        console.log(JSON.parse(_.get(rst, 'data')),'rst')
        setJson(_.get(rst, 'data'));
    }
    const handlePDF2JSON = async()=>{

        const {data : rst} = await axios.get('http://localhost:8000/ppt2html/pdf2json',{

        })
        console.log(JSON.parse(_.get(rst, 'data')),'rst')
        setJson(_.get(rst, 'data'));

        // Parses JSON output to PPTX
    }
    const handleJSON2PPT = async()=>{

        // Parses JSON output to PPTX
    }


    return (
        <div>
            {/* <input type="file" ref={inputRef} /> */}

            {/* <button onClick={handleUploadFile}>가져온 ppt</button> */}



            <button onClick={handlePPT2JSON}>ppt 2 json</button>

            <button onClick={handlePDF2JSON}>pdf 2 json</button>
            
            <button onClick={handleJSON2PPT}>json 2 ppt</button>


            
            <div>
                <textarea value={json}/>
            </div>
        </div>
    )

}


export default Powerpoint2HTML;