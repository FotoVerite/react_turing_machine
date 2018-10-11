
import React, { PureComponent } from 'react';
import DisplayTape from './displayTape';
import Machine from './machine'

class chapterOne extends PureComponent {

  componentWillMount() {
    document.title = 'The Very Most Simple Turing Machine'
  }

  render() {
    return (
      <div className="container">
        <h1 className={'gothic block-quote center'}>The Very Most Simple Turing Machine.</h1>

        <p>
          So let us look at a simple turing machine. One with only one m-configuration and two operations. 
          This computable machine prints 1 moves two to the right and calls the same m-configuration/q1. 
          This m-configuration only has one movement so the scanned symbole can be ignored. 
        </p>
        <p className={"emphasized"}>
          I really have no idea why turing didn't write m1,m2,m3...mn. Labeling them q1 vs m-configuration is just confusing to everyone. 
        </p>

      <div style={{border: '2px solid black', paddingBottom: 40}}>
      <Machine showPlay={true} configurationsTable={{
        start: '🌂',
        configurations: {
          name: '🌂',
          description: "Print .1111111_ forever.",
          operations: {
            '🌂': {
              name: "Print 1 and move right twice",
              steps: ['🖨1', '👍', '👍'],
              callback: '🌂'
            }
          }
        }
      }}/></div>


      <p>
          Lets now look at it in motion.
      </p>

      
      </div>
    );
  }
}



export default chapterOne

