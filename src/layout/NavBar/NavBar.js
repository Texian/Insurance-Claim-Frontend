import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
        <div className="vertical-right">
            <ul>
                {
                    (props.user)
                    ?<>
                    <li><a href="/profile"><h2>Profile</h2></a></li>
                    <li><a href="/logout"><h2>LogOut</h2></a></li>
                    </>
                    :<>
                    <li><a href="/login"><h2>Login</h2></a></li>
                    </>
                }
            </ul>
        </div>
        </>
    );
}

export default NavBar;