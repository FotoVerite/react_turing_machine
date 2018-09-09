// @flow weak

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

const trackStyles = {
  top: '14em',
  position: 'absolute',
};

class HEAD extends Component {
  state = {
    index: 0,
    x: 64,
    myNodeList: document.getElementsByClassName("tape-square")
  }

  handleClick = () => {
    this.setState({ x: this.state.x + 134 });
    setTimeout(this['startConfiguration'], 1100, this.props.head.start);
  }

  startConfiguration = (emoji) => {
    const configuration = this.props.head.configurations.operations[emoji];
    const cbArray = Object.assign([], configuration.steps)
    var step = cbArray.shift();
    setTimeout(this[step], 100, cbArray, configuration.callback); 
  }

  '👍' = (cbArray, cb) => {
    console.log('move')
    this.setState({ x: this.state.x + 34 });
    this.setState({ index: this.state.index + 1 });
    if(cbArray.length > 0) {
      const step = cbArray.shift();
      setTimeout(this[step], 1100, cbArray, cb);
    }
    else {
      setTimeout(this['startConfiguration'], 1100, cb);
    }
  }

  '🙋' = (cbArray, cb) => {
    this.state.myNodeList[this.state.index].innerHTML  = '1';
    if(cbArray.length > 0) {
      const step = cbArray.shift();
      setTimeout(this[step], 1100, cbArray, cb);
    }
    else {
      setTimeout(this['startConfiguration'], 1100, cb);
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Toggle
        </button>
        <Animate
          start={() => ({
            x: '82',
          })}

          update={() => ({
            x: [this.state.x],
            timing: { duration: 1100, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state;

            return (
              <div style={trackStyles}>
                <div
                  style={{
                    position: 'absolute',
                    width: '2em',
                    height: '14em',
                    borderRadius: 4,
                    opacity: 0.7,
                    backgroundColor: '#00cf77',
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                  }}
                />
              </div>
            );
          }}
        </Animate>
      </div>
    );
  }
}
const stateToProps = function(state) {
  return Object.assign({}, state);
};

export default connect(stateToProps, actions)(HEAD);