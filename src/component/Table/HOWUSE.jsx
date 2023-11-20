import Table from 'Operator/Commons/Field/Atom/Table/DivTable';
import { useRef } from 'react';

const HOWUSE = ()=>{
    // ## [필수] 현재 보여줄 페이지네이션화 된 데이터 / 객체에는 [unique] _id 값이 꼭 있어야한다.
    const dataList = [ { } ]; 
    // ## [필수] 전체 체크박스 사용이랑 엑셀 다운로드 기능을 사용하기 위한 필수 데이터 / 객체에는 [unique] _id 값이 꼭 있어야한다.
    const allData = [ { } ];
    // ## [필수] 테이블 형태 
    const gridOptions = {
        columnDefs: [
            /*  체크박스. 
                [선택] headerCheckboxSelection : th체크박스 사용 유무. 
                [필수] checkboxSelection : td 체크박스 유무
            */
            { headerName: "", field: "", editable: false, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, width: '60px' },
            /* 번호
                [필수] autoIndexing
            */
           { headerName:"번호",            field: 'seq', width  : "100px", autoIndexing: 'node.rowIndex+1' },
            /* 데이터 표기
                [필수] <string>         headerName : th text
                [필수] <string>         field : data에 넣은 값에서 표기하고 싶은 값의 key값
                [선택] <string|number>  width : width
                [선택] <number>         flex  : 유동적인 width 값
                [선택] <string|number>  minWidth : flex일 때, 최소 width 값
                [선택] <string|number>  maxWidth : flex일 때, 최대 width 값
                [선택] <string>         cellRenderer : 일반적인 text 말고 custom 표기를 하고 싶을 경우 사용 ( 예시 참고 - 검색 : "cellRenderer 예시")
                [선택] <string>         class    : 해당 column에 적용할 className 
                [선택] <boolean>        cellEditor : 해당 td input 편집기 사용 유무 
            */
            { headerName:"러닝스페이스명", field: 'name',flex : 1, minWidth: 250, class : 'class이름 넣기', cellRenderer : "testView", cellEditor : true },
        ],
        /* 테이블 기능 함수
            onSelectionChanged  : 체크박스에 선택된 값 얻어오는 기능 함수 ( 예시 참고 - 검색 : "onSelectionChanged 예시")
            onRowDoubleClicked  : tr이 더블클릭 됬을 경우, 값 얻어오는 기능 함수 ( 예시 참고 - 검색 : "onRowDoubleClicked 예시")
            onCellValueChanged  : cellEditor 사용했을 때, input 값 변경 후, blur 됬을 때, 값 얻어오는 기능 함수  ( 예시 참고 - 검색 : "onCellValueChanged 예시")
        */
        onSelectionChanged : onSelectionChanged,
        onRowDoubleClicked : onRowDoubleClicked,
        onCellValueChanged : onCellValueChanged,
    };

    // ## [선택] 테이블 핸들링 사용
    const tableRef = useRef();
    /*
    tableRef.current = {
        element: table element
        api: {
            handleStartLoading : 테이블 내부 load화면 띄우는 handleing 함수,
            handleStopLoading: 테이블 내부 load화면 제거하는 handleing 함수,
            handleInitChecked : 테이블 체크박스 초기값 넣는 handleing 함수,
            handleDeleteChecked: 테이블 체크된 값 빼는 handleing 함수,
            onDownloadExcel: 테이블 값들을 엑셀파일로 다운로드하는 handleing 함수, table에 allData를 안넣으면 보여지고있는 데이터만 설치됨.
        }
    }
    */

    // ## ==== 예시


    // cellRenderer 예시
    const deleteButton = (props) => {
        // props => tr에 들어간 data 값 
        return (
            <button onClick={() => handleDelete({ id: _.get(props, '_id'), user: props.user, pathName: props.pathName, prevPathName: props.prevPathName})}
                title="삭제" className='btn_box red'
            >
                삭제
            </button>
        )
    }

    // onSelectionChanged 예시
    const onSelectionChanged = (data, headerChecked)=>{
        /* **체크박스 headerChecked를 사용할경우, allData를 넣어주는게 신상에 좋다~ ( 안그러면 보여지는 데이터만 체킹된다~) 
            data : 체크박스 선택된 값 모두 가져옴
            headerChecked : th가 체크되었는지 상태 가져옴
        */
    }

    // onRowDoubleClicked 예시
    const onRowDoubleClicked = (data) => {
        /*
            data : 클릭한 tr 데이터 가져옴
        */
    }

    // onCellValueChanged 예시
    const onCellValueChanged = (params)=>{
        /*
            params : {
                event : onBlur 이벤트
                field : 수정한 field
                row   : 수정한 tr 인덱스
                column: 수정한 td 인덱스
            }
        */
    }

    // handleStartLoading 예시
    const handleStartLoading = ()=>{
        _.get(tableRef,'current.api.handleStartLoading',()=>{})()
    }

    // handleStopLoading 예시
    const handleStopLoading = ()=>{
        _.get(tableRef,'current.api.handleStopLoading',()=>{})()
    }

    // handleInitChecked 예시
    const handleInitChecked = (data)=>{
        // data => dataList에 들어가는 동일한 형태의 객체를 넣을것. {} or [ {} ]
        _.get(tableRef.current?.api,'handleInitChecked')(data)
    }
    
    // handleInitChecked 예시
    const handleDeleteChecked = (data)=>{
        // data => dataList에 들어가는 동일한 형태의 객체를 넣을것. {} or [ {} ]
        _.get(tableRef,'current.api.handleDeleteChecked')(data)
    }

    // onDownloadExcel 예시 
    const onDownloadExcel = ()=>{
        if(_.isEmpty(allData)){
            CustomSwal('warning', `데이터가 불어와지지않았습니다.`, ``, '확인','취소','true')
            return null;
        }
        // console.log(tableRef.current, '=============== tableRef.current')
        tableRef.current?.api.onDownloadExcel('이메일템플릿');
    }

    return (
        <Table
            data={dataList}
            allData={allData}
            option={gridOptions}
            ref={tableRef}
        >
        </Table>
    )
}