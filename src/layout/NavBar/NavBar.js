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
                    <li><a href="">Profile</a></li>
                    <li><a href="">LogOut</a></li>
                    </>
                    :<>
                    <li><a href="">Login</a></li>
                    </>
                }
            </ul>
        </div>
        </>
    );
}

export default NavBar;