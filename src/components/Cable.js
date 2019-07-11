import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ documents, handleReceivedDocument }) => {
  return (
    <Fragment>
      {documents.map(conversation => {
        return (
          <ActionCable
            key={conversation.id}  
            channel={{ channel: 'DocumentsChannel', conversation: document.id }}
            onReceived={handleReceivedDocument}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;