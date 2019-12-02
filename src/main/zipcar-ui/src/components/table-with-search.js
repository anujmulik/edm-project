import React, {useState} from 'react';
import MaterialTable from 'material-table';

export default function TableWithSearch({columns, data, title, addCall, actions=undefined,
                                            updateCall = ()=>{}, deleteCall, components,
                                            onSelect = ()=> {}, pageSize=20, editable=true,
                                            deletable=true }) {


    const [selectedRow, setSelectedRow] = useState(null);
    return (
        <MaterialTable
            title={title}
            columns={columns}
            data={data}
            onRowClick={((evt, selectedRow) =>
            {
                setSelectedRow(selectedRow);
                onSelect(selectedRow);
            })}
            options={{
                rowStyle: rowData => ({
                    backgroundColor: (selectedRow && selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                }),
                pageSize: pageSize,
                emptyRowsWhenPaging: false,
                addRowPosition: 'first'
            }}
            editable= {editable ? {
                onRowAdd: newData => new Promise ((resolve, reject) => {
                    setTimeout(()=> {
                            addCall(newData);
                        resolve()
                    }, 1000)

                }),
                onRowDelete: deletable ? oldData => new Promise ((resolve, reject) => {
                    setTimeout(()=> {
                    deleteCall(oldData);
                    setSelectedRow(null);

                resolve()
            }, 1000)
        }): undefined,

                onRowUpdate: (newData, oldData) => new Promise ((resolve, reject) => {
                    setTimeout(()=> {

                            updateCall(newData);

                        resolve()
                    }, 1000)
                })

            } : undefined}
            components={components}
            actions={actions}
        />
    );
}