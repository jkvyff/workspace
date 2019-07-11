import React, { Component } from 'react';

class SignUp extends Component {

    render() {
        return (
            <div className="page-login">
                <div className="ui centered grid container">
                    <div className="nine wide column">
                        <div className="ui icon warning message">
                            <i className="smile icon"></i>
                            <div className="content">
                                <div className="header">
                                    Signup!
                                    </div>
                                <p>Please Sign Up To Use A Workspace!</p>
                            </div>
                        </div>
                        <div className="ui fluid card">
                            <div className="content">
                                <form className="ui form" method="POST">
                                    <div className="field">
                                        <label>Enter Name</label>
                                        <input type="text" name="name" placeholder="Name"></input>
                                    </div>
                                    <div className="field">
                                        <label>Enter Username</label>
                                        <input type="text" name="user" placeholder="Username"></input>
                                    </div>
                                    <div className="field">
                                        <label>Enter Password</label>
                                        <input type="password" name="pass" placeholder="Password"></input>
                                    </div>
                                    <div className="field">
                                        <label>Confirm Password</label>
                                        <input type="password" name="conformPass" placeholder="Confirm Password"></input>
                                    </div>
                                    <button className="ui primary labeled icon button" type="submit">
                                        <i className="unlock alternate icon"></i>
                                        Sign Up!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;