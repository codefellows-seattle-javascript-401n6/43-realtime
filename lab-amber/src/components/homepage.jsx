import React from 'react';
import {connect} from 'react-redux';

import socket from '../socket-context.js';

import MessageList from './message-list.jsx';
import MessageForm from './message-form.jsx';

import {
  messageInflate,
  messagePost
} from '../actions/message.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    socket.on('message-info',  messages => {
      console.log('messages in the front end connection', messages);
      this.props.messageInflate(messages);
    });
    
    socket.on('message-refresh', (messages) => {
      this.props.messageInflate(messages);
    });
  }

  render() {
    return <React.Fragment>
      <p>Hello World!</p>
      <MessageForm />
      <MessageList />
    </React.Fragment>
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    messageInflate: val => dispatch(messageInflate(val)),
    messagePost: val => dispatch(messagePost(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);