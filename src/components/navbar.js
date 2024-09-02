import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
    return (
        <nav className="">
            <ul>
                <li>
                    <Link to="/">
                        <button class="navbar-button">Home</button>
                    </Link>
                </li>
                {/* <li>
                    <Link to="/experience">
                        <button class="navbar-button">Experience</button>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <button class="navbar-button">Projects</button>
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
