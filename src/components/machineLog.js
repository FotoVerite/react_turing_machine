// @flow weak

import React, { Component } from 'react';
import DisplayTape from './displayTape'

class MachineLog extends Component {



  render() {

    let qs = []

    const chunks = (array, size) => {
      var results = [];
      while (array.length) {
        results.push(array.splice(0, size));
      }
      return results;
    };

    for(var q in this.props.configurationsCalled) {
        const configuration = this.props.configurationsCalled[q]
        qs.push(<h2>{`Q${q}: ${configuration.configurationName}`}</h2>)
        qs.push(<p>{configuration.configurationStepsCalled.join(", ")}</p>)
        if(configuration.stateOfMachine.length > 0){
          const chunkedState = chunks([...configuration.stateOfMachine], 14)
          var cursorIndex = configuration.cursorIndex;
          for (var i = chunkedState.length - 1; i >= 0; i--) {
            const cursorIndex = configuration.cursorIndex - (14 * i)
            qs.push(<DisplayTape squares={chunkedState[i]} scanned={cursorIndex}/>)
          }
        }
        qs.push(<hr />)
    }

    return (
      <div className="log">
        {qs}
      </div>
    );
  }
}
export default MachineLog