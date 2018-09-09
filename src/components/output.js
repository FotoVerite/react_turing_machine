// @flow weak

import React, { PureComponent } from 'react';
import Typing from 'react-typing-animation';
import { connect } from 'react-redux';

const trackStyles = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 200,
  background: 'black',
  border: '1px solid green',
  position: 'absolute',
  color: 'white',
  fontFamily: 'MaxterBoardSt',
  fontSize: 56
};

class Output extends PureComponent {

  render() {
    return (
      <div style={trackStyles}>
        <Typing>
          <span>Welcome to the Turing Machine.</span>
        </Typing>
      </div>
    );
  }
}

const stateToProps = function(state) {
  return {state:  Object.assign({}, state)};
};

export default connect(stateToProps, null)(Output);