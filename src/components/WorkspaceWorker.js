import React, { Component } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import Cable from './Cable';
import { API_ROOT, BASE_URL } from '../constants';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar'
import DocumentsPage from '../containers/DocumentsPage'
import Home from './Home'


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
				<Route exact path="/" omponent={Home} />
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