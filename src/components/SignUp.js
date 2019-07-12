import React, { Component } from 'react';
import '../styling/SignUp.css'

class SignUp extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {

        event.preventDefault()

        let username = this.state.username
        let password = this.state.password


        fetch('http://localhost:3000/api/v1/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { username, password } })
        })
            .then(resp => resp.json())
            .then(json => {
                console.log('login:', json)
                if (json && json.jwt) {
                    this.saveToken(json.jwt)
                }
            })
    }

    saveToken(jwt) {
        localStorage.setItem('jwt', jwt)
    }

    handleChange = (event) => {
        event.preventDefault()
        console.log(event)
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    render() {
        return (
            <div className="signup">
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
                                    <form className="ui form" onSubmit={this.handleSubmit}>
                                        <div className="field">
                                            <label>Enter Username</label>
                                            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="field">
                                            <label>Enter Password</label>
                                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                                        </div>
                                        {/* <div className="field">
                                            <label>Confirm Password</label>
                                            <input type="password" name="conformPass" placeholder="Confirm Password"></input>
                                        </div> */}
                                        <button className="ui primary labeled icon button" type="submit">
                                            <i className="file icon"></i>
                                            Sign Up!
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;