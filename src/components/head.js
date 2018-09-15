// @flow weak

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { connect } from 'react-redux';
import Select from 'react-select';

import powerButton from '../images/powerStandby.svg'
import stopImg from '../images/stop.svg'
import rightArrow from '../images/rightArrow.svg'

import basicOperations from '../basicOperations';
import configurationsOptions from '../configurations'

import * as actions from '../actions/actions';

const trackStyles = {
  top: '14em',
  position: 'absolute',
};

class HEAD extends Component {
  state = {
    update: true,
    headPosition: 64,
    myNodeList: document.getElementsByClassName("tape-square"),
    speed: 200,
    tapePosition: 0
  }


  configurationSelectOptions = () => {
    console.log(basicOperations)
    var operations = [];
    for (var i = basicOperations.length - 1; i >= 0; i--) {
      const operation = basicOperations[i]
      operations.push({ value: Object.keys(operation), label: `${Object.keys(operation)}:${operation[Object.keys(operation)].description}`})
    }
    console.log('asd')

    return operations
  }

  basicOperationsDescription = () => {
    var operations = [];
    for (var i = configurationsOptions.length - 1; i >= 0; i--) {
      const operation = configurationsOptions[i]
      operations.push(<li>{Object.keys(operation)}: {operation[Object.keys(operation)].description}</li>)
    }
    return operations

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
      setTimeout(this['startConfiguration'], this.state.speed, this.props.head.start);
    }
    this.props.play();
  }

  handleStep = () => {
    if(this.props.machine.bootup === false){
      this.props.bootUp();
      setTimeout(this['startConfiguration'], this.state.speed, this.props.head.start);
    }
    this.setState({ update: true });
    this.props.startNextStep();
  }

  startConfiguration = (emoji) => {
    const configuration = this.props.head.configurations.operations[emoji];
    const cbArray = Object.assign([], configuration.steps)
    var step = cbArray.shift();
    setTimeout(this[step],  this.state.speed, cbArray, configuration.callback); 
  }

  '👍' = (stepArray, cb) => {
    const self = this.state;
    if(self.myNodeList[this.props.machine.cursor + 1] == null) {
      var div = document.createElement("div")
      div.classList.add("tape-square");
      this.state.myNodeList[0].parentNode.appendChild(div)
    }
    this.props.send_step('👍');
    this.nextStep(stepArray, cb)
  }

  '🙋' = (stepArray, cb) => {
    this.props.send_step('🙋');
    var node= this.state.myNodeList[this.props.machine.cursor];
    node.innerHTML  = '1';
    this.nextStep(stepArray, cb)
  }

  nextStep = (stepArray, cb) => {
    this.setState({ update: true });
    if(this.props.machine.speed === 'steps') {
      if(this.props.machine.startNextStep) {
        //continue
      } 
      else {
        setTimeout(this.nextStep, 100, stepArray, cb);
        return;
      }     
    }
    if(this.props.machine.speed !== 'stopped') {
      //continue
    } 
    else {
      setTimeout(this.nextStep, 100, stepArray, cb);
      return;
    }     
    if(stepArray.length > 0) {
      const step = stepArray.shift();
      setTimeout(this[step], this.state.speed, stepArray, cb);
    }
    else {
      setTimeout(this['startConfiguration'], this.state.speed, cb);
    }
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
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
        <Animate
          start={() => ({
            headPosition: 84
          })}

          update={() => ({
            headPosition: [this.props.machine.headPosition],
            timing: { duration: 1100, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { headPosition } = state;

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

      <Select
        value={selectedOption}
        onChange={this.configurationSelectOptions}
        options={[]}
      />

      <p>Output: 
        Binary: {this.props.machine.output} <br />
        Integer: {parseInt(this.props.machine.output, 2)} <br />
      </p>
      <ul className='basicOperations'>
        {this.basicOperationsDescription()}
      </ul>

      </div>
    );
  }
}
const stateToProps = function(state) {
  return Object.assign({}, state);
};

export default connect(stateToProps, actions)(HEAD);