import React from 'react'

import './create.css'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";


const Create = ({updateStudent}) => {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        id: Date.now(),
        firstName: '',
        lastName: '',
        letter: 'A',
        grade: 7,
        date: null,
        level: 5,
        center: '',
    });

    const letters = ["A", "B", "C", "D", "E", "F"];
    const grades = [7, 8, 9, 10, 11];

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSave = () => {
        const student = {
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            letter: values.letter,
            grade: values.grade,
            date: new Date(values.date),
            level: values.level,
            center: values.center,
        };

        console.log(`Saving:`);
        console.log(values);
        updateStudent(student);
        setValues(
        {
            id: Date.now(),
            firstName: '',
            lastName: '',
            letter: 'A',
            grade: 7,
            date: null,
            level: 5,
            center: '',
        });

        setOpen(false);

    };

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    return(
        <span>
            <Fab
                size="medium"
                color="secondary"
                aria-label="Add"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClickOpen}
                style = {{marginLeft: 50}}
                >
                <AddIcon />
            </Fab>
            <form noValidate autoComplete="off">
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Student</DialogTitle>
                <DialogContent>
                    <TextField
                      margin="dense"
                      id="firstName"
                      label="First Name"
                      value={values.firstName}
                      fullWidth
                      onChange={handleChange('firstName')}
                    />
                     <TextField
                         margin="dense"
                         id="lastName"
                         label="Last Name"
                         value={values.lastName}
                         onChange={handleChange('lastName')}
                         fullWidth
                     />
                      <TextField
                          id="grade"
                          label="Grade"
                          type="number"
                          value={values.grade}
                          onChange={handleChange('grade')}
                          select
                          margin="normal"

                      >
                          {grades.map(opt => (
                              <option key={opt} value={opt} >
                                  {opt}
                              </option>
                          ))}
                      </TextField>

                    <TextField
                        id="letter"
                        label="Class"
                        value={values.letter}
                        onChange={handleChange('letter')}
                        select
                        margin="normal"
                    >
                        {letters.map(opt => (
                            <option key={opt} value={opt} >
                                {opt}
                            </option>
                        ))}
                    </TextField>

                    <TextField
                        margin="dense"
                        id="date"
                        type="date"
                        fullWidth
                        value={values.date}
                        onChange={handleChange('date')}
                    />
                  <TextField
                      min="5"
                      max="9"
                      margin="dense"
                      id="grade"
                      label="Level"
                      type="number"
                      step="0.5"
                      value={values.level}
                      onChange={handleChange('level')}
                  />
                  <TextField
                      margin="dense"
                      id="center"
                      label="Center"
                      value={values.center}
                      fullWidth
                      onChange={handleChange('center')}
                  />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="default" variant="contained" >
                    Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary" variant="contained" >
                    Save
                    </Button>
                </DialogActions>
            </Dialog>
            </form>
        </span>
    );
};

export default Create