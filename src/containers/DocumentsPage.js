import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import WorkSpaceCard from '../components/WorkSpaceCard'


class DocumentsShow extends Component {
  render() {
    const {match, documents} = this.props
    return (
      <div>
          {documents.map(document => (
            <div key={document.extension} >
              <Route exact path={match.url} 
              render={() => 
                <NavLink to={`/documents/${document.extension}`}>Workspace {document.extension}</NavLink>
              } />
          	<Route path={`${match.url}/${document.extension}`} 
          	render={() => 
          		<WorkSpaceCard document={document} /> 
            } />
          </div>
        ))}
      </div>
    );
  }
}

export default DocumentsShow;