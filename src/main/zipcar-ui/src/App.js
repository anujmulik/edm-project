import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const classes = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
};


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []

        }
    }

  componentDidMount() {
    axios.get(`/api/employees/all`)
        .then(res => {
          this.setState({
              employees: res.data
          });
        })
  }

  render()
  {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Employee ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.employees.map(row => (
                        <TableRow key={row.EMPLOYEE_ID}>
                            <TableCell component="th" scope="row">
                                {row.EMPLOYEE_ID}
                            </TableCell>
                            <TableCell align="right">{row.FIRST_NAME}</TableCell>
                            <TableCell align="right">{row.LAST_NAME}</TableCell>
                            <TableCell align="right">{row.TYPE}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
  }
}

export default App;
