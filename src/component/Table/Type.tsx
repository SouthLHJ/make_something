export type Title = {
    headerName : string,
    field :  string,
    width : string|number ,
    class : string,
    flex: number ,
    minWidth: number ,
    maxWidth: number ,
    cellRenderer: string ,
    headerCheckboxSelection: boolean,
    checkboxSelection: boolean,
    autoIndexing: string ,
    cellEditor: string ,
}

export type FrameworkComponents = {
    key:string,
    Element:Element,
}

export type Option = {
    columnDefs   :Array<Title>,
    frameworkComponents: FrameworkComponents,
    onSelectionChanged: Function,
    
}

export type Props = {
     option : Option,
     data : Array<any>,
     th_box_class : string,
     td_box_class : string,
     tableclass : string,
}
