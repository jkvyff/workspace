import React, { Component } from 'react';
import { API_WS_ROOT } from '../constants';
import TextEditor from '../components/TextEditor'
import ActionCable from 'actioncable';

class WorkSpaceCard extends Component {
    lastTimer = null
    lastPress = 0

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
        console.log(doc.timestamp, 'received', doc.content)
        if (doc.content !== this.state.content && doc.id === this.props.document.id && doc.timestamp >= this.lastPress) {
            this.setState({ content: doc.content })
        }
    }
    
    handleChange = (ev) => {
        this.setState({ content: ev.target.value })
        // figure out the milliseconds since last keypress
        let now = (new Date()).getTime()
        let delta = now - this.lastPress
        this.lastPress = now

        // if the last time we pressed a key was recent then cancel the update to the server
        if (delta < 500) {
            clearTimeout(this.lastTimer)
        }
        // always assume we will send a update to the server 500ms from now
        let content = ev.target.value
        this.lastTimer = setTimeout(() => {
            this.sub.send({ content, id: this.props.document.id, timestamp: now })           
        })
    }

    render() {
        const extension = this.props.document.extension
        return (
            <div>
                <h3>WorkSpace {extension} </h3>
                {/* <TextEditor text={this.state.content} /> */}
                <textarea className="work-space"
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