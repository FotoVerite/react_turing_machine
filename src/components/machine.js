// @flow weak

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

import OutputBinaryToText from './outputBinaryToText'
import ErrorsDisplay from './machine/ErrorsDisplay'
import powerButton from '../images/powerStandby.svg'
import stopImg from '../images/stop.svg'
import rightArrow from '../images/rightArrow.svg'
import * as actions from '../actions/actions';
import MachineLog from './machineLog'
import turingMachineMovements from '../turingMachineMovements'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";


const uuidv1 = require('uuid/v1');
let movements

const trackStyles = {
  top: '0em',
  position: 'absolute',
};

class Machine extends Component {

  uuid = uuidv1()
  state = {
    bootup: false,
    direction: 'forward',
    speed: 'stopped',
    steps: 0,
    cursor: 0,
    headPosition: 84,
    tapePosition: 0,
    headMoves: 10,
    output: '',
    uuid: this.uuid,
    update: true,
    animationSpeed: 100,
    movements: null,
    modal: false,
    configurationsTable: this.props.configurationsTable,
    configurationsCalled: {}
  }

  static defaultProps = {
    showPlay: 'true',
    showStepForward: 'true'
  };

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    this.setState(
      {
        myNodeList: document.getElementById(this.uuid)
        .getElementsByClassName("tape-square")
      }
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    if(window.innerWidth > 760) {
      this.setState({ headMoves: 10});
    }
    else {
      this.setState({ headMoves: 4});
    }
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
    this.stop();
  }

  configurationChange = () => {
    this.stop();
  }

  handleClick = () => {
    if(this.state.bootup === false){
      this.bootUp('normal');
      movements = new turingMachineMovements(this)
      setTimeout(movements.startConfiguration, this.state.animationSpeed, this.state.configurationsTable.start);
    }
    this.restart('normal');
  }

  handleChange = (data) => {
    this.setState({ update: true });
    this.props.replace_configuration(data);
  }

  handleStep = () => {
    if(this.state.bootup === false){
      this.bootUp('steps');
      movements = new turingMachineMovements(this)
      setTimeout(movements.startConfiguration, this.state.animationSpeed, this.state.configurationsTable.start);
    }
    this.restart('steps');
  }

  handleTextAreaKeydown = (event) => {
    let json
    try {
      json = JSON.parse(event.target.value)
      if(json === undefined) {
        throw 'do not update'
      }
    }
    catch {
      return;
    }
    this.setState({
      configurationsTable: json
    })
  }

  bootUp = (speed) => {
    this.setState({
        bootup: true,
        speed: speed,
        headPosition: this.state.headPosition + 107
    })
  }

  play = () => {
    this.setState({
        speed: 'normal'
    })
  }

  restart = (speed) => {
    if(!this.state.nextOperation) {
      return
    }
    this.setState({
        speed: speed
    },
      () => {
        movements.restartMachine(this, this.state.nextOperation[0], this.state.nextOperation[1])
      }
    )

  }

  reset = () => {
    this.setState({
      error: false,
      bootup: false,
      speed: 'stopped',
      headPosition: 84,
      tapePosition: 0,
    })
  }

  stop = () => {
    this.setState({
        speed: 'stopped'
    })
  }

  startNextStep = () => {
    this.setState({
      startNextStep: true,
      speed: 'steps'
    })
  }

  goForward = () => {
    this.setState({
      cursor: this.state.cursor + 1,
      startNextStep: false,
    })
    if(this.state.cursor >= this.state.headMoves){
      this.setState({
        tapePosition: this.state.tapePosition - 33
      })
    }
    else {
      this.setState({
        headPosition: this.state.headPosition + 33
      })
    }
  }

  goBackward = () => {
    this.setState({
      cursor: this.state.cursor - 1,
      startNextStep: false,
    })
    if(this.state.cursor >= this.state.headMoves){
      this.setState({
        tapePosition: this.state.tapePosition + 33
      })
    }
    else {
      this.setState({
        headPosition: this.state.headPosition - 33
      })
    }
  }

  render() {
    const { selectedOption } = this.state;
    let outputType =  <div>
              Output:
              Binary: {this.state.output || 0} <br />
              Integer: {parseInt(this.state.output, 2) || 0} <br />
              </div>

    switch(this.props.outputType) {
      case 'number':
        break;
      case 'text':
        outputType = <OutputBinaryToText output={this.state.output} />
        break;
      default:
    }
    const machineStyle = !this.props.showConfigurations ? {} : {width: '75%'}

    return (
      <div style={{position: 'relative'}}>
      {this.state.error &&
        <ErrorsDisplay error={this.state.error} reset={this.reset}/>
      }
      {this.props.showConfigurations &&
        <textarea
          style={{width: '25%', height:'680px', float:'left'}}
          onChange={this.handleTextAreaKeydown}
        >
          {JSON.stringify(this.state.configurationsTable, undefined, 4)}
        </textarea>
      }
      <div id={this.state.uuid} className='machine-container' style={machineStyle}>

        <div className="machine-base">

        </div>

        <div className="machine-head">
        </div>

          <Animate
            start={() => ({
              headPosition: 84
            })}

            update={() => ({
              headPosition: [this.state.headPosition],
              timing: { duration: this.state.animationSpeed, ease: easeExpOut },
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
                      height: '225px',
                      borderRadius: '0px 0px 4px 4px',
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
              tapePosition: [this.state.tapePosition],
              timing: { duration: this.state.animationSpeed, ease: easeExpOut },
            })}
          >
            {(state) => {
              const { tapePosition } = state;


              var tape = [];
              for (let i=0; i < this.state.headMoves; i++) {
                tape.push(<div className='blank-square tape-square' key={i} />)
              }


              return (

                <div className="tape"
                  style={{
                    overflow: 'hidden',
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
          <div style={{
              border: '1px solid black',
              margin: 'auto',
              width: 'calc(100% - 48px)',
              padding:20,
              top: 300,
              right: 100
            }}>
            {outputType}
            <label>Step:</label>
            <input
              style={{
                marginLeft: '1em',
                padding: '0.5em',
                borderRadius: 5,
                height: '2em',
                clear: "both"
              }}
              value={this.state.steps }
            />
            <br />
            <Button color="primary" size="sm" onClick={this.toggleModal}>
             Log
            </Button>
          </div>



        <div className="clearfix" ></div>

         <a
            onClick={this.state.speed === 'normal' ? this.stop : this.handleClick}
            className= { this.props.showPlay ? 'powerButton' : 'powerButton hidden'}
          >
          <img src={this.state.speed === 'normal' ? stopImg : powerButton} className="" alt="power-button" />
          </a>
          <a
            onClick={this.handleStep}
            className={ this.props.showStepForward ? 'powerButton' : 'powerButton hidden'}
          >
          <img src={rightArrow} className="" alt="power-button" />
          </a>



        <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Log for {this.state.configurationsTable.name} </ModalHeader>
          <ModalBody>
            <MachineLog configurationsCalled={this.state.configurationsCalled} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>


      </div>
      </div>
    );
  }
}

export default Machine;