import React from 'react'
import io from 'socket.io-client'

class Chat extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messages: []
    }

    this.socket = io('http://localhost:3000')
  }


  componentDidMount = () => {
    this.socket.on('send-history', messageHistory => {
      console.log(messageHistory);
       this.setState({ messages: [...messageHistory] })
    })

    this.socket.on('receive-message', data => {
      console.log('message history from client', data);
      this.setState({ messages: [...data] })
    })

    this.socket.on('receive-history', messageHistory => {
      this.setState({ messages: [...messageHistory]})
    })
  }

  handleChange = e => {
    this.setState({ message: e.target.value })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.socket.emit('send-message', {
        message: this.state.message
      })

      this.setState({ message: '' })
    }
  }

  render() {
    return (
      <div className="card-footer">
        <div className="messages">
          {this.state.messages.map(message => {
            return (
              <div>{message.message}</div>
            )
          })}
        </div>
        <input type="text" onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} value={this.state.message}
          placeholder="Message" className="form-control"/>
      </div>
    );
  }
}

export default Chat;
