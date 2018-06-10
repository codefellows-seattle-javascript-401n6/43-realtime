import React from 'react';
import {connect} from 'react-redux';
import MessageItem from './message-item.jsx';
import {
  messageInflate,
} from '../actions/message.js';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.displayMessages = this.displayMessages.bind(this);
  }

  displayMessages() {
    console.log('1. message list state', this.props.messages);
    if (this.props.messages) {
      return this.props.messages.messages.map(message => {
        console.log('displaying messages in message list', message);
        return <MessageItem key={message._id} info={message}/>
      });
    }
  }

  render() {
    return <React.Fragment>
      <h2>Latest Messages:</h2>
      <ul>{this.displayMessages()}</ul>
      </React.Fragment>
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    messageInflate: val => dispatch(messageInflate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);