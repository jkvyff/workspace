import React from 'react';
import { Route } from 'react-router-dom';


const DocumentsShow = ({match, documents}) => {
  return (
    <div>
      { documents.map(document => (
      	<Route key={document.extension} path={`${match.url}/${document.extension}`} render={routerProps => <div>{document.content}<br />{document.extension}</div> } />
	  ))}
    </div>
  );
}

export default DocumentsShow;