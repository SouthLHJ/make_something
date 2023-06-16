import { useState } from "react";


const CheckGroup = ({
    list,
    registerRef,
    defaultValue = false,
    handleChange = () => {},
    className,
})=>{
    const [select, setSelect] = useState(defaultValue??[]);

    const onChecked = (e)=>{
        setSelect(current=>{
            let newArr = [];
            if(!current.includes(e.target.value)){
                newArr = [...current, e.target.value]
            }else{
                newArr = current.filter(elm=>elm!==e.target.value)
            }
            return newArr;
        })
    }

    return (
        <div  className={["flexBox dir_row",className].join(' ')}>
            {
                list.map((elm,idx)=><div>
                    <input type="checkbox" id={`checkitem${idx}`} checked={select.includes(_.get(elm,'value'))} value={_.get(elm,'value')} name={_.get(elm,'name')} ref={registerRef}
                        onChange={(e)=>{ handleChange(e); onChecked(e)}}
                    />
                    <label htmlFor={`checkitem${idx}`}></label>
                    <span >{_.get(elm,'text')}</span>
                </div>)
            }
        </div>
    )

}

export default CheckGroup;