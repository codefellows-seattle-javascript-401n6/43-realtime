import React from 'react';
// import {connect} from 'react-redux';
// import {
  
// } from '../actions/message.js';

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

// const mapStateToProps = state => ({
//   messages: state.messages
// });

// const mapDispatchToProps = (dispatch, getState) => {
//   // return {
    
//   // }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);

module.exports = MessageItem;