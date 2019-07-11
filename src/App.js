import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DocumentsPage from './containers/DocumentsPage';
import Home from './components/Home'


class App extends Component {

	state = {
		documents: []
	}

	componentDidMount() {
		this.fetch('document')
	}

	render() {
	  return (
		<Router>
			<div className="App">
				<NavBar documents={this.state.documents} />
				<Route exact path="/" component={Home}/>
				<Route exact path='/documents' render={routerProps => <DocumentsPage {...routerProps} documents={this.state.documents} />} />
			</div>  
		</Router>
	  );
	}

	fetch = value => {
		const URL = `http://localhost:3000/${value}`
		fetch(URL)
		.then(res => res.json())
		.then(json => this.setState({documents: json}))
	}
}

export default App;