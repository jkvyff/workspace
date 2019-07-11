import React, { Component } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import Cable from './Cable';
import { API_ROOT, BASE_URL } from '../constants';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';

import NavBar from './NavBar'
import DocumentsPage from '../containers/DocumentsPage'


class WorkspaceWorker extends Component {

	state = {
		documents: [],
		activeDocument: null
	}

	componentDidMount() {
		this.fetch('documents')
	}

	handleReceivedDocument = response => {
    const { conversation } = response;
    	this.setState({
      		conversations: [...this.state.conversations, conversation]
    	});
  	};

	render() {
	  return (
		<Router basename={BASE_URL}>
			<div className="App" documents={this.state.documents}>
				<NavBar />
				<h1>WorkSpace Project</h1>
				<Route exact path="/" render={() => <h1>Home</h1>} />
				<Route path='/documents' render={routerProps => <DocumentsPage {...routerProps} documents={this.state.documents} />} />
			</div>
		</Router>
	  );
	}

	fetch = value => {
		const URL = `${API_ROOT}/${value}`
		fetch(URL)
		.then(res => res.json())
		.then(json => this.setState({documents: json}))
	}
}

export default WorkspaceWorker