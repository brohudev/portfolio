import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

//here have a basic navigation bar
const Navbar = () => {
    return (
        <nav class='glass'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
