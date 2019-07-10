import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import WorkSpaceContainer from './containers/WorkSpaceContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>WorkSpace Project</h1>
      <WorkSpaceContainer />
    </div>
  );
}

export default App;