import React, { Component } from 'react';
import './App.css';
import { API_ROOT } from './constants';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import DocumentsPage from './containers/DocumentsPage'

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


	render() {
	  const { documents } = this.state;
	  return (
		<Router>
			<div className="App">
				<NavBar documents={documents} />
				<h1>WorkSpace Project</h1>
				<Route exact path="/" render={() => <h1>Home</h1>} />
				<Route path='/documents' render={routerProps => 
					<DocumentsPage {...routerProps} documents={documents} />
				}/>
			</div>
		</Router>
	  );
	}
}

export default App;