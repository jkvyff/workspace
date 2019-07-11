import React, { Component } from 'react';
import {
    Route,
    NavLink,
    BrowserRouter
} from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import DocumentsPage from '../containers/DocumentsPage'

class NavBar extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="ui menu">
                    <div className="item">
                        <button className="ui black button"><NavLink to="/signup">Sign Up</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button"><NavLink to="/login">Log-in</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button"><NavLink to="/documents">Add Workspace</NavLink></button>
                    </div>
                </div>
                <div className="content">
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/documents" render={routerProps => <DocumentsPage {...routerProps} documents={this.props.documents}/>} /> 
                </div>
            </BrowserRouter>
        )
    }
}

export default NavBar;