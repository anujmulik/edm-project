import React, {useState} from 'react';
import MaterialTable from 'material-table';

export default function TableWithSearch({columns, data, title, addCall, updateCall, deleteCall, components }) {


    const [selectedRow, setSelectedRow] = useState(null);


    return (
        <MaterialTable
            title={title}
            columns={columns}
            data={data}
            onRowClick={((evt, selectedRow) =>
            {
                setSelectedRow(selectedRow);
            })}
            options={{
                rowStyle: rowData => ({
                    backgroundColor: (selectedRow && selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                }),
                pageSize: 20,
                emptyRowsWhenPaging: false,
                addRowPosition: 'first'
            }}
            editable={{
                onRowAdd: newData => new Promise ((resolve, reject) => {
                    setTimeout(()=> {
                            addCall(newData);
                        resolve()
                    }, 1000)

                }),
                onRowDelete: oldData => new Promise ((resolve, reject) => {
                    setTimeout(()=> {

                    deleteCall(oldData);
                    setSelectedRow(null);

                resolve()
            }, 1000)
        }),

                onRowUpdate: (newData, oldData) => new Promise ((resolve, reject) => {
                    setTimeout(()=> {

                            updateCall(newData);

                        resolve()
                    }, 1000)
                })

            }}

            components={components}


        />
    );
}