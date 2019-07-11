import React, { Component } from 'react';
import { API_ROOT } from '../constants';

//import Websocket from 'react-websocket';

class WorkSpaceCard extends Component {

    state = {
        content: ""
    }

    componentDidMount() {
        this.setState({content: this.props.document.content})
        this.interval = setInterval(() => {
            fetch(`{API_DOC}/${this.props.document.id}`)
            .then(res => res.json())
            .then(json => console.log({content: json.content}))
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    handleChange = (ev) => {
        const VAL = ev.target.value
        this.fetchPost(VAL)
    }

    fetchPost = content => {
        const URL = `{API_DOC}/${this.props.document.id}`
        this.setState({content: content})
        fetch(URL , {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PATCH',
            body: JSON.stringify({
                content: content
            })
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }

    handleData = (data) => {
      let result = JSON.parse(data);
        console.log(result)
      /* this.setState({count: this.state.count + result.movement});*/
    }

    render() {
        const {extension, content} = this.props.document
        return (
            <div>
                <h3>WorkSpace {extension} </h3>
                <textarea cols="250" 
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