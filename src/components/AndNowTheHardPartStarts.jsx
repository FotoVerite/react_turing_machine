
import React, { PureComponent } from 'react';
import DisplayTape from './displayTape';
import Machine from './machine'
import ReactJson from 'react-json-view'
import uuidv1 from 'uuid/v1'
import Popover from './Popover';

class AndNowTheHardPartStarts extends PureComponent {

  componentWillMount() {
    document.title = 'Turing\'s "More Complicated Machine"'
  }

  render() {
    return (
      <div className="container">
        <h1 className={'gothic block-quote center'}>Turing's "More Complicated Machine"</h1>

        <div className={'block-quote'}>
         <div className='paragraph'> As a slightly more difficult example we can construct a machine to
compute the sequence 001011011101111011111 The machine is to
be capable of five m-configurations, viz.&nbsp; 
         <span className='gothic'>"o"</span> ,
         <span className='gothic'>"q"</span> ,
         <span className='gothic'>"p"</span> ,
         <span className='gothic'>"f"</span> ,
         <span className='gothic'>"b"</span> ,
        and of printing 
        &nbsp;<span className='gothic'>"e"</span> ,
        <span className='gothic'>"x"</span> ,
        "0" , "1". The first three symbols on the tape will be
        "<span className='gothic'>ee</span>0";
        the other figures follow on alternate squares. On the intermediate
squares we never print anything but          
<span className='gothic'>"x"</span> ,
. These letters serve to
" keep the place " for us and are erased when we have finished with them.
We also arrange that in the sequence of figures on alternate squares there
shall be no blanks.
         <hr />
          <small> Section 4: Paragraph 1</small>
        </div>
      </div>

      <p>While more complicated then the last machine this is mostly a reiteration of concepts. 
      The new concepts introduced here is first this machine can print more symbols then just 0,1 and E. 
      How x and  <span className='gothic'>"e"</span> which we will now refer to as 🍔 works in computing will be shown in the 
      Table below.</p>


      <table class="list table table-striped">
        <thead>
          <tr>
            <th>m-config.</th>
            <th>symbols</th>
            <th>operations</th>
            <th>final m-configuration
            </th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>b</td>
            <td>NONE</td>
            <td>🖨🍔, ➡, 🖨🍔, ➡, 🖨0, ➡, ➡, 🖨0, ⬅, ⬅</td>
            <td>o</td>
          </tr>
          <tr>
            <td>o</td>
            <td>0</td>
            <td>No Action</td>
            <td>q</td>
          </tr>
          <tr>
            <td>o</td>
            <td>1</td>
            <td>➡, 🖨x, ⬅, ⬅, ⬅</td>
            <td>q</td>
          </tr>
          <tr>
            <td>q</td>
            <td>0</td>
            <td>➡, ➡</td>
            <td>q</td>
          </tr>
          <tr>
            <td>q</td>
            <td>1</td>
            <td>➡, ➡</td>
            <td>q</td>
          </tr>
          <tr>
            <td>q</td>
            <td>NONE</td>
            <td>🖨1, ⬅</td>
            <td>p</td>
          </tr>
          <tr>
            <td>p</td>
            <td>NONE</td>
            <td>E, ➡</td>
            <td>q</td>
          </tr>
           <tr>
            <td>p</td>
            <td>🍔</td>
            <td>➡</td>
            <td>f</td>
          </tr>
          <tr>
            <td>p</td>
            <td>NONE</td>
            <td>⬅, ⬅</td>
            <td>p</td>
          </tr>
          <tr>
            <td>f</td>
            <td>ANY</td>
            <td>➡, ➡</td>
            <td>f</td>
          </tr>
          <tr>
            <td>f</td>
            <td>NONE</td>
            <td>🖨0, ⬅, ⬅</td>
            <td>o</td>
          </tr>
        </tbody>
      </table>

      <p>
        Complicated, but understandable.
      </p>

      <p> We can translate this to a configuration that works with my Turing Emulator as show below.</p>
 <ReactJson src={{
      start: '🍔',
      description: "Print factoriol 1's seperated by a 0",
      configurations: {
        'b': {
          name: "Print Guards and first 0",
          steps: ['🖨🍔', '➡', '🖨🍔', '➡', '🖨0'],
          callback: 'o'
        },
        'o': {
          name: "Print x if one is found",
          '1': {
            steps: ['➡', '🖨x', '⬅', '⬅', '⬅'],
            callback: 'o'
          },
          '0': {
            steps: [],
            callback: 'q'
          }
        },
        'q': {
          name: "Print 1 if empty",
          '🔣': {
            steps: ['➡', '➡'],
            callback: 'q'
          },
          '🕳': {
            steps: ['🖨1', '⬅'],
            callback: 'p'
          },
      },
      'p': {
          name: "remove x if found",
          'x': {
            steps: ['🖨🕳', '➡'],
            callback: 'q'
          },
          '🍔': {
            steps: ['➡'],
            callback: 'f'
          },
          '🕳': {
            steps: ['⬅', '⬅'],
            callback: 'p'
          }
      },
      'f': {
        name: "print 0 if empty",
          '🔣': {
            steps: ['➡', '➡'],
            callback: 'f'
          },
          '🕳': {
            steps: ['🖨0', '⬅', '⬅'],
            callback: 'o'
          }
        }
      }
    }}
      name={false}
      displayDataTypes={false}
      onEdit={false}
      />

      <p> Now lets see this in all it's glory</p>


      <div style={{border: '2px solid black', paddingBottom: 40}}>
        <Machine configurationsTable={{
      start: '🍔',
      description: "Print factorial 1's seperated by a 0",
      configurations: {
        '🍔': {
          name: "Print Guards and first 0",
          steps: ['🖨🍔', '➡', '🖨🍔', '➡', '🖨0'],
          callback: '⏰'
        },
        '⏰': {
          name: "Print x if one is found",
          '1': {
            steps: ['➡', '🖨x', '⬅', '⬅', '⬅'],
            callback: '⏰'
          },
          '0': {
            steps: [],
            callback: '⚗'
          }
        },
        '⚗': {
          name: "Print 1 if empty",
          '🔣': {
            steps: ['➡', '➡'],
            callback: '⚗'
          },
          '🕳': {
            steps: ['🖨1', '⬅'],
            callback: '👾'
          },
      },
      '👾': {
          name: "remove x if found",
          'x': {
            steps: ['🖨🕳', '➡'],
            callback: '⚗'
          },
          '🍔': {
            steps: ['➡'],
            callback: '🚑'
          },
          '🕳': {
            steps: ['⬅', '⬅'],
            callback: '👾'
          }
      },
      '🚑': {
        name: "print 0 if empty",
          '🔣': {
            steps: ['➡', '➡'],
            callback: '🚑'
          },
          '🕳': {
            steps: ['🖨0', '⬅', '⬅'],
            callback: '⏰'
          }
        }
      }
    }}/>
      </div>

    <p className='mt-4'> 
      So how does this work? The first configuration is there to build the basic code guard for the machine.

      <span className='my-4 d-block'><ReactJson src={{
        'b': {
          name: "Print guards and first 0",
          steps: ['🖨🍔', '➡', '🖨🍔', '➡', '🖨0'],
          callback: 'o'
        },
    }} name={false}
      displayDataTypes={false}
      onEdit={false}
      /> 
      </span>
      Turing uses what is called a swah as a guard to indicate the beginning of the number on the tape. 
      Without this guard it would be hard/impossible to tell when the head reach the beginning based on 0 and 1's alone.   
        <Popover id={1} message={
          "There is no real need in this machine for two swahs. This is actually done because of a more complex machine he wants to introduce later in his paper."
        }/> 
      After b is run the first 
      time it the Turing Machine will never again enter this configuration as dictated by this machine configuration table. 
    
    </p>

    <p>The second configuration main job is to count the number of ones
      <span className='my-4 d-block'><ReactJson src={{
        'o': {
          '1': {
            steps: ['➡', '🖨x', '⬅', '⬅', '⬅'],
            callback: 'o'
          },
          '0': {
            steps: [],
            callback: 'q'
          }
        }
      }} name={false}
      displayDataTypes={false}
      onEdit={false}
      /> 
      </span>

      It does this by marking each
      1 it sees and then going backwards on the tape to the next section of F-squares as he calls spaces that are designated for 0s or 1s.
      If instead it finds a 0 it does no action and moves on to the next configuration. 

      </p>

      <p>
        This configuration actually illustrates two important techniques one can use in a Turing machine to create complex algorithms. 
        The first is how the configuriation can work recursively. As long as it finds another 1 in the F-squares it continues doing the same steps. 
        There can be 1 or 10000000 1s. The machine will dutifully mark xs to be used in a future configuration. 

        The second technique is the use of the empty action. The main purpose here is to change the m-configuration to the next one. 
        But one can easily imagine the configuration checking for Empty spaces or X and branching to a different configuriation other then q.
        It can be considered a rudimentary switch statement. If symbol is this do that, else if symbol is that do this.  
        The main thing to take away is that all configurations need to cause a change to the tape or the placement of the head. 
        Sometimes they are simply to change something internal in the machine itself.
      </p>

      <p className='mt-4'> 
        The Third configuration is all about recursively calling itself to move F-square to F-square looking for the next empty space to print 1.
      <span className='my-4 d-block'><ReactJson src={{
        q: {
          '🔣': {
            steps: ['➡', '➡'],
            callback: 'q'
          },
          '🕳': {
            steps: ['🖨1', '⬅'],
            callback: 'p'
          }
        },
      }} name={false}
      displayDataTypes={false}
      onEdit={false}
      /> 
      </span>

      There is not much more too it then that. 
     
    </p>

     <p className='mt-4'> 
        The Fourth configuration serves different roles depending on where the machine is on the tape / in the algorithm.
      <span className='my-4 d-block'><ReactJson src={{
        p: {
          'x': {
            steps: ['🖨🕳', '➡'],
            callback: 'q'
          },
          '🍔': {
            steps: ['➡'],
            callback: 'f'
          },
          '🕳': {
            steps: ['⬅', '⬅'],
            callback: 'p'
          }
      }}} name={false}
      displayDataTypes={false}
      onEdit={false}
      /> 
      </span>

      If the head sees that it is on an x it starts steps and a basic loop that ereases each x and puts in 1 using this and the previous configuration p. 
      They work in concert to get to where the machine will eventually get to the end of the printed F-squares. 
      Here it switches to the third type of operation 
      as set forth in the table. It recursively heads back till it encounters a 🍔. 
      Here it continues on to the next and final configuration for this machine.  
    </p>

      <p className='mt-4'> 
        The Final configuration major concern is getting back to the start of the loop and continuing the next iteration of 0s and 1s
      <span className='my-4 d-block'><ReactJson src={{
        'f': {
        name: "print 0 if empty",
          '🔣': {
            steps: ['➡', '➡'],
            callback: 'f'
          },
          '🕳': {
            steps: ['🖨0', '⬅', '⬅'],
            callback: 'o'
          }
        }
      }} name={false}
      displayDataTypes={false}
      onEdit={false}
      /> 
      </span>

      It steps ahead till recursively till it encounters an empty space in an F-square and then proceeds to print a 0.
      Finally it moves into the second configuration to start the entire process again. 
    </p>

    <p>
      For five configurations this machine is very powerful in what it does and demonstrates why Turing Machines/State machines are a basic building 
      block of all computer systems. But building a powerful computer isn't the main goal of Turing's paper. It's main goal is much weirder then that.
    </p> 
    </div>
    );
  }
}



export default AndNowTheHardPartStarts

