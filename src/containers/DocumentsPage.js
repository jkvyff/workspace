import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import WorkSpaceCard from '../components/WorkSpaceCard'


class DocumentsShow extends Component {
  render() {
    const {match, documents} = this.props
    return (
      <div className="documentsList">
        <ul>
          {documents.map(document => (
        	  <Route key={document.extension} 
        	  path={`${match.url}/${document.extension}`} 
        	  render={routerProps => 
        		  <WorkSpaceCard document={document} /> } />
          ))}
        </ul>
      </div>
    );
  }
}

export default DocumentsShow;