import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

//here have a basic navigation bar
const Navbar = () => {
    return (
        <nav>
            <ul >
                <li class="navbar-button">
                    <Link to="/">Home</Link>
                </li>
                <li class="navbar-button">
                    <Link to="/experience">Experience</Link>
                </li>
                <li class="navbar-button">
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
