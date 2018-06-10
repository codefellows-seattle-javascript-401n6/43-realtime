import React from 'react';
import {connect} from 'react-redux';

import {
  messageInflate,
  messagePost
} from '../actions/message.js';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: sessionStorage.getItem('userInfo').socketId,
      userName: sessionStorage.getItem('userInfo').userName,
      message: ''
    }

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  handleMessageChange(event) {
    let newState = {
      message: event.target.value
    }
    this.setState(newState);
  }

  handleMessageSubmit(event) {
    event.preventDefault();
    console.log('message post func', messagePost);
    console.log('props', this.props)
    this.props.messagePost(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleMessageSubmit}>
        <input onChange={this.handleMessageChange} type="text" placeholder="leave a message"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    messageInflate: val => dispatch(messageInflate(val)),
    messagePost: val => dispatch(messagePost(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);