import React from 'react'
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core';

import { fade } from '@material-ui/core/styles/colorManipulator';

import SearchIcon from '@material-ui/icons/Search';

import Create from '../create';

import './header.css'

const classes = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 10,
    },
    title: {
        flexGrow: 1,
        display: 'none',
    },
    search: {
        position: 'relative',
        borderRadius: 5,
        backgroundColor: fade("#FFFFFF", 0.15),
        '&:hover': {
            backgroundColor: fade("#FFFFFF", 0.25),
        },
        marginLeft: 0,
        width: '300px',
        paddingLeft: 20,
        paddingRight: 20,

    },
    searchIcon: {
        width: 10,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: 100,
        width: '100%',
    },
};


const Header = ({grades, toggleGradeSelection, onSearchChanged, updateStudent}) => {


    const menuItems = [...grades].map((item) => {
        let className = item.selected ? 'header__grades header__grades--active' : 'header__grades';
        let color = item.selected ? 'primary' : 'default';
        return (
            <Button variant="contained" color={color} style = {{margin: '15px'}} key = {item.grade} className={className} onClick={() => {toggleGradeSelection(item.grade)}}>
                {item.grade} КЛАСС
            </Button>
        )});


    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography variant={"headline"} color={"inherit"} style={{marginRight: 100}}>
                        IELTS application
                    </Typography>
                    <div style={classes.search}>
                        <div style={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onChange={(event) => {onSearchChanged(event.target.value)}}
                            style={{marginLeft: 30, color: "inherit"}}
                            placeholder="Search…"

                        />
                    </div>
                </Toolbar>
            </AppBar>
            {menuItems}
            <Create updateStudent = {updateStudent}/>

        </div>

    );
};

export default Header;