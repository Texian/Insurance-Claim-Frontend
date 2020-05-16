import React from 'react';
import './Header.scss';
import NavBar from '../NavBar/NavBar';

const Header = (props) => {
    return (
        <header>
            <h2><a href="">About</a></h2>
            <h1>Insurance Claim Page</h1>
            <NavBar />
        </header>
    );
}

export default Header;