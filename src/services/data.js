export default class Data {
    _students = [
        "Alastor Moody",
        "Albus Dumbledore",
        "Albus Potter",
        "Arthur Weasley",
        "Bill Weasley",
        "Cedric Diggory",
        "Cho Chang",
        "Dean Thomas",
        "Draco Malfoy",
        "Ernie Macmillan",
        "Filius Flitwick",
        "Fred Weasley",
        "George Weasley",
        "Godric Gryffindor",
        "Hermione Granger",
        "Hannah Abbott",
        "Harry Potter",
        "Isolt Sayre",
        "Jacob Kowalski",
        "Justin Finch-Fletchley",
        "Kingsley Shacklebolt",
        "Lily Potter",
        "Luna Lovegood",
        "Minerva McGonagall",
        "Merula Snyde",
        "Molly Weasley",
        "Neville Longbottom",
        "Newt Scamander",
        "Oliver Wood",
        "Percy Weasley",
        "Remus Lupin",
        "Rubeus Hagrid",
        "Seamus Finnigan",
        "Severus Snape",
        "Sirius Black",
        "Susan Bones",
        "Viktor Krum",
        "Ginevra Weasley",
        "Ron Weasley",
    ];

    _grades = [7,8,9,10,11];

    _letters = ['A','B','C','D'];

    _centers = ['Hogwarts', 'Beauxbatons', 'Durmstrang'];

    createStudent = (id, firstName, lastName, grade, letter, center, date, level) => {
        return {
            id: id,
            firstName: firstName,
            lastName: lastName,
            grade: grade,
            letter: letter,
            center: center,
            date: date,
            level: level
        }
    };

    getAllStudents = async () => {
        const students = [];
        const numberOfStudents = this._students.length;
        const numberOfGrades = this._grades.length;
        const numberOfLetters = this._letters.length;
        const numberOfCenters = this._centers.length;

        for (let i=0; i < numberOfStudents; i++) {
            let id = 100+i;
            let name = this._students[i].split(' ', 2);
            let firstName = name[0];
            let lastName = name[1];
            let grade = this._grades[i % numberOfGrades];
            let letter = this._letters[i % numberOfLetters];
            let center = this._centers[i % numberOfCenters];
            let date = new Date(2019, i%3, 10 + i%7);
            let level = 5 + 0.5 * ( i%6 );
            let student = this.createStudent(id, firstName, lastName, grade, letter, center, date, level);

            students.push(student);
        }
        console.log(students);
        return students;
    };

    getAllGrades = async () => {
        return this._grades;
    }
}