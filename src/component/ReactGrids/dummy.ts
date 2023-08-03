
const dummy1 = {
    sheet: 'sheet1',
    column: [
        { columnId: '0', width: 40, resizable: false },
        { columnId: '1', width: 40, resizable: true },
        { columnId: '2', width: 40, resizable: true },
        { columnId: '3', width: 40, resizable: true },
        { columnId: '4', width: 40, resizable: true },
        { columnId: '5', width: 40, resizable: true },
        { columnId: '6', width: 40, resizable: true },
        { columnId: '7', width: 40, resizable: true },
        { columnId: '8', width: 40, resizable: true },
        { columnId: '9', width: 40, resizable: true },
    ],
    row: [
        {
            rowId: 'header', cells: [
                { type: 'header', text: '' },
                { type: 'header', text: 'A' },
                { type: 'header', text: 'B' },
                { type: 'header', text: 'C' },
                { type: 'header', text: 'D' },
                { type: 'header', text: 'E' },
                { type: 'header', text: 'F' },
                { type: 'header', text: 'G' },
                { type: 'header', text: 'H' },
                { type: 'header', text: 'I' }]
        },
        {
            rowId: 0, cells: [
                { type: 'text', text: '1', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '111111111111', nonEditable: false, style: { fontSize: '24px' }, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '111111111111', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 1, cells: [
                { type: 'text', text: '2', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '222222222222', nonEditable: false, style: {}, colspan: 2 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '222222222222', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 2, cells: [
                { type: 'text', text: '3', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '333333333333', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '333333333333', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 3, cells: [
                { type: 'text', text: '4', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '44444444444', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '44444444444', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 4, cells: [
                { type: 'text', text: '5', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '5555555555', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '5555555555', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 5, cells: [
                { type: 'text', text: '6', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '66666666', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '666666666', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 6, cells: [
                { type: 'text', text: '7', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 7, cells: [
                { type: 'text', text: '8', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 8, cells: [
                { type: 'text', text: '9', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '999999999999999', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 9, cells: [
                { type: 'text', text: '10', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '10101010101010101010101010', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
    ],

}

const dummy2 = {
    sheet: 'sheet2',

    column: [
        { columnId: '0', width: 40, resizable: false },
        { columnId: '1', width: 40, resizable: true },
        { columnId: '2', width: 100, resizable: true },
        { columnId: '3', width: 100, resizable: true },
        { columnId: '4', width: 100, resizable: true },
        { columnId: '5', width: 100, resizable: true },
        { columnId: '6', width: 100, resizable: true },
        { columnId: '7', width: 100, resizable: true },
        { columnId: '8', width: 100, resizable: true },
        { columnId: '9', width: 100, resizable: true },
    ],
    row: [
        {
            rowId: 'header', cells: [
                { type: 'header', text: '' },
                { type: 'header', text: 'A' },
                { type: 'header', text: 'B' },
                { type: 'header', text: 'C' },
                { type: 'header', text: 'D' },
                { type: 'header', text: 'E' },
                { type: 'header', text: 'F' },
                { type: 'header', text: 'G' },
                { type: 'header', text: 'H' },
                { type: 'header', text: 'I' }]
        },
        {
            rowId: 0, cells: [
                { type: 'text', text: '1', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: 'sheet2', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '333333333332', formula: '= sheet1!b1 + sheet2!c2', nonEditable: false, style: { fontSize: '12px', color: '#ddd' }, colspan: 1, },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '111111111111', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 1, cells: [
                { type: 'text', text: '2', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '2', nonEditable: false, style: {}, colspan: 2 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '222222222222', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 2, cells: [
                { type: 'text', text: '3', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '333333333333', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '333333333333', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 3, cells: [
                { type: 'text', text: '4', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '44444444444', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '44444444444', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 4, cells: [
                { type: 'text', text: '5', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '5555555555', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '5555555555', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 5, cells: [
                { type: 'text', text: '6', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '66666666', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '666666666', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 6, cells: [
                { type: 'text', text: '7', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 7, cells: [
                { type: 'text', text: '8', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 8, cells: [
                { type: 'text', text: '9', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '999999999999999', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
        {
            rowId: 9, cells: [
                { type: 'text', text: '10', nonEditable: true, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '', nonEditable: false, style: {}, colspan: 1 },
                { type: 'text', text: '10101010101010101010101010', nonEditable: false, style: {}, colspan: 1 }
            ]
        },
    ]
}

export const dummydata = [
    dummy1,
    dummy2
]

export const saveDummy = [
    
]
