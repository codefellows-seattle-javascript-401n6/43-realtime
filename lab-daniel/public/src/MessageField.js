import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './UserInput.js'

export default class MessageField extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <React.Fragment>
            <div className="messages">
                <h3>Messages</h3>
                {/* <ul>
                    {this.props.messages.map(message => {
                        return (
                            <li>{this.props.username} : {this.props.message}</li>
                        )
                    })}
                </ul> */}
            </div>
        </React.Fragment>
    }
}
