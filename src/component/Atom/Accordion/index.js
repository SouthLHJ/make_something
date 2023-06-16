import _ from "lodash";
import { useState } from "react";

/**
 * 
 * @param {Element} title 
 * @param {Element} middle 
 * @param {Element} content 
 * @param {Function} handleClear 
 * @returns 
 */
const AccordianCustom = ({
    title,
    middle,
    content,
    handleClear = null,
    className
})=>{
    const [preview, setPreview] = useState(true);

    return (
        <div className={`accordian_custom_container ${className}`} >
            <div className={`header_container ${preview && 'open'}`}>
                <div className='title'>
                    {title}
                </div>

                { !_.isEmpty(middle) && middle }

                <div className='etc_func'>
                    <button onClick={()=>{setPreview(current=>!current)}} type='button'>
                        {
                            preview ? 
                            <img src='/assets/images/admin/thin_blue_down_arrow.svg'/>
                            :
                            <img src='/assets/images/admin/thin_gray_down_arrow.svg'/>
                        }
                    </button>
                    {
                        handleClear!==null &&
                        <button onClick={(e)=>handleClear(e)} type='button'>
                            {
                                preview ? 
                                <img src='/assets/images/admin/delete_blue.svg'/>
                                :
                                <img src='/assets/images/admin/delete_gray.svg'/>
                            }
                        </button>
                    }
                </div>
            </div>

            <div className={["body_container", !preview && 'displaynone'].join(' ')}>
                {content}
            </div>
        </div>
    )
}


export default AccordianCustom;



const Example = ()=>{
    return (
        <Accordian
            className='cm-container'
            title={
                <>
                <img alt='' src='/assets/images/admin/code_icon.svg' />
                코드보기
                </>
            }
            middle={
                <div style={{display :"flex", alignContent : "center"}}>
                    {
                     themeS.map((string,idx)=>{
                        return (
                            <div className={`cm-theme-button cm-${string} ${themeS[theme] === string ? "cm-select" : null }`} onClick={()=>setTheme(idx)}>
                                <span >{string}</span>
                            </div>
                        )
                     })
                    }
                </div>
            }

            content={
                <CodeMirror
                    value={code}
                    height="calc(100vh - 100vh/4)" // Quill.scss의 .code_block_quill height와 연관
                    extensions={[javascript({ jsx: true })]}
                    onChange={(...props)=> {
                        onChange(...props);
                    }}
                    theme={themeM[theme]}
                />
            }

            handleClear={handleClear}
        />
    )
}