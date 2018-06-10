import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>
      <h3>{this.props.info.userName}</h3>
      <small>{this.props.info.timestamp}</small>
      <p>{this.props.info.message}</p>
    </li>
  }
}

module.exports = MessageItem;