

import * as React from "react";
import { ReactGrid, Column, Row, CellChange, TextCell, Id  } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import Plus from "@src/component/ReactGrids/Plus";

interface Person {
    name: string;
    surname: string;
  }
  
const getPeople = (): Person[] => [
    { name: "", surname: "" },
    { name: "", surname: "" },
    { name: "", surname: "" }
];

const getColumns = (): Column[] => [
    { columnId: "name", width: 150, resizable: true },
    { columnId: "surname", width: 150, resizable: true },
];

const headerRow: Row = {
    rowId: "header",
    cells: [
        { type: "header", text: "" },
        { type: "header", text: "" }
    ]
};

const getRows = (people: Person[]): Row[] => [
    headerRow,
    ...people.map<Row>((person, idx) => ({
        rowId: idx,
        cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname }
        ]
    }))
];

// 텍스트 수정
const applyChangesToPeople = (
    changes: CellChange<TextCell>[],
    prevPeople: Person[]
    ): Person[] => {
    changes.forEach((change) => {
        const personIndex = change.rowId;
        const fieldName = change.columnId;
        prevPeople[personIndex][fieldName] = change.newCell.text;
    });
    return [...prevPeople];
};







const ReactGrids = ()=>{

    const [people, setPeople] = React.useState<Person[]>(getPeople());
    const [columns, setColumns] = React.useState<Column[]>(getColumns());

    const rows = getRows(people);

    // 텍스트 내용 변경
    const handleChanges = (changes: CellChange<TextCell>[]) => {
        setPeople((prevPeople) => applyChangesToPeople(changes, prevPeople));
    };

    // 컬럼 조절
    const handleColumnResize = (ci: Id, width: number) => {
        setColumns((prevColumns) => {
          const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
          const resizedColumn = prevColumns[columnIndex];
          const updatedColumn = { ...resizedColumn, width };
          prevColumns[columnIndex] = updatedColumn;
          return [...prevColumns];
        });
    }

    

    return (
        <div className="react_grid_container" style={{display : 'flex', flexDirection:'column', justifyContent : 'center', alignItems : 'center'}}>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                <ReactGrid
                 rows={rows}
                 columns={columns}
                 onCellsChanged={handleChanges} 
                 onColumnResized={handleColumnResize}
                //  stickyLeftColumns={1}
                 stickyRightColumns={1}
                //  stickyTopRows={1}
                 stickyBottomRows={1}
                 enableFillHandle
                 enableRangeSelection
                />
                <Plus />
            </div>
            <Plus/>
        </div>
    )
}

export default ReactGrids;



