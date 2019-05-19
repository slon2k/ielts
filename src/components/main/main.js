import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import EnhancedTable from "../EnhancedTable";
import './main.css'


const Main = ({students}) => {
    const data = [...students];
    for (let i=0; i < data.length ; i++) {
        data[i].name = data[i].firstName + ' ' + data[i].lastName;
        data[i].classs = data[i].grade + ' ' + data[i].letter;
    }

    //const studentList = [...students].map((item) => { return (<li key={item.id}>{item.firstName} {item.lastName}</li>)});
    const tableRows = [...students].map(student => { return (
        <TableRow key={student.id}>
            <TableCell>{student.firstName} {student.lastName}</TableCell>
            <TableCell>{student.grade} {student.letter}</TableCell>
            <TableCell>{student.date.toLocaleDateString()}</TableCell>
            <TableCell>{student.level}</TableCell>
            <TableCell>{student.center}</TableCell>
        </TableRow>
    )});
    return (
        <div>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Exam Date</TableCell>
                            <TableCell>Level</TableCell>
                            <TableCell>Test Center</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </Paper>

            <EnhancedTable data = {data}/>

        </div>
    );
};

export default Main;