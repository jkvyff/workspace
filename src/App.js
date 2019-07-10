import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import DocumentsPage from './containers/DocumentsPage'


class App extends Component {


	state = {
		documents: []
	}

	componentDidMount() {
		this.fetch('document')
	}

	render() {
	  return (
		<HashRouter>
			<div className="App">
				<NavBar />
				<h1>WorkSpace Project</h1>
				<Route exact path="/" render={() => <h1>Home</h1>} />
				<Route path='/documents' render={routerProps => <DocumentsPage {...routerProps} documents={this.state.documents} />} />
			</div>
		</HashRouter>
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