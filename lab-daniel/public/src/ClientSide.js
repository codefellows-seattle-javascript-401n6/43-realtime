import React from 'react';
import io from 'socket.io-client'

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('A client has been connected!');
});

class ClientSide extends React.Component {
        state = {
            totalMessages: []
        }

    componentDidUpdate(){
        console.log('Message id: ', socket.id);
        socket.on('totalMessages', (data) => {
            this.setState({totalMessages: data.totalMessages});
            console.log('State: ', this.state)
        })
    }

    sendMessage = (e) => {
        e.preventDefault();
        console.log('in sendMessage');
        socket.emit('send-message', e.target.value);
    }

    render() {
        return <React.Fragment>
            <form type="submit">
                <h4>Write a message and chat away!</h4>
                <input  type="text" placeholder="Message..."></input>
                <button onClick={this.sendMessage}  type="submit">SEND</button>
            </form>

            <div className="messages">
                <h3>Messages</h3>
            </div>
        </React.Fragment>
    }
}

export default ClientSide