import * as React from "react";
import { render } from "react-dom";
import {
    ReactGrid,
    Column,
    Row,
    CellChange,
    TextCell
} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";

interface Person {
    name: string;
    surname: string;
    ssurname : string;
}

const getPeople = (): Person[] => [
    { name: "Thomas", surname: "Goldman", ssurname: 'dfdf' },
    { name: "Susie", surname: "Quattro",ssurname: 'dfdf' },
    { name: "", surname: "", ssurname: 'dfdf' }
];

const getColumns = (): Column[] => [
    { columnId: "name", width: 150, resizable: true },
    { columnId: "surname", width: 150, resizable: true },
    { columnId: "ssurname", width: 150, resizable: true },
  ];

const headerRow: Row = {
    rowId: "header",
    cells: [
        { type: "header", text: "Name" },
        { type: "header", text: "Surname" },
        { type: "header", text: "sSurname" }
    ]
};

const getRows = (people: Person[]): Row[] => [
    headerRow,
    ...people.map<Row>((person, idx) => ({
        rowId: idx,
        cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname },
            { type: "text", text: person.ssurname },
        ]
    }))
];

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

const OriginalItem = () => {

    const [people, setPeople] = React.useState<Person[]>(getPeople());
    const [columns, setColumns] = React.useState<Column[]>(getColumns());

    const rows = getRows(people);

    
    console.log(people,'people')
    console.log(rows,'rows')

    const handleChanges = (changes: CellChange<TextCell>[]) => {
        setPeople((prevPeople) => applyChangesToPeople(changes, prevPeople));
    };

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
        <ReactGrid rows={rows} columns={columns} onCellsChanged={handleChanges}
        onColumnResized={handleColumnResize} 
        stickyTopRows={1}
        stickyLeftColumns={1}
        enableRangeSelection
        enableRowSelection
        enableColumnSelection
        />
    );
}

export default OriginalItem