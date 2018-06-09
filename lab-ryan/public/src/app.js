import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('client connected');
})

class App extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        socket.on('messages', (data) => {
            console.log('client messages', data);
            this.setState({messages: data.messages});
            console.log('state of messages after compount mount', this.state)
        })
    }

    sendMessage = (event) => {
        event.preventDefault();
        if(event.target.message.value){
            socket.emit('send-message', event.target.message.value);

        }
        event.target.reset();
    };

    render() {
        return <Fragment>
            <h1>Socket IO App</h1>
            <p>Welcome to Our App</p>
            <ul>
                {this.state.messages.map((message, index) => {
                    return <li key={index}>{message}</li>
                })}
            </ul>

            <form onSubmit={this.sendMessage} name="form">
                <input size="50" name="message" placeholder="Message..." />
                <input type="submit" value="Send Message" />

            </form>
        </Fragment>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);