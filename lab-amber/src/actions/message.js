export const MESSAGE_INFLATE = 'MESSAGE_INFLATE';
export const MESSAGE_POST = 'MESSAGE_POST';

export function messageInflate(json) {
  return {type: MESSAGE_INFLATE, json}
}

export function messagePost(json) {
  return {type: MESSAGE_POST, json}
}
