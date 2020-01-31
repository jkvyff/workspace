import React, { Component } from 'react';
import TextEditor from './TextEditor'

class WorkSpaceCard extends Component {
    render() {
        const extension = this.props.document.extension
        return (
            <div>
                <h3>WorkSpace {extension} </h3>
                <TextEditor document={this.props.document} />
            </div>
        ) 
    }
}

export default WorkSpaceCard