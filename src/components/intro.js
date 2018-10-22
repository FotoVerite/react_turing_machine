import React, { PureComponent } from 'react';
import Machine from './machine'
import configuration from '../mConfigurations/alanTuring'
import ReactTooltip from 'react-tooltip'

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
          <button data-tip data-event='click' data-for='footnote1' class="footnote" id="fnref:1" data-footnote-number="1" data-footnote-identifier="1" alt="See Footnote 1" rel="footnote"> 
              <svg class="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg> 
              <svg class="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg> 
              <svg class="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg> 
              </button>
          <ReactTooltip class='popover' id='footnote1' type='error' effect='solid'  globalEventOff='click'>
            <ol>
            <li>Well as <em>easy</em> as possible given the complexitity and general leaps in logic given to the source material.</li>
          </ol>
          <p></p>
          </ReactTooltip>
        </p>
        <p>        
          This entire site is indebted to: <br /> 
          <a href='https://www.amazon.com/Annotated-Turing-Through-Historic-Computability/dp/0470229055' style={{fontSize:16}}>
          "The Annotated Turing: A Guided Tour Through Alan Turing's Historic Paper on Computability and the Turing Machine"
          </a> 
          <br /> <p style={{fontSize:16}}>by Charles Petzold. </p>
        </p>

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