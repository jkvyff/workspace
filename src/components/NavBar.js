import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <div className="ui menu">
                <div className="item">
                    <div className="ui primary button">Sign up</div>
                </div>
                <div className="item">
                    <div className="ui button">Log-in</div>
                </div>
            </div>
        )
    }
}

export default NavBar;