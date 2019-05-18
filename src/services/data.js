export default class Data {
    _students = [
        {id: 101, firstName: "Alastor", lastName: "Moody", grade: 10, letter:"A", level: 5},
        {id: 102, firstName: "Albus", lastName: "Dumbledore", grade: 10, letter:"B", level: 5},
        {id: 103, firstName:  "Albus", lastName: "Potter", grade: 10, letter: "C", level: 5},
        {id: 104, firstName:  "Arthur", lastName: "Weasley", grade: 10, letter: "A", level: 5},
        {id: 105, firstName:  "Bill", lastName: "Weasley", grade: 10, letter: "B", level: 5},
        {id: 106, firstName:  "Cedric", lastName: "Diggory", grade: 10, letter: "C", level: 5},
        {id: 107, firstName:  "Cho", lastName: "Chang", grade: 10, letter: "A", level: 5},
        {id: 108, firstName:  "Dean", lastName: "Thomas", grade: 10, letter: "B", level: 5},
        {id: 109, firstName:  "Draco", lastName: "Malfoy", grade: 10, letter: "C", level: 6},
        {id: 110, firstName:  "Ernie", lastName: "Macmillan", grade: 10, letter: "A", level: 6},
        {id: 111, firstName:  "Filius", lastName: "Flitwick", grade: 10, letter: "B", level: 6},
        {id: 112, firstName:  "Fred", lastName: "Weasley", grade: 11, letter: "C", level: 6},
        {id: 113, firstName:  "George", lastName: "Weasley", grade: 11, letter: "A", level: 6},
        {id: 114, firstName:  "Godric", lastName: "Gryffindor", grade: 11, letter: "B", level: 6},
        {id: 115, firstName:  "Hermione", lastName: "Granger", grade: 11, letter: "C", level: 6},
        {id: 116, firstName:  "Hannah", lastName: "Abbott", grade: 11, letter: "A", level: 6},
        {id: 117, firstName:  "Harry", lastName: "Potter", grade: 11, letter: "B", level: 6},
        {id: 118, firstName:  "Isolt", lastName: "Sayre", grade: 11, letter: "C", level: 6},
        {id: 119, firstName:  "Jacob", lastName: "Kowalski", grade: 11, letter: "A", level: 6},
        {id: 120, firstName:  "Justin", lastName: "Finch-Fletchley", grade: 11, letter: "B", level: 6},
        {id: 121, firstName:  "Kingsley", lastName: "Shacklebolt", grade: 8, letter: "C", level: 6},
        {id: 122, firstName:  "Lily", lastName: "Potter", grade: 8, letter: "A", level: 6},
        {id: 123, firstName:  "Luna", lastName: "Lovegood", grade: 11, letter: "B", level: 6},
        {id: 124, firstName:  "Minerva", lastName: "McGonagall", grade: 11, letter: "C", level: 6},
        {id: 125, firstName:  "Merula", lastName: "Snyde", grade: 11, letter: "A", level: 6},
        {id: 126, firstName:  "Molly", lastName: "Weasley", grade: 11, letter: "B", level: 6},
        {id: 127, firstName:  "Neville", lastName: "Longbottom", grade: 9, letter: "C", level: 7},
        {id: 128, firstName:  "Newt", lastName: "Scamander", grade: 9, letter: "A", level: 7},
        {id: 129, firstName:  "Oliver", lastName: "Wood", grade: 9, letter: "B", level: 7},
        {id: 130, firstName:  "Percy", lastName: "Weasley", grade: 9, letter: "C", level: 7},
        {id: 131, firstName:  "Remus", lastName: "Lupin", grade: 9, letter: "A", level: 7},
        {id: 132, firstName:  "Rubeus", lastName: "Hagrid", grade: 9, letter: "B", level: 7},
        {id: 133, firstName:  "Seamus", lastName: "Finnigan", grade: 9, letter: "C", level: 7},
        {id: 134, firstName:  "Severus", lastName: "Snape", grade: 9, letter: "A", level: 0},
        {id: 135, firstName:  "Sirius", lastName: "Black", grade: 9, letter: "B", level: 0},
        {id: 136, firstName:  "Susan", lastName: "Bones", grade: 9, letter: "C", level: 0},
        {id: 137, firstName:  "Viktor", lastName: "Krum", grade: 9, letter: "A", level: 0},
        {id: 138, firstName:  "Ginevra", lastName: "Weasley", grade: 7, letter: "B", level: 0},
        {id: 139, firstName:  "Ron", lastName: "Weasley", grade: 9, letter: "C", level: 0}

    ];

    _grades = [7,8,9,10,11];

    getAllStudents = async () => {
        return this._students;
    };

    getAllGrades = async () => {
        return this._grades;
    }
}