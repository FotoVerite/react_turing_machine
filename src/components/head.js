// @flow weak

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { connect } from 'react-redux';
import Select from 'react-select';
import JSONInput from 'react-json-editor-ajrm';

import powerButton from '../images/powerStandby.svg'
import stopImg from '../images/stop.svg'
import rightArrow from '../images/rightArrow.svg'

import basicOperations from '../basicOperations';
import configurationsOptions from '../configurations'

import * as actions from '../actions/actions';

const trackStyles = {
  top: '0em',
  position: 'absolute',
};

class HEAD extends Component {
  state = {
    update: true,
    myNodeList: document.getElementsByClassName("tape-square"),
    speed: 100,
  }


  configurationSelectOptions = () => {
    var operations = [];
    for (var key in configurationsOptions) {
      operations.push({ value: key, label: `${key}:${configurationsOptions[key].description}`})
    }
    return operations
  }

  basicOperationsDescription = () => {
    var operations = [];
    for (var i = basicOperations.length - 1; i >= 0; i--) {
      const operation = basicOperations[i]
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
      setTimeout(this['startConfiguration'], this.state.speed, this.props.configurationsTable.start);
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

  startConfiguration = (emoji) => {
    const configuration = this.props.configurationsTable.configurations.operations[emoji];
    console.log('Started configuration ' + emoji + " " + configuration.name )

    var stepConfiguration;
    if(configuration.steps) {
      stepConfiguration = this.findStepsAndCallback(configuration);
    }
    else {
      const symbol = this.state.myNodeList[this.props.machine.cursor].innerText;
      if(symbol !=='') {
        if(configuration[symbol]) {
          stepConfiguration = this.findStepsAndCallback(configuration, symbol);
        }
        else {
          stepConfiguration = this.findStepsAndCallback(configuration, '🔣');
        }
      }
      else{
        if(configuration['🕳']) {
          stepConfiguration = this.findStepsAndCallback(configuration, '🕳');
        }
        else if(configuration['0']) {
          stepConfiguration = this.findStepsAndCallback(configuration, '0');
        }
      }
    }
    console.log('Next configuration will be ' + stepConfiguration.cb );

    if(stepConfiguration.step === undefined){
      return setTimeout(this['startConfiguration'], this.state.speed, stepConfiguration.cb);

    }
    if(stepConfiguration.step.match('🖨')){
      const nextStep = [...stepConfiguration.step]
      return setTimeout(this[nextStep[0]], this.state.speed, nextStep[1], stepConfiguration.stepArray, stepConfiguration.cb);
    }
    else {
      return setTimeout(this[stepConfiguration.step], this.state.speed, stepConfiguration.stepArray, stepConfiguration.cb);
    }
  }

  findStepsAndCallback = (configuration, emoji) => {
    if(emoji !== undefined) {
     configuration = configuration[emoji];
    }
    const stepArray = Object.assign([], configuration.steps)
    const step = stepArray.shift();
    return { stepArray: stepArray, step: step, cb: configuration.callback };
  }

  //steps

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

  '👎' = (stepArray, cb) => {
    const self = this.state;
    this.props.send_step('👎');
    this.nextStep(stepArray, cb)
  }


  '🖨' = (symbol, stepArray, cb) => {
    this.props.send_step('🖨', symbol);
    var node= this.state.myNodeList[this.props.machine.cursor];
    node.innerHTML  = symbol;
    this.nextStep(stepArray, cb)
  }

  '🙋' = (stepArray, cb) => {
    this.props.send_step('🙋');
    var node= this.state.myNodeList[this.props.machine.cursor];
    node.innerHTML  = '1';
    this.nextStep(stepArray, cb)
  }

  '⭕' = (stepArray, cb) => {
    this.props.send_step('⭕');
    var node= this.state.myNodeList[this.props.machine.cursor];
    node.innerHTML  = '0';
    this.nextStep(stepArray, cb)
  }

  '🕳' = (stepArray, cb) => {
    this.props.send_step('🕳');
    var node = this.state.myNodeList[this.props.machine.cursor];
    node.innerHTML  = '';
    this.nextStep(stepArray, cb)
  }

  nextStep = (stepArray, cb) => {
    this.setState({ update: true });
    if(this.props.machine.speed === 'steps') {
      if(this.props.machine.startNextStep) {
        //continue
      } 
      else {
        setTimeout(this.nextStep, this.state.speed, stepArray, cb);
        return;
      }     
    }
    if(this.props.machine.speed !== 'stopped') {
      //continue
    } 
    else {
      setTimeout(this.nextStep, this.state.speed, stepArray, cb);
      return;
    }     
    if(stepArray.length > 0) {
      const step = stepArray.shift();
      if(step.match('🖨')){
        const nextStep = [...step]
        setTimeout(this[nextStep[0]], this.state.speed, nextStep[1], stepArray, cb);
      }
      else {
        setTimeout(this[step], this.state.speed, stepArray, cb);
      }
    }
    else {
      setTimeout(this['startConfiguration'], this.state.speed, cb);
    }
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <textarea 
          value= {JSON.stringify(this.props.configurationsTable)}
          style= {{
            height: 1000, 
            width: 300
          }}
        />

        <div style={{
          float: 'right', 
          width: '65%'
        }}>
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
         <div style={{ 
          marginTop: '2em',
          float: 'left',
          width: '25em',
          clear: "both",
          marginLeft: '1em'
          }}>

          <Select
            styles={{
              width: 20
            }}
            value={selectedOption}
            onChange={this.handleChange}
            options={this.configurationSelectOptions()}
          />
        </div>
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
        <ul className='basicOperations'>
          {this.basicOperationsDescription()}
        </ul>
      </div>
      </div>
    );
  }
}
const stateToProps = function(state) {
  return Object.assign({}, state);
};

export default connect(stateToProps, actions)(HEAD);