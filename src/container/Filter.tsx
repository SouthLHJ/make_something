import {useCallback, useMemo, useState} from 'react'


import FilterItems from '@src/component/Filter/items/items';

const defaultField = [{field : '교육기간', type : "date", field_en: "learning_date"},{field : '과정명', type : "text", field_en: "cw_kor_title"},
{field : '아이디', type : "text", field_en: "stu.0.stu_id"},{field : '이름', type :"text", field_en: "stu.0.stu_name"},{field : '이메일', type : "text", field_en: "stu.0.stu_email"},
{field : '소속명', type : "text", field_en: "stu.0.stu_org"}];

const Filter = ()=>{
    const [filterUse, setFilterUse] = useState(true);

    const originData = useMemo(()=>[],[])
    const [displayList, setDisplayList] = useState<any>([]);

    const data = useMemo(()=>{
        
        
    },[filterUse])

    
    const handleSearch = useCallback((filterData : Array<Array<FilterItemData>>)=>{
        const filter = [...filterData];

        // 에러 체크
        let error =false;
        for(let andFilter of filter){
            if(error)break;
            // console.log("==== And");
            for(let orFilter of  andFilter){
                // console.log('field : ',orFilter.filter, '/ value : ',orFilter.value,"==== Or");
                if(orFilter.value.length !== 0){
                    error=true;
                    break;
                }
            }
        };
        if(error){
            console.log('비어있는 값이 있을 경우 에러 발생!')
            return null;
        }
        else{
            let newData = filter.reduce((prevData,andFilter, andIndex)=>{
                console.log(prevData, 'prevData')
                let orData:any[]= [];
                for(let orFilter of  andFilter){
                
                        if('learning_date' === orFilter.filter){
                            originData.forEach((listCerti, idx)=>{

                            })
                        }else{
                            originData.forEach((listCerti)=>{
                                // value 정규식 변환
                                const regString = `/.*${orFilter.value}.*/`;
                                const regValue=convertToRegExp(regString)

                                // 이부분 부터는 필터 적용될 페이지마다 추가할 부분
                                let origin:any = '';
                                if(orFilter.filter.startsWith("$값")){ // stu로 시작할 때...이런걸 간단하게 정리할 만한게 없나??????? (배열? 오브젝트? )
                                    origin = ['$값을 넣기']
                                }else{
                                    origin = '$값을 넣기'
                                }
                                
                                switch(typeof(origin)){
                                    case 'string':
                                        if(regValue.test(origin)){
                                            orData.push(listCerti)
                                        }
                                        break;

                                    case 'object' : 
                                        if(Array.isArray(origin)){
                                            let stu = orFilter.filter.split(".")[2];
                                            let result = false;
                                            origin.forEach(list=>{
                                                if(regValue.test('$데이터 정보')){
                                                    orData.push(listCerti)
                                                }
                                            })
                                        }
                                        break;

                                    default :
                                        console.log("없는 field가 왜 나옴! 좋은 말로할때 props 수정하셈")
                                }
                            })
                        }
                    }                   

                

                let nextData :any[]= [];
                if(prevData.length !== 0){
                    nextData = [...orData]
                }else{
                    // 비어있는게 아니라면 and 조건이므로, 그전 값이랑 비교해서 둘 다 가지고 있는 값일 경우에만 nextData에 집어넣기
                    prevData.forEach((prev)=>{
                        let result = false;
                        orData.forEach(current=>{
                            if('$조건'){
                                result = true;
                            }
                        })
                        if(result)nextData.push(prev)
                    })

                }
                return nextData;
            },[])

            setDisplayList(newData);
        }


    // string->reg변환
    function convertToRegExp(text:string) {
        if (text.match(/^\/.+\/[gmixXsuUAJ]*$/)) {
          return regexParser(text);
        } else return new RegExp(text, 'g');
    }
    function regexParser(text:string) {
        const m = text.match(/(\/?)(.+)\1([a-z]*)/i);
        if (m![3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(m![3])) {
            return RegExp(text);
        } else {
            return new RegExp(m![2], m![3]);
        }
    }
        
    },[originData])

    const handleResetSearch = useCallback(()=>{
        setDisplayList(originData);
    },[originData])

    return(
        <div>
            {
                !filterUse ?
                <button onClick={()=>setFilterUse(true)}>사용</button>
                :
                <>
                    <FilterItems handleSearch={handleSearch} handleResetSearch={handleResetSearch} originData={[]} field={defaultField}/>
                    <button onClick={()=>setFilterUse(false)}>미사용</button>
                </>
            }
        </div>
    )
}

export default Filter;

/**
 * @param {string} field 사용자가 볼 텍스트
 * @param {string} type input type
 * @param {string} field_en model field 명
 */
export type FieldOption = {
    field : string, 
    type : string,
    field_en : string,
}

/**
 * @param {string} filter 검색 field
 * @param {string} value 검색어
 * @param {string} type input type
 */
export type FilterItemData = {
    filter : string,
    type : string,
    value : string,
}




