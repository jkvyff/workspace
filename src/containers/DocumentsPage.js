import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import WorkSpaceCard from '../components/WorkSpaceCard'


class DocumentsShow extends Component {
  render() {
    const {match, documents} = this.props
    return (
      <div className="documentsList">
        {documents.map(document => (
          <div key={document.extension} >
            <Route exact path={match.url} 
            render={routerProps => 
              <div className="item">
                <button className="ui button"><NavLink to={`/documents/${document.extension}`}>Workspace {document.extension}</NavLink></button>
              </div>
            } />
          	<Route path={`${match.url}/${document.extension}`} 
          	render={routerProps => 
          		<WorkSpaceCard document={document} /> 
            } />
          </div>
  	    ))}
      </div>
    );
  }
}

export default DocumentsShow;