import React from 'react'
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

import './header.css'

const Header = ({grades, toggleGradeSelection}) => {
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
                    <Typography variant={"headline"} color={"inherit"}>
                        IELTS application
                    </Typography>
                </Toolbar>
            </AppBar>
            {menuItems}

        </div>

    );
};

export default Header;