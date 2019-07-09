import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <div class="ui menu">
                <div class="item">
                    <div class="ui primary button">Sign up</div>
                </div>
                <div class="item">
                    <div class="ui button">Log-in</div>
                </div>
            </div>
        )
    }
}

export default NavBar;