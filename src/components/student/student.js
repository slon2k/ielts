import React from 'react'

import './student.css'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from "@material-ui/core/Button";


const Student = ({student}) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    return(
        <span>
            <IconButton
                aria-label="More"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClickOpen}
                >
                <MoreHorizIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{student.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {student.name}
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="default" variant="contained" >
                    Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" variant="contained" >
                    Save
                    </Button>
                </DialogActions>
            </Dialog>

        </span>
    );
};

export default Student