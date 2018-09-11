// @flow weak

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { connect } from 'react-redux';
import powerButton from '../images/powerStandby.svg'
import * as actions from '../actions/actions';

const trackStyles = {
  top: '14em',
  position: 'absolute',
};

class HEAD extends Component {
  state = {
    index: 0,
    x: 64,
    myNodeList: document.getElementsByClassName("tape-square"),
    speed: 200,
    tapePosition: 0
  }

  handleClick = () => {
    this.setState({ x: this.state.x + 134 });
    setTimeout(this['startConfiguration'], this.state.speed, this.props.head.start);
  }

  startConfiguration = (emoji) => {
    const configuration = this.props.head.configurations.operations[emoji];
    const cbArray = Object.assign([], configuration.steps)
    var step = cbArray.shift();
    setTimeout(this[step],  this.state.speed, cbArray, configuration.callback); 
  }

  '👍' = (cbArray, cb) => {
    const self = this.state;
    if(self.index > 10){
      this.setState({ tapePosition: self.tapePosition - 34 });
    }
    else {
      this.setState({ x: self.x + 34 });
    }
    this.setState({ index: self.index + 1 });

    if(self.myNodeList[self.index + 1] == null) {
      var div = document.createElement("div")
      div.classList.add("tape-square");
      this.state.myNodeList[0].parentNode.appendChild(div)
    }

    this.props.send_step('👍');
    if(cbArray.length > 0) {
      const step = cbArray.shift();
      setTimeout(this[step],  self.speed, cbArray, cb);
    }
    else {
      setTimeout(this['startConfiguration'],self.speed, cb);
    }
  }

  '🙋' = (cbArray, cb) => {
    console.log(this.state.myNodeList)
    console.log(this.state.index)
    this.state.myNodeList[this.state.index].innerHTML  = '1';
    this.props.send_step('🙋');
    if(cbArray.length > 0) {
      const step = cbArray.shift();
      setTimeout(this[step], this.state.speed, cbArray, cb);
    }
    else {
      setTimeout(this['startConfiguration'], this.state.speed, cb);
    }
  }

  render() {

    return (
      <div>
        <button
          onClick={this.handleClick}
          className='powerButton'
        >
        <img src={powerButton} className="" alt="power-button" />
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

        <Animate
          start={() => ({
            tapePosition: 0,
          })}

          update={() => ({
            tapePosition: [this.state.tapePosition],
            timing: { duration: 1100, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { tapePosition } = state;
          {
            var tape = [];
            for (let i=0; i < 10; i++) {
              tape.push(<div className='blank-square tape-square' key={i} />)
            }
          }

            return (

              <div className="tape"
                style={{
                  width: `calc(100% - ${tapePosition}px)`,
                  WebkitTransform: `translate3d(${tapePosition}px, 0, 0)`,
                  transform: `translate3d(${tapePosition}px, 0, 0)`
                }}
              >
                <div className="blank-tape">
                </div>
                <div className="swah tape-square">
                  🍔🍔
                </div>

               
                {tape}
              </div>
            );
          }}
        </Animate>

      <p>Output: 
        Binary: {this.props.machine.output} <br />
        Integer: {parseInt(this.props.machine.output, 2)} <br />
      </p>
      </div>
    );
  }
}
const stateToProps = function(state) {
  return Object.assign({}, state);
};

export default connect(stateToProps, actions)(HEAD);