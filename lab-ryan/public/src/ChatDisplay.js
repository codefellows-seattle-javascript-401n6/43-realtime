import React, {Component, Fragment} from 'react';
import socket from './socket-context.js';

export default class ChatDisplay extends Component {
    state = {
        chat: [],
    }

    componentDidMount() {
        socket.on('chat-info', (info) => {
            console.log('display info', socket.id, info);
            this.setState({chat: info.chat});
        });
    }

    render() {
        return<div>
            <p>All the Chats</p>
        </div>
    }
}