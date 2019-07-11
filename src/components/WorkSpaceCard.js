import React, { Component } from 'react';
// import Websocket from 'react-websocket';

class WorkSpaceCard extends Component {

    state = {
        content: ""
    }

    componentDidMount() {
        this.setState({content: this.props.document.content})
    }
    
    handleChange = (ev) => {
        this.setState({content: ev.target.value})
    }

    handleData = (data) => {
      let result = JSON.parse(data);
        console.log(result)
        // this.setState({count: this.state.count + result.movement});
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