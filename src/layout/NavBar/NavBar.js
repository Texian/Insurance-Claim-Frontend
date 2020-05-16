import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
        <header className="vertical-center">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Insurance CLaim Page</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </header>
        </>
    );
}

export default NavBar;