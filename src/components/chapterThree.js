
import React, { PureComponent } from 'react';
import DisplayTape from './displayTape';
import Machine from './machine'
import ReactJson from 'react-json-view'
import uuidv1 from 'uuid/v1'
import Popover from './Popover';

class chapterThree extends PureComponent {

  componentWillMount() {
    document.title = 'Turing First Machine'
  }

  render() {
    return (
      <div className="container">
        <h1 className={'gothic block-quote center'}>Turing's First Machine</h1>

        <div className={'block-quote'}>
         <div className='paragraph'> A machine can be constructed to compute the sequence 010101....
         The machine is to have the four m-configurations
         <span className='gothic'>"b"</span> ,
         <span className='gothic'>"c"</span> ,
         <span className='gothic'>"k"</span> ,
         <span className='gothic'>"e"</span>
        <Popover id={1} message={
          "Just.... why Turing did you want to make these symbols so hard to decipher. " +
          "Truth, I would never know that third m-configuration is a k. It makes no sense. Why k and not d." +
          "k don't even look like k's they look like a weird f."
        }/>

         and is capable of printing " 0 " and " 1 ". The behaviour of the machine is
         described in the following table in which " R " means "the machine moves
         so that it scans the square immediately on the right of the one it was
         scanning previously". Similarly for "L". "E" means "the scanned
         symbol is erased" and "P " stands for "prints". This table (and all
         succeeding tables of the same kind) is to be understood to mean that for
         a configuration described in the first two columns the operations in the
         third column are carried out successively, and the machine then goes over
         into the m-configuration described in the last column. When the second
         column is left blank, it is understood that the behaviour of the third and
         fourth columns applies for any symbol and for no symbol. The machine
         starts in the m-configuration <span className='gothic'>"b"</span> with a blank tape.</div>
         <hr />
          <small> Section 3: Paragraph 1 </small>
        </div>

      <p>Most of what Turing says we have already gone over.
      You will notice that he simply states that it starts with b m-configuration
      without any real configuration in the table itself. It's simply convention.</p>


      <table class="list table table-striped">
        <thead>
          <tr>
            <th>m-config.</th>
            <th>symbols</th>
            <th>operations</th>
            <th>final m-configuration
             <Popover id={2} message={
                "Final m-configuration is complete misnomer since there is nothing final about it. " +
                "It's just the next configuration called. It's a callback."
              }/>
            </th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>b</td>
            <td>NONE</td>
            <td>🖨0, ➡</td>
            <td>c</td>
          </tr>
          <tr>
            <td>c</td>
            <td>NONE</td>
            <td>➡</td>
            <td>e</td>
          </tr>
          <tr>
            <td>e</td>
            <td>NONE</td>
            <td>🖨1, ➡</td>
            <td>k</td>
          </tr>
          <tr>
            <td>k</td>
            <td>NONE</td>
            <td>➡</td>
            <td>b</td>
          </tr>
        </tbody>
      </table>

      <p>
        Pretty simple when you break it down. You can see how each m configuration leads to the next configuration and then circling back to the start with
        m-configuration b.
      </p>

      <p> We can translate this to a configuration that works with my Turing Emulator as show below.</p>

      <ReactJson src={
        {
          start: 'b',
          name: 'Print .101_',
          description: "Print .101_ repeating.",
          configurations: {
            'b': {
              name: "Print 0 and go right",
              steps: ['🖨0', '➡'],
              callback: 'c'
            },
            'c': {
              name: "Go Right",
              steps: ['➡'],
              callback: 'k'
            },
            'k': {
              name: "Print 1 and go right",
              steps: ['🖨1', '➡'],
              callback: 'e'
            },
            'e': {
              name: "Go Right",
              steps: ['➡'],
              callback: 'b'
            }
          }
        }
      }
      name={false}
      displayDataTypes={false}
      onEdit={false}
      />

      <br />

      <div style={{border: '2px solid black', paddingBottom: 40}}>
        <Machine showPlay={true} showStepForward={false} configurationsTable={{
          start: 'b',
          name: 'Print .101_',
          description: "Print .101_ repeating.",
          configurations: {
            'b': {
              name: "Print 0 and go right",
              steps: ['🖨0', '➡'],
              callback: 'c'
            },
            'c': {
              name: "Go Right",
              steps: ['➡'],
              callback: 'k'
            },
            'k': {
              name: "Print 1 and go right",
              steps: ['🖨1', '➡'],
              callback: 'e'
            },
            'e': {
              name: "Go Right",
              steps: ['➡'],
              callback: 'b'
            }
          }
        }
      }/>
      </div>
      <br />
      <div className='paragraph'>
        Of course we can make this even simpler. One m-configuration in fact.
        So, what's the point of interactivity if you can't interact with it.
        Here's a Turing Machine with the skeleton m-configuration. Play around and see if you can have it output using only one configuration.
      </div>

       <div style={{border: '2px solid black', paddingBottom: 40, marginBottom:60}}>
        <Machine showPlay={true} showStepForward={false} showConfigurations={true} configurationsTable={{
          start: 'b',
          name: 'Print .101_',
          description: "Print .101_ repeating.",
          configurations: {
            'b': {
              '🕳': {
                steps: [],
                callback: 'b'
              },
              '0': {
                steps: [],
                callback: 'b'

              },
              '1': {
                steps: [],
                callback: 'b'
              }
             }
          }
        }
      }/>
      </div>
      </div>
    );
  }
}



export default chapterThree

