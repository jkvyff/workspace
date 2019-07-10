import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import WorkSpaceContainer from '../containers/WorkSpaceContainer'
import SignUp from './SignUp';
import Login from './Login';

class NavBar extends Component {

    render() {
        return (
            <HashRouter>
                <div className="ui menu">
                    <div className="item">
                        <div className="ui button"><NavLink to="/signup">Sign-Up</NavLink></div>
                    </div>
                    <div className="item">
                        <div className="ui button"><NavLink to="/login">Log-in</NavLink></div>
                    </div>
                    <div className="item">
                        <div className="ui button"><NavLink to="/newdocument">Add Workspace</NavLink></div>
                    </div>
                </div>
                <div className="content">
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/workspace" component={WorkSpaceContainer} />
                </div>
            </HashRouter>
        )
    }
}

export default NavBar;