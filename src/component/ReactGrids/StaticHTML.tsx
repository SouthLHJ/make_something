
import {useForm} from 'react-hook-form';

interface FormFields {
    first_number : string,
}

const StaticHTML = () => {

    const { register, setValue, getValues, handleSubmit } = useForm({});

    const onSubmit = ()=>async(formData : any)=>{
        console.log(formData, '??')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit())}>
            <div className="ritz grid-container" dir="ltr">
            <table className="waffle" cellSpacing={0} cellPadding={0}>
                <thead>
                    <tr>
                        <th className="row-header freezebar-origin-ltr"></th>
                        <th id="1119060806C0" style={{width:"60px"}} className="column-headers-background">A</th>
                        <th id="1119060806C1" style={{width:"23px"}} className="column-headers-background">B</th>
                        <th id="1119060806C2" style={{width:"23px"}} className="column-headers-background">C</th>
                        <th id="1119060806C3" style={{width:"23px"}} className="column-headers-background">D</th>
                        <th id="1119060806C4" style={{width:"23px"}} className="column-headers-background">E</th>
                        <th id="1119060806C5" style={{width:"34px"}} className="column-headers-background">F</th>
                        <th id="1119060806C6" style={{width:"20px"}} className="column-headers-background">G</th>
                        <th id="1119060806C7" style={{width:"20px"}} className="column-headers-background">H</th>
                        <th id="1119060806C8" style={{width:"20px"}} className="column-headers-background">I</th>
                        <th id="1119060806C9" style={{width:"20px"}} className="column-headers-background">J</th>
                        <th id="1119060806C10" style={{width:"20px"}} className="column-headers-background">K</th>
                        <th id="1119060806C11" style={{width:"20px"}} className="column-headers-background">L</th>
                        <th id="1119060806C12" style={{width:"20px"}} className="column-headers-background">M</th>
                        <th id="1119060806C13" style={{width:"20px"}} className="column-headers-background">N</th>
                        <th id="1119060806C14" style={{width:"20px"}} className="column-headers-background">O</th>
                        <th id="1119060806C15" style={{width:"20px"}} className="column-headers-background">P</th>
                        <th id="1119060806C16" style={{width:"20px"}} className="column-headers-background">Q</th>
                        <th id="1119060806C17" style={{width:"20px"}} className="column-headers-background">R</th>
                        <th id="1119060806C18" style={{width:"20px"}} className="column-headers-background">S</th>
                        <th id="1119060806C19" style={{width:"20px"}} className="column-headers-background">T</th>
                        <th id="1119060806C20" style={{width:"18px"}} className="column-headers-background">U</th>
                        <th id="1119060806C21" style={{width:"26px"}} className="column-headers-background">V</th>
                        <th id="1119060806C22" style={{width:"10px"}} className="column-headers-background">W</th>
                        <th id="1119060806C23" style={{width:"24px"}} className="column-headers-background">X</th>
                        <th id="1119060806C24" style={{width:"20px"}} className="column-headers-background">Y</th>
                        <th id="1119060806C25" style={{width:"20px"}} className="column-headers-background">Z</th>
                        <th id="1119060806C26" style={{width:"13px"}} className="column-headers-background">AA</th>
                        <th id="1119060806C27" style={{width:"36px"}} className="column-headers-background">AB</th>
                        <th id="1119060806C28" style={{width:"17px"}} className="column-headers-background">AC</th>
                        <th id="1119060806C29" style={{width:"17px"}} className="column-headers-background">AD</th>
                        <th id="1119060806C30" style={{width:"32px"}} className="column-headers-background">AE</th>
                        <th id="1119060806C31" style={{width:"21px"}} className="column-headers-background">AF</th>
                        <th id="1119060806C32" style={{width:"17px"}} className="column-headers-background">AG</th>
                        <th id="1119060806C33" style={{width:"20px"}} className="column-headers-background">AH</th>
                        <th id="1119060806C34" style={{width:"60px"}} className="column-headers-background">AI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R0" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>1</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R1" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>2</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s1" colSpan={5} rowSpan={2}>
                            <span
                                style={{ fontSize: '12pt', fontFamily: 'Arial', fontWeight: 'bold' }}>SCHEDULE 1</span>
                            <span
                                style={{ fontSize: '11pt', fontFamily: 'Arial', fontWeight: 'bold' }}><br /><br /><br />(Form 1040)</span>
                        </td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s3"></td>
                        <td className="s4" colSpan={6}>OMB No. 1545-0074</td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R2" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>3</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s5" colSpan={21}>Additional Income and Adjustments to Income</td>
                        <td className="s6" colSpan={6} rowSpan={2}>2022</td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R3" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>4</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s7" colSpan={5}></td>
                        <td className="s8"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s3"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R4" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>5</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s9" colSpan={5}>Department of the Treasury</td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s10"></td>
                        <td className="s11 softmerge">
                            <div className="softmerge-inner" style={{width:"289px",left:"-1px"}}>Attach to Form 1040, 1040-SR, or 1040-NR.
                            </div>
                        </td>
                        <td className="s12"></td>
                        <td className="s12"></td>
                        <td className="s12"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s15"></td>
                        <td className="s16" colSpan={5} rowSpan={2}>Attachment<br/>Sequence <span
                                style={{fontSize:'12pt',fontFamily:'Arial',fontWeight:'bold'}}>01</span></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R5" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>6</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s17" colSpan={5}>Internal Revenue Service</td>
                        <td className="s18" colSpan={21}>Go to <span
                                style={{fontSize:'10pt',fontFamily:'Arial',fontWeight:'bold',fontStyle:'italic'}}>www.irs.gov/Form1040</span><span
                                style={{fontSize:'10pt',fontFamily:'Arial',fontWeight:'bold'}}> for instructions and the latest
                                information.</span></td>
                        <td className="s16"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R6" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>7</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s19 softmerge">
                            <div className="softmerge-inner" style={{width:"324px",left:"-1px"}}>Name(s) shown on Form 1040, 1040-SR, or
                                1040-NR</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s14"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s20"></td>
                        <td className="s21 softmerge">
                            <div className="softmerge-inner" style={{width:"178px",left:"-1px"}}>Your social security number</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s22"></td>
                        <td className="s23"></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R7" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>8</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s24" colSpan={26} rowSpan={2}></td>
                        <td className="s25" colSpan={6} rowSpan={2}>001-01-0001</td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R8" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>9</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R9" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>10</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s26" colSpan={3}>Part I</td>
                        <td className="s27"></td>
                        <td className="s28 softmerge">
                            <div className="softmerge-inner" style={{width:"172px",left:"-1px"}}>Additional Income</div>
                        </td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s30"></td>
                        <td className="s31"></td>
                        <td className="s31"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R10" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>11</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s33"></td>
                        <td className="s34">1</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"476px",left:"-1px"}}>Taxable refunds, credits, or offsets of
                                state and local income taxes</div>
                        </td>
                        <td className="s36"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s37"></td>
                        <td className="s37"></td>
                        <td className="s37"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"131px;left:-121px"}}>. . . . . . . . . . </div>
                        </td>
                        <td className="s39">1</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R11" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>12</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s33"></td>
                        <td className="s34">2a</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"118px",left:"-1px"}}>Alimony received</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s37"></td>
                        <td className="s37"></td>
                        <td className="s37"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"391px",left:"-381px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . . . . . . </div>
                        </td>
                        <td className="s39">2a</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R12" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>13</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s41">b</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"375px",left:"-1px"}}>Date of original divorce or separation
                                agreement (see instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s42"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s44" colSpan={5}></td>
                        <td className="s20"></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R13" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>14</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s47">3</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"318px",left:"-1px"}}>Business income or (loss). Attach
                                Schedule C</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"235px",left:"-225px"}}>. . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s39">3</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R14" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>15</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s27">4</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"298px",left:"-1px"}}>Other gains or (losses). Attach Form 4797
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px",left:"-251px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s39">4</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R15" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>16</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s47">5</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"488px",left:"-1px"}}>Rental real estate, royalties,
                                partnerships, S corporations, trusts, etc. <span
                                    style={{fontSize:'10pt',fontFamily:"Arial"}}>Attach Schedule E.</span></div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38"></td>
                        <td className="s49">5</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R16" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>17</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s33">6</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"298px",left:"-1px"}}>Farm income or (loss). Attach Schedule F
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px",left:"-251px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s39">6</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R17" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>18</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s33">7</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"218px",left:"-1px"}}>Unemployment compensation</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"300px",left:"-290px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . </div>
                        </td>
                        <td className="s39">7</td>
                        <td className="s50" colSpan={5}>③<span
                                style={{fontSize:"11pt",fontFamily:'Arial',textDecoration:'underline',textDecorationSkipInk:'none',color:"#0563c1"}}>3950</span>
                        </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R18" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>19</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s27">8</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"98px",left:"-1px"}}>Other income:</div>
                        </td>
                        <td className="s51"></td>
                        <td className="s51"></td>
                        <td className="s52"></td>
                        <td className="s52"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s54"></td>
                        <td className="s54"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s53"></td>
                        <td className="s20"></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R19" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>20</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">a</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"138px",left:"-1px"}}>Net operating loss</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px",left:"-246px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8a</td>
                        <td className="s27">(</td>
                        <td className="s58" colSpan={3}></td>
                        <td className="s59">)</td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R20" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>21</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">b</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"78px",left:"-1px"}}>Gambling</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"300px",left:"-285px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . </div>
                        </td>
                        <td className="s57">8b</td>
                        <td className="s60" colSpan={5}><span
                                style={{fontSize:"11pt",fontFamily:'Arial',textDecoration:'underline',textDecorationSkipInk:'none',color:'#0563c1'}}>①5600</span>
                        </td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R21" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>22</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">c</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"158px",left:"-1px"}}>Cancellation of debt</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"248px",left: "-233px"}}>. . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8c</td>
                        <td className="s60" colSpan={5}><span
                                style={{fontSize:'11pt',fontFamily:'Arial',textDecoration:'underline',textDecorationSkipInk:'none',color:'#0563c1'}}>⑤4000</span>
                        </td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R22" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>23</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">d</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"338px",left:"-1px"}}>Foreign earned income exclusion from Form
                                2555</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"92px;left:-77px"}}>. . . . . . . </div>
                        </td>
                        <td className="s57">8d</td>
                        <td className="s27">(</td>
                        <td className="s40" colSpan={3}> 0 </td>
                        <td className="s59">)</td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R23" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>24</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">e</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"178px",left:"-1px"}}>Income from Form 8853</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"222px;left:-207px"}}>. . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8e</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R24" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>25</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">f</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"178px",left:"-1px"}}>Income from Form 8889</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"222px;left:-207px"}}>. . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8f</td>
                        <td className="s62" colSpan={5}> 0 </td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R25" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>26</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">g</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"238px",left:"-1px"}}>Alaska Permanent Fund dividends</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"183px;left:-168px"}}>. . . . . . . . . . . . . . </div>
                        </td>
                        <td className="s57">8g</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R26" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>27</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">h</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"98px",left:"-1px"}}>Jury duty pay</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px;left:-246px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8h</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R27" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>28</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">i</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"138px",left:"-1px"}}>Prizes and awards</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px;left:-246px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8i</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R28" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>29</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s56">j</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"298px",left:"-1px"}}>Activity not engaged in for profit income
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"144px;left:-129px"}}>. . . . . . . . . . . </div>
                        </td>
                        <td className="s57">8j</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R29" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>30</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s20"></td>
                        <td className="s63">k</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"118px",left:"-1px"}}>Stock options</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s14"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s64"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"27px;left:-12px"}}>. . </div>
                        </td>
                        <td className="s57">8k</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R30" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>31</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">l</td>
                        <td className="s19 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Income from the rental of personal
                                property if you engaged in the rental</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R31" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>32</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"357px",left:"-1px"}}>for profit but were not in the business
                                of renting such property</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"40px;left:-25px"}}>. . . </div>
                        </td>
                        <td className="s57">8l</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R32" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>33</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">m</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Olympic and Paralympic medals and USOC
                                prize money (see</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R33" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>34</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"98px",left:"-1px"}}>instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s14"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s64"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"144px;left:-129px"}}>. . . . . . . . . . . </div>
                        </td>
                        <td className="s57">8m</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R34" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>35</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">n</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"298px",left:"-1px"}}>Section 951(a) inclusion (see
                                instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"131px;left:-116px"}}>. . . . . . . . . . </div>
                        </td>
                        <td className="s57">8n</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R35" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>36</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">o</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"298px",left:"-1px"}}>Section 951A(a) inclusion (see
                                instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"105px;left:-90px"}}>. . . . . . . . </div>
                        </td>
                        <td className="s57">8o</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R36" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>37</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">p</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"338px",left:"-1px"}}>Section 461(l) excess business loss
                                adjustment</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"40px;left:-25px"}}>. . . </div>
                        </td>
                        <td className="s57">8p</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R37" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>38</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">q</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"357px",left:"-1px"}}>Taxable distributions from an ABLE
                                account (see instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"27px;left:-12px"}}>. . </div>
                        </td>
                        <td className="s57">8q</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R38" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>39</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">r</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"357px",left:"-1px"}}>Scholarship and fellowship grants not
                                reported on Form W-2</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"40px;left:-25px"}}>. . . </div>
                        </td>
                        <td className="s57">8r</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R39" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>40</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">s</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Nontaxable amount of Medicaid waiver
                                payments included on Form</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R40" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>41</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"138px",left:"-1px"}}>1040, line 1a or 1d</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"248px;left:-233px"}}>. . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57">8s</td>
                        <td className="s27">(</td>
                        <td className="s58" colSpan={3}></td>
                        <td className="s59">)</td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R41" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>42</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">t</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Pension or annuity from a nonqualifed
                                deferred compensation plan</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R42" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>43</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"278px",left:"-1px"}}>or a nongovernmental section 457 plan
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"131px;left:-116px"}}>. . . . . . . . . . </div>
                        </td>
                        <td className="s57">8t</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R43" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>44</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">u</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"238px",left:"-1px"}}>Wages earned while incarcerated</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"131px;left:-116px"}}>. . . . . . . . . . </div>
                        </td>
                        <td className="s57">8u</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R44" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>45</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34">z</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"217px",left:"-1px"}}>Other income. List type and amount:</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s68" colSpan={7}></td>
                        <td className="s20"></td>
                        <td className="s69"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R45" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>46</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34"></td>
                        <td className="s68" colSpan={17}> </td>
                        <td className="s20"></td>
                        <td className="s70">8z</td>
                        <td className="s62" colSpan={5}> 0 </td>
                        <td className="s45"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td className="s71"></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R46" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>47</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s33">9</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"318px",left:"-1px"}}>Total other income. Add lines 8a through
                                8z</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s72"></td>
                        <td className="s72"></td>
                        <td className="s72"></td>
                        <td className="s72"></td>
                        <td className="s72"></td>
                        <td className="s72"></td>
                        <td className="s72"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"248px;left:-238px"}}>. . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s39">9</td>
                        <td className="s73" colSpan={5}> 9,600 </td>
                        <td className="s0"></td>
                        <td className="s74">수식</td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R47" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>48</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s75"></td>
                        <td className="s76">10</td>
                        <td className="s77 softmerge">
                            <div className="softmerge-inner" style={{width:"475px",left:"-1px"}}>Combine lines 1 through 7 and 9. Enter
                                here and on Form 1040 or 1040-NR, line 8</div>
                        </td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s79"></td>
                        <td className="s80"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s78"></td>
                        <td className="s81 softmerge">
                            <div className="softmerge-inner" style={{width:"30px;left:-20px"}}> . . </div>
                        </td>
                        <td className="s82">10</td>
                        <td className="s83" colSpan={5}><span
                                style={{fontSize:'11pt',fontFamily:'Arial',textDecoration:'underline',textDecorationSkipInk:'none',color:'#0563c1'}}>⑥13,550</span>
                        </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R48" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>49</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s11 softmerge">
                            <div className="softmerge-inner" style={{width:"403px",left:"-1px"}}>For Paperwork Reduction Act Notice, see
                                your tax return instructions.</div>
                        </td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s84"></td>
                        <td className="s85 softmerge">
                            <div className="softmerge-inner" style={{width:"96px",left:"-1px"}}>Cat. No. 71479F</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s51"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"192px;left:-178px"}}>Schedule 1 (Form 1040) 2022</div>
                        </td>
                        <td className="s86"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R49" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>50</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s87 softmerge">
                            <div className="softmerge-inner" style={{width:"184px",left:"-1px"}}>Schedule 1 (Form 1040) 2022</div>
                        </td>
                        <td className="s88"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s31"></td>
                        <td className="s31"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s89"></td>
                        <td className="s89"></td>
                        <td className="s32"></td>
                        <td className="s90"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s91"></td>
                        <td className="s30"></td>
                        <td className="s92 softmerge">
                            <div className="softmerge-inner" style={{width:"49px;left:-35px"}}>Page <span
                                    style={{fontSize:'12pt',fontFamily:'Arial',fontWeight:'bold'}}>2</span></div>
                        </td>
                        <td className="s86"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R50" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>51</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s26" colSpan={3}>Part II</td>
                        <td className="s27"></td>
                        <td className="s28 softmerge">
                            <div className="softmerge-inner" style={{width:"232px",left:"-1px"}}>Adjustments to Income</div>
                        </td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s29"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s30"></td>
                        <td className="s31"></td>
                        <td className="s31"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s32"></td>
                        <td className="s93" colSpan={4}></td>
                        <td className="s94"></td>
                        <td className="s93" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R51" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>52</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">11</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"158px",left:"-1px"}}>Educator expenses</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"378px;left:-368px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . . . . . </div>
                        </td>
                        <td className="s39">11</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R52" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>53</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">12</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"524px",left:"-1px"}}>Certain business expenses of reservists,
                                performing artists, and fee-basis government</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s99"></td>
                        <td className="s100" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R53" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>54</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"198px",left:"-1px"}}>officials. Attach Form 2106</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"326px;left:-316px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . </div>
                        </td>
                        <td className="s39">12</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R54" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>55</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">13</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"402px",left:"-1px"}}>Health savings account deduction. Attach
                                Form 8889</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"157px;left:-147px"}}>. . . . . . . . . . . . </div>
                        </td>
                        <td className="s39">13</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R55" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>56</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">14</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"475px",left:"-1px"}}>Moving expenses for members of the Armed
                                Forces. Attach Form 3903</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"53px;left:-43px"}}>. . . . </div>
                        </td>
                        <td className="s39">14</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R56" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>57</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">15</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"436px",left:"-1px"}}>Deductible part of self-employment tax.
                                Attach Schedule SE</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"118px;left:-108px"}}>. . . . . . . . . </div>
                        </td>
                        <td className="s39">15</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R57" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>58</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">16</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"338px",left:"-1px"}}>Self-employed SEP, SIMPLE, and qualified
                                plans</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"183px;left:-173px"}}>. . . . . . . . . . . . . . </div>
                        </td>
                        <td className="s39">16</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R58" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>59</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">17</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"318px",left:"-1px"}}>Self-employed health insurance deduction
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s98"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"222px;left:-212px"}}>. . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s39">17</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R59" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>60</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">18</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"278px",left:"-1px"}}>Penalty on early withdrawal of savings
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px;left:-251px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s39">18</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R60" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>61</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s35"></td>
                        <td className="s99 softmerge">
                            <div className="softmerge-inner" style={{width:"26px;left:-7px"}}>19a</div>
                        </td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"98px",left:"-1px"}}>Alimony paid</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s36"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s43"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"391px;left:-381px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . . . . . . </div>
                        </td>
                        <td className="s39">19a</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R61" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>62</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s101">b</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"118px",left:"-1px"}}>Recipient&#39;s SSN</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s36"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"261px;left:-246px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s102" colSpan={5}></td>
                        <td className="s103"></td>
                        <td className="s45"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s2"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R62" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>63</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s101">c</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"375px",left:"-1px"}}>Date of original divorce or separation
                                agreement (see instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s36"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s14"></td>
                        <td className="s44" colSpan={5}></td>
                        <td className="s103"></td>
                        <td className="s105"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s2"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R63" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>64</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">20</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"118px",left:"-1px"}}>IRA deduction</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"391px;left:-381px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . . . . . . </div>
                        </td>
                        <td className="s39">20</td>
                        <td className="s106" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R64" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>65</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">21</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"238px",left:"-1px"}}>Student loan interest deduction</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s98"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"287px;left:-277px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . </div>
                        </td>
                        <td className="s39">21</td>
                        <td className="s106" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R65" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>66</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">22</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"178px",left:"-1px"}}>Reserved for future use</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"326px;left:-316px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . </div>
                        </td>
                        <td className="s39">22</td>
                        <td className="s107" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R66" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>67</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">23</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"178px",left:"-1px"}}>Archer MSA deduction</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67"></td>
                        <td className="s12"></td>
                        <td className="s43"></td>
                        <td className="s13"></td>
                        <td className="s97"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"339px;left:-329px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . . . . . </div>
                        </td>
                        <td className="s39">23</td>
                        <td className="s48" colSpan={5}></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R67" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>68</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">24</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"158px",left:"-1px"}}>Other adjustments:</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s14"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s108"></td>
                        <td className="s10"></td>
                        <td className="s109"></td>
                        <td className="s20"></td>
                        <td className="s69"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s103"></td>
                        <td className="s45"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s104"></td>
                        <td className="s2"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R68" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>69</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">a</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"218px",left:"-1px"}}>Jury duty pay (see instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"196px;left:-181px"}}>. . . . . . . . . . . . . . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24a</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R69" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>70</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">b</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Deductible expenses related to income
                                reported on line 8k from</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R70" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>71</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s111 softmerge">
                            <div className="softmerge-inner" style={{width:"358px",left:"-1px"}}>the rental of personal property engaged
                                in for profit</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"92px;left:-77px"}}>. . . . . . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24b</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R71" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>72</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">c</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Nontaxable amount of the value of Olympic
                                and Paralympic</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R72" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>73</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s111 softmerge">
                            <div className="softmerge-inner" style={{width:"338px",left:"-1px"}}>medals and USOC prize money reported on
                                line 8l</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"92px;left:-77px"}}>. . . . . . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24c</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R73" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>74</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">d</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"298px",left:"-1px"}}>Reforestation amortization and expenses
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"144px;left:-129px"}}>. . . . . . . . . . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24d</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R74" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>75</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">e</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Repayment of supplemental unemployment
                                benefits under the</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R75" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>76</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s111 softmerge">
                            <div className="softmerge-inner" style={{width:"138px",left:"-1px"}}>Trade Act of 1974</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"261px;left:-246px"}}>. . . . . . . . . . . . . . . . . . . .
                            </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24e</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R76" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>77</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">f</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"357px",left:"-1px"}}>Contributions to section 501(c)(18)(D)
                                pension plans</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"92px;left:-77px"}}>. . . . . . . </div>
                        </td>
                        <td className="s57">24f</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R77" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>78</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">g</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"357px",left:"-1px"}}>Contributions by certain chaplains to
                                section 403(b) plans</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"66px;left:-51px"}}>. . . . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24g</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R78" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>79</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">h</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"402px",left:"-1px"}}>Attorney fees and court costs for actions
                                involving certain</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s112" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R79" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>80</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s111 softmerge">
                            <div className="softmerge-inner" style={{width:"338px",left:"-1px"}}>unlawful discrimination claims (see
                                instructions)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"118px;left:-103px"}}>. . . . . . . . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24h</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R80" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>81</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">i</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Attorney fees and court costs you paid in
                                connection with an</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R81" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>82</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>award from the IRS for information you
                                provided that helped the</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R82" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>83</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"198px",left:"-1px"}}>IRS detect tax law violations</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"209px;left:-194px"}}>. . . . . . . . . . . . . . . . </div>
                        </td>
                        <td className="s57">24i</td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R83" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>84</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">j</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"258px",left:"-1px"}}>Housing deduction from Form 2555</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"170px;left:-155px"}}>. . . . . . . . . . . . . </div>
                        </td>
                        <td className="s57">24j</td>
                        <td className="s62" colSpan={5}>0</td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R84" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>85</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">k</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"401px",left:"-1px"}}>Excess deductions of section 67(e)
                                expenses from Schedule K-1</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s65"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R85" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>86</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101"></td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"98px",left:"-1px"}}>(Form 1041)</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s67 softmerge">
                            <div className="softmerge-inner" style={{width:"287px;left:-272px"}}>. . . . . . . . . . . . . . . . . . . .
                                . . </div>
                        </td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"25px;left:-3px"}}>24h</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R86" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>87</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s101">z</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"237px",left:"-1px"}}>Other adjustments. List type and amount
                            </div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s14"></td>
                        <td className="s113" colSpan={6}></td>
                        <td className="s20"></td>
                        <td className="s69"></td>
                        <td className="s66" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s55"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R87" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>88</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s34"></td>
                        <td className="s114" colSpan={17}></td>
                        <td className="s64"></td>
                        <td className="s57 softmerge">
                            <div className="softmerge-inner" style={{width:"27px;left:-5px"}}>24z</div>
                        </td>
                        <td className="s61" colSpan={5}></td>
                        <td className="s45"></td>
                        <td className="s110" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R88" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>89</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s2"></td>
                        <td className="s33">25</td>
                        <td className="s35 softmerge">
                            <div className="softmerge-inner" style={{width:"358px",left:"-1px"}}>Total other adjustments. Add lines 24a
                                through 24z</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"209px;left:-199px"}}>. . . . . . . . . . . . . . . . </div>
                        </td>
                        <td className="s39">25</td>
                        <td className="s40" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R89" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>90</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s34">26</td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"524px",left:"-1px"}}>Add lines 11 through 23 and 25. These are
                                your <span style={{fontSize:'12pt',fontFamily:'Arial',fontWeight:'bold'}}>adjustments to
                                    income</span><span style={{fontSize:'12pt',fontFamily:'Arial'}}>. Enter</span></div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s99"></td>
                        <td className="s46" colSpan={5}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R90" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>91</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s95"></td>
                        <td className="s115"></td>
                        <td className="s96 softmerge">
                            <div className="softmerge-inner" style={{width:"475px",left:"-1px"}}>here and on Form 1040 or 1040-SR, line
                                10, or Form 1040-NR, line 10a</div>
                        </td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s98"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s116"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"56px;left:-46px"}}> . . . . </div>
                        </td>
                        <td className="s117" rowSpan={2}>26</td>
                        <td className="s118" colSpan={5} rowSpan={2}> 0 </td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R91" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>92</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s119"></td>
                        <td className="s120"></td>
                        <td className="s119"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s121"></td>
                        <td className="s122"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R92" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>93</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s10"></td>
                        <td className="s109"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s2"></td>
                        <td className="s123"></td>
                        <td className="s123"></td>
                        <td className="s2"></td>
                        <td className="s53"></td>
                        <td className="s64"></td>
                        <td className="s64"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s13"></td>
                        <td className="s38 softmerge">
                            <div className="softmerge-inner" style={{width:"192px;left:-178px"}}>Schedule 1 (Form 1040) 2022</div>
                        </td>
                        <td className="s86"></td>
                        <td></td>
                    </tr>
                    <tr style={{height:" 21px"}}>
                        <th id="1119060806R93" style={{height:" 21px"}} className="row-headers-background">
                            <div className="row-header-wrapper" style={{lineHeight: "21px"}}>94</div>
                        </th>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s124"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td className="s0"></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </form>
    )
}

export default StaticHTML;