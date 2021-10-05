import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/Learn and earn.png'
import "./Header.css"
const Header = () => {
    return (
        <div className="header-style d-flex justify-content-between align-items-center">
            <img src={logo} alt=""/>
            <nav>
               <Link to="/home">Home</Link>
               
               <Link to="/services">Services</Link>
               <Link to="/about">About Us</Link>
               <Link to="/teachers">Our Teachers</Link>
            
            </nav>
        </div>
    );
};

export default Header;