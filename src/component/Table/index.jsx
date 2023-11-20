
import _ from 'lodash';
import { memo, useCallback, useMemo, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import * as XLSX from 'xlsx';
import * as FileSaver from "file-saver";
import { FadeLoader } from 'react-spinners';

function NotStringData(t) {
    if (_.get(t, 'headerCheckboxSelection') || _.get(t, 'checkboxSelection')) {
        return 'checkbox'
    }
    else if (typeof (_.get(t, `cellRenderer`)) === 'function') {
        return 'cellRenderer'
    }
    else if (_.get(t, "autoIndexing")) {
        return 'autoIndexing'
    }
    else if (_.get(t, "cellEditor")) {
        return 'cellEditor'
    }
    else {
        return false
    }
}

/**  div table sopi last_230622
 *   Div로 만들어진 table
 *   @param {Array<Title>} option        title 값
 *   @param {Array<any>} data            td 값 (row 개념으로 작성)
 *   @param {string} th_box_class        th class                                                       
 *   @param {string} td_box_class        td class
 *   @param {string} tableclass          table class
 *   @param {ref}    ref                 ref
 */
const  DivTable = forwardRef(({ option = {}, data, th_box_class = '', td_box_class = '', tableclass = '', allData=[] }, ref) => {
    const tableRef = useRef();
    const thRef = useRef();
    const tdRef = useRef();
    const allDataRef = useRef();

    const [title, setTitle] = useState([]);
    const titleRef = useRef([]);

    const [style, setStyle] = useState([]);
    const [tbody, setTbody] = useState([]);


    const [checked, setChecked] = useState([]);
    const [load, setLoad] = useState(false);

    const { register, setValue, getValues, watch } = useForm({});

    // =========================== 초기 랜더링

    const [isObserve, setIsObserve] = useState(true);

    const [observer] = useState(
        new ResizeObserver((entries, observer) => {
            entries.forEach((entry, entryIndex) => {
                const index = entry.target.attributes['data-my-id'].value
                const { width, height, top, left } = entry.contentRect;
                setStyle(c => {
                    let newC = [...c];
                    let styles = {}
                    styles.width = width;
                    setTitle(title => {
                        _.get(title, `${index}.minWidth`) && (styles.minWidth = _.get(title, `${index}.minWidth`));
                        _.get(title, `${index}.maxWidth`) && (styles.maxWidth = _.get(title, `${index}.maxWidth`));
                        return title
                    })
                    _.set(newC, `${index}`, styles)
                    return newC
                })
            })
        })
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            // 2. 감지할 요소 추가하기
            if (isObserve && !_.isEmpty(title)) {
                titleRef.current.forEach((ref) => {
                    observer.observe(ref)
                })
            } else observer.disconnect();
        }, 300)

        return () => {
            clearTimeout(timer)
        }

    }, [isObserve, title, tbody]);


    useEffect(() => {
        if (!_.isEmpty(option)) {
            const newtitle = option.columnDefs.map((item, index) => {
                return {
                    name: item?.headerName ?? '-',
                    field: item?.field ?? '-',
                    width: item?.width ?? "250px",
                    flex: item?.flex ?? undefined,
                    minWidth: item?.minWidth ?? undefined,
                    maxWidth: item?.maxWidth ?? undefined,
                    class: item?.class ?? '',
                    cellRenderer: item?.cellRenderer ? _.get(option, `frameworkComponents.${item?.cellRenderer}`, null) : null,
                    checkboxSelection: item?.checkboxSelection ?? false,
                    headerCheckboxSelection: item?.headerCheckboxSelection ?? false,
                    autoIndexing: _.get(item, "autoIndexing", false),
                    cellEditor: _.get(item, "cellEditor", false),
                    id: index
                }
            });
            setTitle(newtitle);
        }
    }, [option])

    useEffect(() => {
        if (!_.isEmpty(data)) {
            let filterData = [];
            data.forEach((elm, elmIdx) => {
                let filter = {};
                for (let t of title) {
                    for (let field in elm) {
                        if (t.field.split(".")[0] === field) {
                            filter[field] = _.get(elm, field, '')
                        }
                    }
                    if (NotStringData(t)) {
                        filter[t.field] = t.field
                    }
                    // console.log(filter, "=====윗단계서 필터")
                }
                filterData.push(filter)
                resetData(elm, elmIdx);
            })
            setTbody(filterData);

        }

        // 체크값 ( setTimeout에 넣은 이유는, use-hook-form에 값이 할당된 후에 작동해야하기 때문이다.)
        const timer = setTimeout(()=>{
            setChecked(prev=>{
                
                prev.forEach(elm=>{
                    data.forEach((item,index)=>{
                        if(_.get(elm,'_id')===_.get(item,'_id')){
                            setValue(`table[${index}]`, true)
                        }
                    })
                })
                return prev
            })
        },100)

        return ()=>{
            clearTimeout(timer);
        }
    }, [observer,data])
    
    const resetData = (data, index) => {
        setValue(`table[${index}]`, false);
        Object.keys(data).forEach((key, keyIdx) => {
            setValue(`input[${index},${keyIdx}]`, data[key]);
        })
    }

    // 외부로 전달하는 함수
    useImperativeHandle(ref, () => ({
        element: tableRef,
        api: {
            handleStartLoading: handleStartLoading,
            handleStopLoading: handleStopLoading,
            handleInitChecked : handleInitChecked,
            handleDeleteChecked:handleDeleteChecked,
            onDownloadExcel: onDownloadExcel,
        }
    }));

    const handleMouseOver = (e, data) => {
        const timer = setTimeout(() => {
            // console.log(data)
        }, 3000)

        return clearTimeout(timer)
    }

    // ================== 테이블 기능 함수 

    // 체크박스/selection 반응
    useEffect(() => {
        try {
            if (typeof (_.get(option, "onSelectionChanged")) === 'function') {
                const selectFunction = _.get(option, 'onSelectionChanged');
                let props = checked;
                if(watch('headerChecked')){
                    if(!_.isEmpty(allData)){
                        props = allData;
                    }
                }
                selectFunction(props,watch('headerChecked'));

            }
        } catch {
            console.log('체크박스 설정 함수가 없습니다.')
        }
    }, [checked])


    // 더블클릭
    const onRowDoubleClicked = (props) => {
        try {
            if (typeof (_.get(option, "onRowDoubleClicked")) === 'function') {
                const onRowDoubleClicked = _.get(option, "onRowDoubleClicked");
                onRowDoubleClicked(props)
            }
        } catch (e) {
            console.log(e,"더블 클릭 실패")
        }
    }

    // 값 변경
    const onCellValueChanged = (props) => {
        try {
            if (typeof (_.get(option, "onCellValueChanged")) === 'function') {
                const onCellValueChanged = _.get(option, "onCellValueChanged");
                onCellValueChanged(props)
            }
        } catch (e) {
            console.log(e,"수정 기능 실패")
        }
    }
    // 엑셀 다운로드
    const onDownloadExcel = (title = 'TableDownload') => {
        try {

            let rowArr = [];
            /*
                th 에서 값 뽑아내기
            */
            const thArr = thRef.current.getElementsByClassName('common_th_class');
            let col = [];
            for (let element of thArr) {
                col.push(element.innerText)
            }
            rowArr.push(col);
            /*
                td 에서 값 뽑아내기
            */
            if(_.isEmpty(allData)){
                const tdArr = tdRef.current.getElementsByClassName('common_td');

                for (let element of tdArr) {
                    col = [];
                    const tdelm = element.getElementsByClassName('common_td_class');
                    for (let elm of tdelm) {
                        col.push(elm.innerText)
                    }
                    rowArr.push(col);
                }
            }else{
                for(let data of allData){
                    col = [];
                    for(let opt of _.get(option,'columnDefs',[])){
                        const key = _.get(opt,'field');
                        col.push(_.get(data,key,''))
                    }
                    rowArr.push(col);
                }
            }
            const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const excelFileExtension = '.xlsx';
            const excelFileName = title;


            const xlsx = XLSX.utils.aoa_to_sheet(rowArr);
            const wb = { Sheets: { data: xlsx }, SheetNames: ['data'] };
            const excelButter = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            const excelFile = new Blob([excelButter], { type: excelFileType });
            FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
        } catch (e) {
            console.log( e,"다운로드 실패")
        }
    }

    // 체크박스 선택된 값 전달받기
    const handleInitChecked = (transChecked)=>{
        if(Array.isArray(transChecked)){
            setChecked(prev=>{
                let newArr = [...prev];
                for(let checked of transChecked){
                    let result = true;
                    for(let arr of newArr){
                        if(_.get(arr,'_id') === _.get(transChecked,'_id')){
                            result = false;
                            break;
                        }
                    }
                    if(result){
                        newArr.push(checked)
                    }
                }
                return newArr
            })

        }else{
            setChecked(prev=>{
                let result = true;
                let newArr = [...prev];
                for(let arr of newArr){
                    if(_.get(arr,'_id') === _.get(transChecked,'_id')){
                        result = false;
                        break;
                    }
                }
                if(result){
                    newArr.push(transChecked)
                }
                
                return newArr
            })  

        }
    }

    // 체크박스 선택해제할 값 전달받기
    const handleDeleteChecked = (transDeleted)=>{
        if(Array.isArray(transDeleted)){
            setChecked(prev=>{
                let newArr = [...prev];
                for(let deleted of transDeleted){
                    newArr = newArr.filter(arr=>{
                        if(_.get(arr,'_id')===_.get(deleted,'_id')){
                            return false
                        }else{
                            return true
                        }
                    })
                }
                // 체크박스 해제
                data.forEach((item,index)=>{
                    transDeleted.forEach(elm=>{
                        if(_.get(elm,'_id')===_.get(item,'_id')){
                            setValue(`table[${index}]`, false)
                        }
                    })
                })

                return newArr
            })

        }else{
            setChecked(prev=>{
                let newArr = [...prev];
                newArr = newArr.filter(arr=>{
                    if(_.get(arr,'_id')===_.get(transDeleted,'_id')){
                        return false
                    }else{
                        return true
                    }
                })

                // 체크박스 해제
                data.forEach((item,index)=>{
                    if(_.get(transDeleted,'_id')===_.get(item,'_id')){
                        setValue(`table[${index}]`, false)
                    }
                })
                
                return newArr
            })  

        }
    }

    // 로딩 화면
    const handleStartLoading = () => setLoad(true);
    const handleStopLoading = () => setLoad(false);


    // ================== 테이블 기능 함수 

    if (_.isEmpty(title)) {
        return null;
    }


    // =================== 스타일/style 

    const headerStyle = (titleElm) => {
        let style = { width: _.get(titleElm, `width`, "250px") };
        if (_.get(titleElm, 'flex') !== undefined) {
            style.flex = _.get(titleElm, 'flex', 1)
            style.width = undefined;
        };
        style.minWidth = _.get(titleElm, `minWidth`);
        style.maxWidth = _.get(titleElm, `maxWidth`);
        return style
    }


    // ======================================================== 
    return (
        <div className={`common_table ${tableclass ?? ''}`} ref={tableRef} >

            <div className='th_container' ref={thRef}>

                {/* th */}
                <div className={`common_th ${th_box_class ?? ''}`}>
                    {
                        title.map((titleElm, titleElmIdx) => {
                            // 체크박스
                            if (_.get(titleElm, 'headerCheckboxSelection')) {
                                let style = headerStyle(titleElm)

                                return (
                                    <div key={`th_${titleElmIdx}`} className={`common_th_class`} style={style} ref={el => titleRef.current[titleElmIdx] = el} data-my-id={titleElmIdx}>
                                        <input type='checkbox' id={`check`} name='headerChecked' ref={register()}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    if(!_.isEmpty(allData)){
                                                        setChecked(allData);
                                                    }else{
                                                        setChecked(data);
                                                    }
                                                } else {
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
                            else {
                                let style = headerStyle(titleElm)

                                return (
                                    <div key={`th_${titleElm.name}`} className={`common_th_class`} style={style} ref={el => titleRef.current[titleElmIdx] = el} data-my-id={titleElmIdx}>
                                        {titleElm.name}
                                    </div>
                                )

                            }
                        })
                    }

                </div>

            </div>

            {/* <div style={{ height: 'calc(100% - 40px)', borderBottomLeftRadius: "10px", borderBottomRightRadius: '10px', display: 'flex', width: 'fit-content', minWidth: '100%', overflowX: "hidden", overflowY: "auto" }}> */}
                {/* td */}
                <div className='td_container' ref={tdRef}>
                    {
                        load ?
                            <div className='no_data'>
                                <FadeLoader color='#428BE5' />
                            </div>
                            :

                            _.isEmpty(data) ?
                                (
                                    <div className='no_data'>
                                        <span>정보가 없습니다.</span>
                                    </div>
                                )

                                :
                                tbody.map((tdata, tIdx) => {
                                    const compo = title.map((t, tidx) => {
                                        switch (NotStringData(t)) {
                                            case 'cellRenderer':
                                                return (
                                                    <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t, `class`, "")}`} style={_.get(style, tidx, {})}>
                                                        {_.get(t, `cellRenderer`)(_.get(data, tIdx), { row: tIdx, column: tidx })}
                                                    </div>
                                                )
                                            case 'checkbox':
                                                return (
                                                    <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t, `class`, "")}`} style={_.get(style, tidx, {})}>
                                                        <input type='checkbox' id={`tableItem${tIdx}`} name={`table[${tIdx}]`} ref={register()}
                                                            onChange={
                                                                (e) => {
                                                                    setValue(`headerChecked`,false)
                                                                    setValue(`table[${tIdx}]`, e.target.checked)
                                                                    setChecked((current => {
                                                                        let newArr = [];
                                                                        if (e.target.checked) {
                                                                            newArr = [...current, data[tIdx]];
                                                                        } else {
                                                                            newArr = current.filter((elm) => elm._id !== data[tIdx]._id)
                                                                        }
                                                                        return newArr;
                                                                    }))
                                                                }
                                                            }
                                                        />
                                                        <label htmlFor={`tableItem${tIdx}`}></label>
                                                    </div>
                                                )
                                            case 'autoIndexing':
                                                return (
                                                    <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t, `class`, "")}`} style={_.get(style, tidx, {})}>
                                                        {tIdx + 1}
                                                    </div>
                                                )

                                            case 'cellEditor':
                                                return (
                                                    <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t, `class`, "")} edit_input`} style={_.get(style, tidx, {})}>
                                                        <input type="text" onBlur={(e) => onCellValueChanged({ event: e, field: _.get(t, 'field'), row: tIdx, column: tidx })}
                                                            ref={register()} name={`input[${tIdx},${tidx}]`}
                                                        />
                                                    </div>
                                                )

                                            default:
                                                return (
                                                    <div key={`td_${tIdx}_${tidx}`} className={`common_td_class ${_.get(t, `class`, "")}`} style={_.get(style, tidx, {})}
                                                    >
                                                        <span className='text'>{`${_.get(tdata, _.get(t, `field`), '-')}`}</span>
                                                        <span className={`table_tooltip ${tbody.length==tIdx+1 ? 'top' : 'bottom'}`} style={{width : _.get(style, `${tidx}.width`)}}>{`${_.get(tdata, _.get(t, `field`), '-')}`}</span>
                                                    </div>
                                                )
                                        }
                                    })

                                    return (
                                        <div key={`common_td_${tIdx}`} className={`common_td ${td_box_class ? td_box_class :''}`}
                                            onDoubleClick={() => onRowDoubleClicked(_.get(data, tIdx))}
                                        >
                                            {compo}
                                        </div>
                                    )

                                })
                    }

                </div>
            {/* </div> */}


        </div>
    )
})

export default DivTable;




