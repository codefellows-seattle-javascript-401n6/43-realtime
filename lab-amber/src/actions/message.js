export const MESSAGE_INFLATE = 'MESSAGE_INFLATE';

export function messageInflate(json) {
  return {type: MESSAGE_INFLATE, json}
}

