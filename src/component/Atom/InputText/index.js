
import {forwardRef} from 'react';

const InputText = forwardRef(({name, id , defaultValue, placeholder , errors, registerRef, ref,
    handleChange, handleBlur,
})=>{
    return (
        <div>
            <label htmlFor={id} className="displaynone" />
            {/* 웹접근성 위해 label, id추가 tori */}
            <input type={"text"} name={name} id={id}  autocomplete="off"
                defaultValue={defaultValue ?? ''}
                placeholder={placeholder ?? '내용을 입력해주세요'}
                className={`form-control ${errors && `border-danger` || ``}`}
                onChange={handleChange}
                onBlur={handleBlur}
                ref={registerRef ?? ref}
            />
        </div>
    )
})

export default InputText;


const Example = ()=>{

    return (
        <InputText
            id = {"modal_sub_titletext"}
            registerRef={register(titleRule)}   // useForm register 용도
            errors={errors.title}               // boolean
            name={'title'}                      
            defaultValue={_.get(data, 'title')}
            placeholder = {"제목을 입력해주세요"}
        />
    )
}