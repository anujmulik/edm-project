import React from 'react';
import MaterialTable from 'material-table';

export default function TableWithSearch({columns, data, title }) {
    const [state, setState] = React.useState({
        columns: columns,
        data: data,
        selectedRow: null
    });

    return (
        <MaterialTable
            title={title}
            columns={state.columns}
            data={state.data}
            onRowClick={((evt, selectedRow) => setState({ ...state, selectedRow: selectedRow }))}
            options={{
                rowStyle: rowData => ({
                    backgroundColor: (state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                })
            }}
        />
    );
}