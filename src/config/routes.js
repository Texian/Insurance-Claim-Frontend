import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import LoginWindow from '../layout/Login/LoginWindow';
import FloorplanContainer from '../containers/FloorplanContainer';
import About from '../components/About/About';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register'
                render={
                    () => props.user ?
                    <Redirect to='/users' />
                    :
                    <LoginWindow register={props.register} />
                }
            />
            <Route path='/login'
                render={
                    () => props.user ?
                    <Redirect to='/' />
                    :
                    <LoginWindow login={props.login} />
                }
            />
            <Route path='/floorplans' component={FloorplanContainer} />
            <Route exact path='/about' component={About} />
        </Switch>
    )
}

export default Routes;