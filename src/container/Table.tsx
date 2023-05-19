/**
 * @typedef Title
 * @property {string}        headerName                 titlename
 * @property {string}        field                      field
 * @property {string|number} width                      넓이
 * @property {string}        class                      class name
 * @property {number}        flex                       style flex
 * @property {number}        minWidth                   style flex
 * @property {number}        maxWidth                   style flex
 * @property {string}        cellRenderer               Element
 * @property {boolean}       headerCheckboxSelection    title 체크박스 
 * @property {boolean}       checkboxSelection          tbody 체크박스
 * @property {string}        autoIndexing               자동 순차 인덱싱
 * @property {string}        cellEditor                 input type='text' 사용
 * 
*/

/**
 * @typedef FrameworkComponents
 * @property {string}       key                         cellRenderer에 들어간 string
 * @property {Element}      Element                     원하는 element 값
 * 
 */

/**
 * @typedef Option
 * @property {Array<Title>}          columnDefs   
 * @property {FrameworkComponents}   frameworkComponents
 * @property {onSelectionChanged}    onSelectionChanged
 * 
 */

import _ from 'lodash';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { useEffect } from 'react';
import {useForm, Controller} from "react-hook-form";

import 'styles/components/Table.scss';




function NotStringData (t){
    if(_.get(t,'headerCheckboxSelection') || _.get(t,'checkboxSelection')){
        return 'checkbox'
    }
    else if(typeof(_.get(t,`cellRenderer`)) === 'function'){
        return 'cellRenderer'
    }
    else if(_.get(t,"autoIndexing")){
        return 'autoIndexing'
    }
    else if(_.get(t,"cellEditor")){
        return 'cellEditor'
    }
    else{
        return false
    }
}

/**  div table sopi last_230519
 *   Div로 만들어진 table
 *   @param {Array<Title>} option        title 값
 *   @param {Array<any>} data            td 값 (row 개념으로 작성)
 *   @param {string} th_box_class        th class                                                       
 *   @param {string} td_box_class        td class
 *   @param {string} tableclass          table class
 */
