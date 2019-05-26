import React from 'react'
import EnhancedTable from "../EnhancedTable";
import './main.css'

const Main = ({students, updateStudent}) => {
    const data = [...students];
    for (let i=0; i < data.length ; i++) {
        data[i].name = data[i].firstName + ' ' + data[i].lastName;
        data[i].classs = data[i].grade + ' ' + data[i].letter;
    }

    return (
        <div>
            <EnhancedTable data = {data} updateStudent = {updateStudent}/>
        </div>
    );
};

export default Main;