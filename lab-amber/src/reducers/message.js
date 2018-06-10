import socket from '../socket-context.js';

import {
  MESSAGE_INFLATE,
  MESSAGE_POST
} from '../actions/message.js';

const initialState = {
  messages: [],
};

export default function messageReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  let newState = {};
  switch(action.type) {
    case MESSAGE_INFLATE:
      return Object.assign(newState, state, {messages: action.json});
    case MESSAGE_POST:
      socket.emit('message-post', action.json);
      return state;
    default: return state;
  }
}
