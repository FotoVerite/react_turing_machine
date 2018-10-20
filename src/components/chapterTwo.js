
import React, { PureComponent } from 'react';
import DisplayTape from './displayTape';
import Machine from './machine'
import ReactJson from 'react-json-view'
import uuidv1 from 'uuid/v1'

class chapterTwo extends PureComponent {

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
        <Machine showPlay={false} configurationsTable={{
          start: '🌂',
          name: 'Print .1_',
          description: "Print .1111111_ forever.",
          configurations: {
            '🌂': {
              name: "Print 1 and move right twice",
              steps: ['🖨1', '➡', '➡'],
              callback: '🌂'
            }
          }
        }}/>
      </div>


      <p>
          Lets now look at it in motion.
      </p>

      <div style={{border: '2px solid black', paddingBottom: 40}}>
        <Machine showStepForward={false} configurationsTable={{
          start: '🌂',
          name: 'Print .1_',
          description: "Print .1111111_ forever.",
          configurations: {
            '🌂': {
              name: "Print 1 and move right twice",
              steps: ['🖨1', '➡', '➡'],
              callback: '🌂'
            }
          }
        }}/>
      </div>

      <p>
        So how does this actually work?
        Turing only laid out the protype for how a computational machine should actually function. 
        One should consider anything that I talk about on the inner working of this machine as a Turing emulation. 
        One cannot actually build a turing machine. There is limited memory. It cannot print infinitly. It's only a simulacra. 
      </p>

      <p> With that being said. The m-configurations for this machine are very simple. </p>


      <ReactJson src={
        {
          start: '1⃣',
          name: 'Print .1_',
          description: "Print .1111111_ forever.",
          configurations: {
            '1⃣': {
              name: "Print 1 and move right twice",
              steps: ['🖨1', '➡', '➡'],
              callback: '1⃣'
            }
          }
        }
      }
      name={false}
      displayDataTypes={false}
      onEdit={false}
      />

      <p>
        Both the name field and the description field are optional fields that give context to the m-configurations. 
      </p>
      <p>
        Start states the name of the m-configurations the machine should first look at.
        Now there were a number of ways this could actually work. 
        It could be hard coded to use one called q1. It could use the first m-configuration in the json hash. I have decided to name my configuration via emoji. 
        This is not necessary the machine will work as well with declaritive nameing like 'print-1' or {uuidv1()}&nbsp;
        But I chose this way as the 
        best way to allow easy configuration and writing of this machine. It can be argued that this is an incorrect implimentation because of this. 
        A technical turing machine would only have configurations in the vein of q1..q2..q3 ectra. But I feel that the twist doesn't remove the core of
        what a turing machine does and celebrates use of gothic lettering at the same time. 
      </p>

      <p>next field is configurations which houses an object. Each key of this object is considered by the emulator to be a configuration. 
      Here the configuration is called '1⃣'
      This configuration has an optional name field. This is necessary due to how complicated working with 
      a turing machine can become. Have twenty states and it you need all the context you can get. </p>

      <p>
       The steps field houses an array which can be of any length. Each string indicates an operation for the machine to do. 
       '➡' is for going right, '⬅' is for going left, and "🖨(symbol)" will print an arbitrary symbol.  
      </p>

      <p>
        Finally callback is the m-configuration that will be called once all steps are complete. 
      </p>

       <p>
        <a href={`${process.env.PUBLIC_URL}/chapter-3/`}>The Human Connection</a>
        </p>
      </div>
    );
  }
}



export default chapterTwo

