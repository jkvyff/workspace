import React, { Component } from 'react';
import {
    NavLink,
    withRouter
} from 'react-router-dom';
import '../styling/NavBar.css';

class NavBar extends Component {

    logout = event => {
        this.props.onLogout(event)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="ui menu">
                    <div className="item">
                        <button className="ui button"><NavLink to="/">Log-in</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button"><NavLink to="/documents">WorkSpaces</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button"><NavLink to="/home">Home</NavLink></button>
                    </div>
                    <div className="item">
                        <button className="ui button" onClick={this.logout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar);