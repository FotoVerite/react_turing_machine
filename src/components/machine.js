// @flow weak

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { connect } from 'react-redux';

import powerButton from '../images/powerStandby.svg'
import stopImg from '../images/stop.svg'
import rightArrow from '../images/rightArrow.svg'
import * as actions from '../actions/actions';
import turingMachineMovements from '../turingMachineMovements'
const uuidv1 = require('uuid/v1');

const trackStyles = {
  top: '0em',
  position: 'absolute',
};

class Machine extends Component {

  uuid = uuidv1()
  state = {
    uuid: this.uuid,
    update: true,
    speed: 100,
    movements: null
  }

  componentDidMount() {
    this.setState(
      {
        myNodeList: document.getElementById(this.uuid)
        .getElementsByClassName("tape-square")
      }
    )
  }

  stop = () => {
    this.props.stop();
  }

  configurationChange = () => {
    this.props.stop();
  }

  handleClick = () => {
    if(this.props.machine.bootup === false){
      this.props.bootUp();
      this.setState({ update: true });
      this.setState({ movements: turingMachineMovements(this) })
      console.log(turingMachineMovements(this))
      setTimeout(turingMachineMovements(this).startConfiguration, this.state.speed, this.props.configurationsTable.start);
    }
    this.props.play();
  }

  handleChange = (data) => {
    this.setState({ update: true });
    this.props.replace_configuration(data);
  }

  handleStep = () => {
    if(this.props.machine.bootup === false){
      this.props.bootUp();
      setTimeout(this['startConfiguration'], this.state.speed, this.props.configurationsTable.start);
    }
    this.setState({ update: true });
    this.props.startNextStep();
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div id={this.state.uuid} className='machine-container'>

        <div className="machine-base">

        </div>

        <div className="machine-head">
        </div>

          <Animate
            start={() => ({
              headPosition: 84
            })}

            update={() => ({
              headPosition: [this.props.machine.headPosition],
              timing: { duration: this.state.speed, ease: easeExpOut },
            })}
          >
            {(state) => {
              const { headPosition } = state;

              return (
                <div style={trackStyles}>
                  <div
                    style={{
                      position: 'absolute',
                      zIndex: 5,
                      width: '2em',
                      height: '34em',
                      borderRadius: 4,
                      opacity: 0.7,
                      backgroundColor: '#000000',
                      WebkitTransform: `translate3d(${headPosition}px, 0, 0)`,
                      transform: `translate3d(${headPosition}px, 0, 0)`,
                    }}
                  />
                </div>
              );
            }}
          </Animate>

          <Animate
            start={() => ({
              tapePosition: 0
            })}

            update={() => ({
              tapePosition: [this.props.machine.tapePosition],
              timing: { duration: this.state.speed, ease: easeExpOut },
            })}
          >
            {(state) => {
              const { tapePosition } = state;


              var tape = [];
              for (let i=0; i < 10; i++) {
                tape.push(<div className='blank-square tape-square' key={i} />)
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

                  {tape}
                </div>
              );
            }}
          </Animate>

          <input
            style={{
              marginLeft: '1em',
              padding: '0.5em',
              borderRadius: 5,
              height: '2em',
              float: 'left',
              clear: "both"
            }}
            value={this.props.machine.steps.length }
          />
        <div className="clearfix" ></div>

         <button
            onClick={this.props.machine.speed === 'normal' ? this.stop : this.handleClick}
            className='powerButton'
          >
          <img src={this.props.machine.speed === 'normal' ? stopImg : powerButton} className="" alt="power-button" />
          </button>
          <button
            onClick={this.handleStep}
            className='powerButton'
          >
          <img src={rightArrow} className="" alt="power-button" />
          </button>

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

export default connect(stateToProps, actions)(Machine);