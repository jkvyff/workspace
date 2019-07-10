import React from 'react';
import { Route } from 'react-router-dom';
import WorkSpaceCard from '../components/WorkSpaceCards'


const DocumentsShow = ({match, documents}) => {
  return (
    <div>
      { documents.map(document => (
      	<Route key={document.extension} 
      	path={`${match.url}/${document.extension}`} 
      	document={document}
      	render={routerProps => 
      		<WorkSpaceCard document={document} /> } />
	  ))}
    </div>
  );
}

export default DocumentsShow;