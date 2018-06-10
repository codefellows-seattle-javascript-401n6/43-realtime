import React, { Component, Fragment } from 'react';
import socket from './socket-context';


export default class ChatEntry extends Component {

    sendChat = () => {
        console.log('client-chatted', socket.id);

    }

    componentDidMount() {
        console.log('id', socket.id);
    }

    sendInfo = (ev) => {
        ev.preventDefault();
        if (ev.target.info.value) {
            socket.emit('send-chatter', ev.target.info.value);
        }
        ev.target.reset();
    };


    render() {
        return <Fragment>
            <form onSubmit={this.sendInfo} name="form">
                <input size="50" name="info" placeholder="Message..." />
                <button onClick={this.sendChat}>Click Me</button>
            </form>

        </Fragment>
    }

}