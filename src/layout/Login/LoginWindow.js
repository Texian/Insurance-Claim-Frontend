import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const LoginWindow = (props) => {
    return (
        <div className="container">
            <div>
                <Login login={props.login} logout={props.logout} />
            </div>
            <div>
                <Register />
            </div>
        </div>
    )
}

export default LoginWindow;