const DivTable = ({option={},data, th_box_class='', td_box_class='', tableclass='' })=>{
    const [title,setTitle] = useState([]);
    const titleRef = useRef([]);
    
    const [style, setStyle] = useState([]);
    const [tbody, setTbody] = useState([]);


    const [checked, setChecked] = useState([]);

    const { register, setValue } = useForm({});

// =========================== 초기 랜더링

    // ResizeObserver 활성화 여부를 판단하는 state
    const [isObserve, setIsObserve] = useState(true);
    // observer를 state로 선언
    const [observer] = useState(
        new ResizeObserver((entries, observer) => {
        entries.forEach((entry, entryIndex)=>{
            // console.log(entry.target.attributes['data-my-id'].value,"entries")
            const { width, height, top, left } = entry.contentRect;
            setStyle(c=>{
                let newC = [...c];

                let styles={}
                styles.width= width;

                setTitle(title=>{
                    _.get(title,`${entryIndex}.minWidth`) && (styles.minWidth = _.get(title,`${entryIndex}.minWidth`));
                    _.get(title,`${entryIndex}.maxWidth`) && (styles.maxWidth = _.get(title,`${entryIndex}.maxWidth`));
                    return title
                })

                _.set(newC,`${entry.target.attributes['data-my-id'].value}`,styles)
                return newC
            })
        })
        })
    );
    // ResizeObserver 활성화 여부를 판단하는 isObserve의 값에 따라 관측 시작&종료
    useEffect(() => {
        const timer = setTimeout(()=>{
            // 2. 감지할 요소 추가하기
            if (isObserve && !_.isEmpty(title)) {
                titleRef.current.forEach((ref)=>{
                    observer.observe(ref)
                })
            }else observer.disconnect();
        },300)      

        return ()=>{
            clearTimeout(timer)
        }
       
    }, [isObserve,title,tbody]);

    
    useEffect(()=>{
        if(!_.isEmpty(option)){
            const newtitle = option.columnDefs.map((item,index)=>{
                return {
                    name : item?.headerName ?? '-',
                    field : item?.field ?? '-', 
                    width : item?.width ?? "250px" , 
                    flex : item?.flex ?? undefined,
                    minWidth : item?.minWidth ?? undefined,
                    maxWidth : item?.maxWidth ?? undefined,
                    class : item?.class ?? '',
                    cellRenderer : item?.cellRenderer ? _.get(option, `frameworkComponents.${item?.cellRenderer}`,null ) : null,
                    checkboxSelection : item?.checkboxSelection ?? false,
                    headerCheckboxSelection : item?.headerCheckboxSelection ?? false,
                    autoIndexing : _.get(item,"autoIndexing", false),
                    cellEditor : _.get(item,"cellEditor", false),
                    id : index
                }
            });
            setTitle(newtitle);
        }
    },[option])

    // tbody 정리
    useEffect(()=>{
        if(!_.isEmpty(data)){
            let filterData = [];
                data.forEach((elm,elmIdx)=>{
                    let filter = {};
                    for(let t of title){
                        for(let field in elm){
                            if(t.field.split(".")[0] === field){
                                filter[field] = _.get(elm,field,'')
                            }
                        }
                        if(NotStringData(t)){
                            filter[t.field]  = t.field
                        }
                    }
                    filterData.push(filter)
                    resetData(elm,elmIdx);
                })
            setTbody(filterData)
        }
        setChecked([]);
        
    },[data])

    const resetData = (data, index)=>{
        setValue(`table[${index}]`, false);
        Object.keys(data).forEach((key,keyIdx)=>{
            setValue(`input[${index},${keyIdx}]`, data[key]);
        })
    }

    // api 
    const api = useMemo(()=>{
        return {
            handleLoading : handleLoading
        }

    },[])

// =================== 테이블 기능 함수 

    // 체크박스/selection 반응
    useEffect(()=>{
        try{
            if(typeof(_.get(option,"onSelectionChanged"))==='function'){
                const selectFunction = _.get(option,'onSelectionChanged');
                selectFunction(checked);
            }
        }catch{
            console.log('체크박스 설정 함수가 없습니다.')
        }
    },[checked])

    /** onRowDoubleClicked
     * 
     * @param {*} props 해당 cell 의 데이터
     */
    const onRowDoubleClicked = (props)=>{
        try{
            if(typeof(_.get(option,"onRowDoubleClicked"))==='function'){
                const onRowDoubleClicked = _.get(option,"onRowDoubleClicked");
                onRowDoubleClicked(props)
            }
        }catch(e){
            console.log("더블 클릭 기능 없음")
        }
    }

    /** onCellValueChanged
     *  @param {*} props {event : blur 이벤트, field : 해당 column field, row : number, column : number }
     */
    const onCellValueChanged  = (props)=>{
        try{
            if(typeof(_.get(option,"onCellValueChanged"))==='function'){
                const onCellValueChanged = _.get(option,"onCellValueChanged");
                onCellValueChanged(props)
            }
        }catch(e){
            console.log("수정 기능 없음")
        }
    }


    const handleLoading = ()=>{

    }


    if(_.isEmpty(title)){
        return null;
    }


// =================== 스타일/style 

    const headerStyle  =(titleElm)=>{
        let style = {width  : _.get(titleElm,`width`,"250px")};
        if( _.get(titleElm,'flex')!==undefined){
            style.flex=_.get(titleElm,'flex',1)
            style.width = undefined;
        };
        style.minWidth = _.get(titleElm,`minWidth`);
        style.maxWidth = _.get(titleElm,`maxWidth`);
        return style
    }

    return(
        <div className={`common_table ${tableclass ?? ''}`} >

            <div className='th_container'>
            
            {/* th */}
            <div className={`common_th ${th_box_class ?? ''}`}>
                {
                    title.map((titleElm,titleElmIdx)=>{

                        // 체크박스
                        if(_.get(titleElm,'headerCheckboxSelection')){
                            let style = headerStyle(titleElm)
                            
                            return (
                                <div key={`th_${titleElmIdx}`} className={`common_th_class`} style={style} ref={el=>titleRef.current[titleElmIdx] = el} data-my-id={titleElmIdx}>
                                    <input type='checkbox' id={`check`} name='headerChecked' ref={register()}
                                        onChange={(e)=>{
                                            if(e.target.checked){
                                                setChecked(data);
                                            }else{
                                                setChecked([]);
                                            }
                                            data.forEach((item, index) => {
                                                setValue(`table[${index}]`, e.target.checked)
                                            })
                                        }}
                                    />
                                    <label htmlFor={`check`}></label>
                                </div>
                            )
                        }
                        // default
                        else{
                            let style = headerStyle(titleElm)
            
                            return (
                                <div key={`th_${titleElm.name}`} className={`common_th_class`} style={style} ref={el=>titleRef.current[titleElmIdx] = el} data-my-id={titleElmIdx}>
                                    {titleElm.name}
                                </div>
                            )
            
                        }
                    })
                }
                
            </div>
                
            </div>

            <div style={{height :'100%', borderBottomLeftRadius : "10px", borderBottomRightRadius : '10px'}}>
            {/* td */}
            <div className='td_container'>
                {

                    _.isEmpty(data)?
                    (
                        <div className='no_data'>
                            <span>정보가 없습니다.</span>
                        </div>
                    )

                    :
                    tbody.map((tdata,tIdx)=>{
                        const compo = title.map((t,tidx)=>{

                            switch(NotStringData(t)){
                                case 'cellRenderer':
                                    return(
                                        <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t,`class`,"")}`}  style={_.get(style,tidx,{})}>
                                            { _.get(t,`cellRenderer`)(_.get(data,tIdx),{row : tIdx, column: tidx})}
                                        </div>
                                    )
                                case 'checkbox' :
                                    return(
                                        <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t,`class`,"")}`}  style={_.get(style,tidx,{})}>
                                            <input type='checkbox' id={`tableItem${tIdx}`} name={`table[${tIdx}]`} ref={register()}
                                                onChange={
                                                    (e)=>{
                                                        setValue(`table[${tIdx}]`,e.target.checked)
                                                        setChecked((current=>{
                                                            console.log(current,`table[${tIdx}]`)
                                                            let newArr = [];
                                                            
                                                            if(e.target.checked){
                                                                newArr= [...current, data[tIdx]];
                                                            }else{
                                                                newArr = current.filter((elm)=>elm._id!==data[tIdx]._id)                                                    
                                                            }
                                                            return newArr;
                                                        }))
                                                    }
                                                }
                                            />
                                            <label htmlFor={`tableItem${tIdx}`}></label>
                                        </div>
                                    )
                                case 'autoIndexing' :
                                    return (
                                        <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t,`class`,"")}`}  style={_.get(style,tidx,{})}>
                                            {tIdx+1}
                                        </div>
                                    )

                                case 'cellEditor' :
                                    return (
                                        <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t,`class`,"")} edit_input`}  style={_.get(style,tidx,{})}>
                                            <input type="text" onBlur={(e)=>onCellValueChanged({event : e, field : _.get(t,'field'), row : tIdx, column : tidx })}
                                             ref={register()} name={`input[${tIdx},${tidx}]`}
                                            />
                                        </div>
                                    )
                                        
                                default : 
                                    return(
                                        <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t,`class`,"")}`} style={_.get(style,tidx,{})}>
                                            {_.get(tdata,_.get(t,`field`),'-')}
                                        </div>
                                    )
                            }
                        })
        
                        return (
                            <div key={`common_td_${tIdx}`} className={`common_td ${td_box_class ?? ''}`}
                                onDoubleClick={()=>onRowDoubleClicked(_.get(data,tIdx))}
                            >
                                {compo}
                            </div>
                        )
        
                    })
                }
                
            </div>
            </div>
        </div>
    )
}

export default DivTable;




