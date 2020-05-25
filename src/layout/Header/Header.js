import React from 'react';
import './Header.scss';
import NavBar from '../NavBar/NavBar';

const Header = (props) => {
    return (
        <header>
            <h2><a href="/about">About</a></h2>
            <h1><a href="/">Insurance Claim Page</a></h1>
            <NavBar />
        </header>
    );
}

export default Header;