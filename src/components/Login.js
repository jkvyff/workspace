import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_ROOT} from '../constants';


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    constructor() {
        super()
        this.username = React.createRef()
        this.password = React.createRef()

        if (this.getToken()) {
            // TODO: if already logged in, redirect away from login page
        }
        this.logout = this.logout.bind(this)
    }

    login = (event) => {
        event.preventDefault()
        console.log('log in')

        let username = this.username.current.value
        let password = this.password.current.value

        fetch(`${API_ROOT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ user: {username, password}})
        })
        .then(resp => resp.json())
        .then(json => {
            console.log('login:', json)
            if (json && json.jwt) {
                this.saveToken(json.jwt)
                this.props.onLogin()
            }
        })
        .then(() => {
            if (username === '' && password === '') {
                alert("Please Enter In Data")
            } else {
                this.props.history.push('/home')
            } 
        })
    }

    logout (event) {
        this.props.onLogout(event)
    }

    saveToken(jwt) {
        localStorage.setItem('jwt', jwt)
    }

    clearToken(jwt) {
        localStorage.setItem('jwt', '')
    }

    getToken(jwt) {
        return localStorage.getItem('jwt')
    }

    render() {
        return (
            <div className="page-login">
                <br></br>
                <div className="ui centered grid container">
                    <div className="nine wide column">
                        <div className="ui warning message"> 
                                <div className="content">
                                    <div className="header">
                                        Welcome to WorkSpace!
                                    </div>
                                <p>Please Login to collaborate and use a workspace!</p>
                            </div>
                        </div>
                        <div className="ui fluid card">
                            <div className="content">
                                <form className="ui form" method="POST">
                                    <div className="field">
                                        <label>User</label>
                                        <input type="text" name="user" placeholder="User" ref={this.username}></input>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password" name="pass" placeholder="Password" ref={this.password}></input>
                                    </div>
                                    <button className="ui fluid large submit button" type="submit" onClick={this.login}>
                                        Login
                                    </button>
                                </form>
                                <div className="ui error message">
                                    New User?  Sign up
                                    <a href="./signup">  Here!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);