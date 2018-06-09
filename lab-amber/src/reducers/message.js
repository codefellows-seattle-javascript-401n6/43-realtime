import {
  MESSAGE_INFLATE
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
    default: return state;
  }
}
