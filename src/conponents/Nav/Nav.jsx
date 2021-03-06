import React, { Component } from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => (
    <nav className={classes.nav}>
        <div className={classes.item} >
            <NavLink to='/profile' activeClassName = {classes.activeLink} >Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/messages' activeClassName = {classes.activeLink}>Dialogs</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' activeClassName = {classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item} >
            <NavLink to='/music' activeClassName = {classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName = {classes.activeLink}>Settings</NavLink>
        </div>
    </nav>
)

export default Navbar;