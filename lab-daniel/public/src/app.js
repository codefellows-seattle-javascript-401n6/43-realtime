import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import UserInput from './UserInput.js'
import MessageField from './MessageField.js'

import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('connected!')
})


class App extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return <Fragment>
        <h1>Messenger App</h1>
        <UserInput />
        <MessageField />
    </Fragment>
}
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);