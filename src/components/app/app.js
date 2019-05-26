import React, {Component} from 'react';
import Header from '../header';
import Main from '../main';
import Data from '../../services/data'

import './app.css';

export default class App extends Component {
    data = new Data();

    state = {
        students: [],
        grades: [],
        search: ''
    };

    onStudentsLoaded = (students) => {
        this.setState({
            students: [...students]
        });
    };

    onSearchChanged = (search) => {
        this.setState({search});
        console.log(search);
    };

    onGradesLoaded = (grades) => {
        this.setState({
            grades: [...grades].map((item) => {return ({grade: item, selected: true})})
        });
    };

    getGrades = () => {
        this.data.getAllGrades()
            .then(this.onGradesLoaded)
            .catch(this.onError);
    };

    onError = (err) => {
        console.log(err);
    };

    getStudents = () => {
        this.data.getAllStudents()
            .then(this.onStudentsLoaded)
            .catch(this.onError);
    };

    componentWillMount() {
        this.getStudents();
        this.getGrades();
    };

    toggleGradeSelection = (grade) => {
        const index = this.state.grades.findIndex((item) => item.grade === grade);
        const oldItem = this.state.grades[index];
        oldItem.selected = !oldItem.selected;
        let grades = [...this.state.grades];
        grades[index] = oldItem;
        this.setState({
            grades: grades
        });
    };

    isGradeSelected = (grade) => {
        const index = this.state.grades.findIndex((item) => item.grade === grade);
        if (index !== -1) {
            const item = this.state.grades[index];
            return item.selected;
        }
        return false;
    };

    filteredStudents = () => {
        const search = this.state.search;
        const result = [...this.state.students.filter((item) => {return this.isGradeSelected(item.grade)})];
        if (search !== '') {
            return result.filter((item) => {
                return ((item.firstName.toLowerCase().indexOf(search.toLowerCase()) > -1) || (item.lastName.toLowerCase().indexOf(search.toLowerCase()) > -1));
            })
        }
        return result;
    };

    render() {
        return (
            <div>
                <Header grades = {this.state.grades} toggleGradeSelection = {this.toggleGradeSelection} onSearchChanged = {this.onSearchChanged}/>
                <Main students = {this.filteredStudents()}/>
            </div>);
    };
}
