import React, { Component } from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import '../styling/NavBar.css'

class NavBar extends Component {

    render() {
        return (
            <div>
                <div className="ui menu">
                    <div className="item">
                        <button className="ui button"><NavLink to="/login">Log-in</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button"><NavLink to="/documents">Go To Workspace</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button">Logout</button>
                    </div>
                </div>
                <div className="content">
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                </div>
            </div>
        )
    }
}

export default NavBar;