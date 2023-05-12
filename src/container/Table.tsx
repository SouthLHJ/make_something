type Props ={
    thData : Array<{value : string , width ?: string|number, class?: string }>,
    tdData : Array<Array<{value : string , width ?: string|number , class?: string}>>,
    th_box_class?: string,
    td_box_class?: string,
    tableclass? : string,
    tdColor?: string,
    Element?: any
}

import '../component/Table/table.scss';

const DivTable = ({thData=[], tdData=[], th_box_class='common_th', td_box_class='common_td', tableclass='common_table', tdColor='lightblue', Element }:Props)=>{


    const [title,setTitle] = useState([]);
    const titleRef = useRef([]);
    
    const [style, setStyle] = useState([]);
    const [tbody, setTbody] = useState([]);

    const [usePage, setUsePage] = useState(false);
    const [pageNum, setPageNum] = useState(1);

    const tableRef = useRef([]);
    const [checked, setChecked] = useState([]);

    const { register, setValue } = useForm({});

    // 1. ResizeObserver 활성화 여부를 판단하는 state
    const [isObserve, setIsObserve] = useState(true);

    // 2. observer를 state로 선언
    const [observer] = useState(
        new ResizeObserver((entries, observer) => {
        entries.forEach((entry, entryIndex)=>{
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

                _.set(newC,`${entryIndex}`,styles)
                return newC
            })
            // console.log(`width: ${width}px; height: ${height}px`);
            // console.log(`top: ${top}px; left: ${left}px`);
        })
        })
    );

    // 4. ResizeObserver 활성화 여부를 판단하는 isObserve의 값에 따라 관측 시작&종료
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
    // const [width,widthRef]=useGettingWidth(loading);

    useEffect(()=>{
        if(!_.isEmpty(option)){
            const newtitle = option.columnDefs.map(item=>{
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
                }
            });
            setTitle(newtitle);
        }
    },[option])

    useEffect(()=>{
        if(!_.isEmpty(data)){
            let filterData = [];
                data.forEach((elm,elmIdx)=>{
                    let filter = {};
                    for(let t of title){
                        for(let field in elm){
                            if(t.field === field){
                                filter[field] = _.get(elm,field,'')
                            }
                        }
                        if(NotStringData(t)){
                            filter[t.field]  = t.field
                        }
                    }
                    filterData.push(filter)
                })
            setTbody(filterData)
        }
    },[data])

    
    // useEffect(()=>{
    //     if(!_.isEmpty(width)){
    //         console.log(width,"width")
    //         let newStyle=[];
    //         title.forEach((t,tidx)=>{
    //             let styles={}
    //             styles.width= _.get(t,"width",250);
    //             // 스타일 설정
    //             if( _.get(t,'flex')!==undefined){
    //                 styles.width=width[tidx]
    //             };
    //             newStyle.push(styles)
    //         })
    //         setStyle(newStyle)
    //     }else{
    //         setStyle([{}])
    //     }
    // },[width])

    

    if(_.isEmpty(title)){
        return null;
    }

    const headerStyle  =(titleElm)=>{
        let style = {width  : _.get(titleElm,`width`,"250px")};
        if( _.get(titleElm,'flex')!==undefined){
            style.flex=_.get(titleElm,'flex',1)
        };
        style.minWidth = _.get(titleElm,`minWidth`);
        style.maxWidth = _.get(titleElm,`maxWidth`);
        return style
    }

    return(
        <div className={`common_table ${tableclass ?? ''}`}>
            
            <div className='th_container'>
            
            {/* th */}
            <div className={`common_th ${th_box_class ?? ''}`}>
                {
                    title.map((titleElm,titleElmIdx)=>{

                        // 체크박스
                        if(_.get(titleElm,'headerCheckboxSelection')){
                            let style = headerStyle(titleElm)
                            
                            return (
                                <div className={`common_th_class`} style={style} ref={el=>titleRef.current[titleElmIdx] = el} >
                                    <input type='checkbox' id={`check`} ref={register()} name='headerChecked'
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
                                <div className={`common_th_class`} style={style} ref={el=>titleRef.current[titleElmIdx] = el}>
                                    {titleElm.name}
                                </div>
                            )
            
                        }
                    })
                }
                
            </div>
                
            </div>

            <div style={{overflow: 'hidden', height :'100%', borderBottomLeftRadius : "10px", borderBottomRightRadius : '10px'}}>
            {/* td */}
            <div className='td_container'>
                {

                    _.isEmpty(data)?
                    (
                        <div className='no_data'>
                            <span>No Rows To Show</span>
                        </div>
                    )

                    :
                    tbody.map((tdata,tIdx)=>{
                        const compo = title.map((t,tidx)=>{

                            switch(NotStringData(t)){
                                case 'cellRenderer':
                                    return(
                                        <div className={`common_td_class ${_.get(t,`class`,"")}`}  style={_.get(style,tidx,{})}>
                                            { _.get(t,`cellRenderer`)(tdata)}
                                        </div>
                                    )
                                case 'checkbox' :
                                    return(
                                        <div className={`common_td_class ${_.get(t,`class`,"")}`}  style={_.get(style,tidx,{})}>
                                            <input type='checkbox' id={`checkitem${tIdx}`} ref={register()} name={`table[${tIdx}]`}
                                                onChange={
                                                    (e)=>setChecked((current=>{
                                                        if(e.target.checked){
                                                            return [...current, data[tIdx]];
                                                        }else{
                                                            return current.filter((elm)=>elm._id!==data[tIdx]._id)                                                    
                                                        }
                                                    }))
                                                }
                                            />
                                            <label htmlFor={`checkitem${tIdx}`}></label>
                                        </div>
                                    ) 
                                        
                                default : 
                                    return(
                                        <div className={`common_td_class ${_.get(t,`class`,"")}`} style={_.get(style,tidx,{})}>
                                            {_.get(tdata,_.get(t,`field`))}
                                        </div>
                                    )
                            }
                        })
        
                        return (
                            <div className={`common_td ${td_box_class ?? ''}`}>
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

