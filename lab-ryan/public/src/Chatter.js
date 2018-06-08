import React, {Component, Fragment} from 'react';
import socket from './socket-context.js';

export default class Chatter extends Component {
    sendChat = () => {
        console.log('user chat', socket.id);
        socket.emit('chatter');
    }

    componentDidMount() {
        console.log('chatter id', socket.id);
    }

    render(){
        return <Fragment>
            <p>Put some stuff here</p>
        </Fragment>
    }
}