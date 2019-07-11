import React, { Component } from 'react';
import { API_WS_ROOT} from '../constants';
import ActionCable from 'actioncable'


class WorkSpaceCard extends Component {

    state = {
        content: ""
    }

    componentDidMount() {
        this.setState({content: this.props.document.content})

        const cable = ActionCable.createConsumer(API_WS_ROOT)
        this.sub = cable.subscriptions.create('DocumentsChannel', {
            received: this.handleReceiveNewText
        })
    }

    handleReceiveNewText = (doc) => {
        if (doc.content !== this.state.content) {
            this.setState({ content: doc.content })
        }
    }
    
    handleChange = (ev) => {
        this.setState({ content: ev.target.value })
        this.sub.send({ content: ev.target.value, id: this.props.document.id })
    }

    render() {
        const extension = this.props.document.extension
        return (
            <div>
                <h3>WorkSpace {extension} </h3>
                <textarea cols="200" 
                    rows="15" 
                    placeholder={"Write in the Workspace Here..."}
                    onChange={this.handleChange}
                    value={this.state.content}
                ></textarea>
            </div>
        ) 
    }
}

export default WorkSpaceCard