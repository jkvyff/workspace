import React, { Component } from 'react';
import './App.css';
import { API_ROOT } from './constants';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import DocumentsPage from './containers/DocumentsPage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
	
	state = {
		documents: []
	}

	componentDidMount() {
		this.fetch('documents')
	}

	fetch = value => {
		fetch(`${API_ROOT}/${value}`)
		.then(res => res.json())
		.then(json => this.setState({documents: json}))
	}

	handleReceivedDocument = document => {
    	this.setState( { documents: [...this.state.documents, document] });
	};

	logout = event => {
		event.preventDefault()
		this.clearToken()
		this.setState({ username: '' })
	}

	clearToken(jwt) {
		localStorage.setItem('jwt', '')
	}
 
	  
	getProfile = () => {
		let token = localStorage.getItem('jwt')
		fetch('http://localhost:3000/api/v1/profile', {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		})
		.then(resp => resp.json())
		.then(json => {
			console.log('profile:', json)
			this.setState({ user: json.user.username })
		})
	}

	getSignUp = (event, person) => {
		event.preventDefault()
		console.log(person)
		debugger

		let username = person.username
		let password = person.password


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
				this.setState({ user: {username}})
			}
		})
		.then(() => {
			this.getProfile()
		})
	}

	saveToken(jwt) {
		localStorage.setItem('jwt', jwt)
	}


	render() {
	  const { documents } = this.state;
	  return (
		<Router>
			<div className="App">
				<NavBar documents={documents} onLogout={this.logout} />
	  			<Route exact path="/" render={ (props) => <Login 		{...props} onLogin={this.getProfile} onLogout=		{this.logout}/>} 
				/>
				<Route path='/documents' render={routerProps => 
					<DocumentsPage {...routerProps} documents={documents} />
				}/>
				<Route path='/home' render={(props) => <Home {...props} {...this.state} />} 
				/>
				<Route path='/signup' render={(props) => <SignUp
					{...props} onSignUp={this.getSignUp} />}
				/>
			</div>
		</Router>
	  );
	}
}

export default App;