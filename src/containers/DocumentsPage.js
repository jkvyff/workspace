import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import WorkSpaceCard from '../components/WorkSpaceCard'


class DocumentsShow extends Component {
  render() {
    const {match, documents} = this.props
    return (
      <div className="ui inverted segment">
        <div className="ui inverted relaxed divided list">
          {documents.map(document => (
            <div className="item" key={document.extension} >
              <Route exact path={match.url} 
              render={routerProps => 
                <div className="content"> 
                    <NavLink to={`/documents/${document.extension}`}>Workspace {document.extension}</NavLink>
                </div>
              } />
          	<Route path={`${match.url}/${document.extension}`} 
          	render={routerProps => 
          		<WorkSpaceCard document={document} /> 
            } />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default DocumentsShow;