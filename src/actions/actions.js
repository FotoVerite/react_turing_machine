export function bootUp() {
  return {
    type: 'bootUp'
  };
}

export function send() {
  return {
    type: '👍'
  };
}

export function send_step(action) {
  return {
    type: action
  };
}

export function startNextStep() {
  return {
    type: 'START_NEXT_STEP'
  };
}

export function play() {
  return {
    type: 'play'
  };
}

export function stop() {
  return {
    type: 'stop'
  };
}