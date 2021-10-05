import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/Learn and earn.png'
import "./Header.css"
const Header = () => {
    return (
        <div className="header-style d-flex justify-content-between align-items-center">
            <img src={logo} alt=""/>
            <nav>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/services">Services</NavLink>
               <NavLink to="/teachers">Our Teachers</NavLink>
            </nav>
        </div>
    );
};

export default Header;