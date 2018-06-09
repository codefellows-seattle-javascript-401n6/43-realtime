import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import MessageEntry from './msgEntry.js';
import MessageDisplay from './msgDisplay.js';


const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('client connected');
})

class App extends Component {
    state = {
        msgs: []
    }

    componentDidMount() {
        socket.on('msgs', (data) => {
            console.log('client msgs', data);
            this.setState({msgs: data.msgs});
            console.log(this.state)
        })
    }

    sendMessage = (event) => {
        event.preventDefault();
        if(event.target.msg.value){
            socket.emit('send-msg', event.target.msg.value);
        }
        event.target.reset();
    };

    render() {
        return <Fragment>
            <h1>Socket IO App</h1>
            <p>Welcome to Our App</p>
            <ul>
                {this.state.msgs.map((msg, index) => {
                    return <li key={index}>{msg}</li>
                })}
            </ul>
            {/* <form onSubmit={this.sendMSG} name="form">
                <input name="msg" placeholder="Message..." />
                <input type="submit" value="Send Message" />
            </form> */}
            <MessageEntry />
            <MessageDisplay />
        </Fragment>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);