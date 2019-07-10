import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import DocumentsPage from './containers/DocumentsPage'
import WorkSpaceContainer from './containers/WorkSpaceContainer'


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
		      <NavBar />
          <h1>WorkSpace Project</h1>
          <WorkSpaceContainer />
		      <Route exact path="/" render={() => <h1>Home</h1>} />
		      <Route path='/documents' render={routerProps => <DocumentsPage {...routerProps} documents={this.state.documents}/>} />
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