import React, { PureComponent } from 'react';
import Machine from './machine'
import configuration from '../mConfigurations/alanTuring'
const trackStyles = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 200,
  background: 'black',
  border: '1px solid green',
  color: 'white',
  fontFamily: 'MaxterBoardSt',
  fontSize: 56
};

class Intro extends PureComponent {

  render() {
    return (
      <div className="container">
        <h1 className={'gothic block-quote center'}>On computable numbers with an application to the entscheidungsproblem <br /> OR: WHAT THE FUCK ACTUALLY IS A TURING MACHINE</h1>

        <p>What is a turing machine is a #TODO chapter course to explain in detail Turing's Seminal Paper 
        "On Computable Numbers with an Application to the Entscheidungsproblem" in an interactive, conversational and easy to follow format.
        </p>
        <p>        
          This entire site is indebted to: <br /> 
          <a href='https://www.amazon.com/Annotated-Turing-Through-Historic-Computability/dp/0470229055'>
          "The Annotated Turing: A Guided Tour Through Alan Turing's Historic Paper on Computability and the Turing Machine"
          </a> 
          <br /> by Charles Petzold. 
        </p>
        <p className={"emphasized"}>Well as easy as possible given the complexitity and general leaps in logic given to the source material.</p>

        <div style={{border: '2px solid black', paddingBottom: 40}}>
        <Machine  configurationsTable={configuration} outputType={'text'}/>
      </div>
        
        <ul className="list-group mt-4 mb-4">
          <li className="list-group-item  border-secondary"><a href={`${process.env.PUBLIC_URL}/chapter-1/`}>Why this site?</a></li>
          <li className="list-group-item  border-secondary"><a href={`${process.env.PUBLIC_URL}/chapter-1/`}>A simple Turing Machine</a></li>
          <li className="list-group-item  border-secondary"><a href={`${process.env.PUBLIC_URL}/chapter-1/`}>A complex Turing Machine</a></li>
        </ul>
      </div>
    );
  }
}

export default Intro