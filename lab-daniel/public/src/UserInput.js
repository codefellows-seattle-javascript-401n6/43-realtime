import React from 'react';


export default class UserInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            message: '',
            messages: [],
            currentTime: Date.now().toString()
        };

    }
    render() {
        return <React.Fragment>
        <form className="inputForm">
            <h4>Pick a username and chat away!</h4>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Message..."></input>
            <button type="submit">SEND</button>
        </form>
        </React.Fragment>
    }
}
