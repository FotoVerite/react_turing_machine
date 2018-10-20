import update from 'immutability-helper';

let turingMachineMovements

export default turingMachineMovements = (machine) => {

  let props = machine.props
  let state = machine.state
  let configurationsCalled = 0

  const promisedSetState = (newState) => {
      return new Promise((resolve) => {
          machine.setState(newState, () => {
              resolve()
          });
      });
  }

  const setStateForThisConfiguration = (cb, emoji, configuration) => {
   return promisedSetState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {$set: {
            configurationName: "",
            configurationStepsCalled: [],
            reverse: [],
            stateOfMachine: [],
            cursorIndex: 0, 
            callback: null
          }
        }
      })
    })
  }

  const setNameForThisConfiguration = (name) => {
    return promisedSetState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {configurationName: {$set: name}
        }
      })
    })
  }

  const setStepForThisConfiguration = (step, reverse) => {
    return promisedSetState({
      steps: machine.state.steps + 1,
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {
            configurationStepsCalled: {
              $push: [step]
            },
            reverse: {
              $push: [reverse]
            }
        }
      })
    })
  }

  const setStateOfMachineForThisConfiguration = (index) => {
    return promisedSetState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {
            stateOfMachine: {$set: [...document.getElementById(machine.state.uuid).getElementsByClassName('tape-square')].map(t => t.innerHTML)  
          },
          cursorIndex: {$set: index

          }
        }
      })
    })
  }

  const setCallbackOfMachineForThisConfiguration = (cb) => {
    return promisedSetState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {callback: {$set: cb}
        }
      })
    })
  }

  const startConfiguration = (emoji) => {
    configurationsCalled += 1
    const configuration = props.configurationsTable.configurations[emoji];
    setStateForThisConfiguration().then(() => {
      callConfiguration(emoji, configuration)
    })
  }

  const callConfiguration = (emoji, configuration) => {
    const configurationName = configuration.name || 'Unnamed'
    var isDoing = 'Started configuration ' + emoji + " " + configurationName
    setNameForThisConfiguration(configurationName)
    console.log(isDoing)

    var configurationMovement = findConfigurationMovement(configuration);

    console.log('Next configuration will be ' + configurationMovement.cb );

    if(configurationMovement.step === undefined) {
      console.log('This configuration does nothing.')
      return setTimeout(nextStep, machine.state.animationSpeed, [], configurationMovement.cb)
    }
    else if(configurationMovement.step.match('🖨')){
      const nextStep = [...configurationMovement.step]
      return setTimeout(turingMachineMovements[nextStep[0]], machine.state.animationSpeed, nextStep[1], configurationMovement.stepArray, configurationMovement.cb);
    }
    else {
      return setTimeout(turingMachineMovements[configurationMovement.step], machine.state.animationSpeed, configurationMovement.stepArray, configurationMovement.cb);
    }

  }

  const findConfigurationMovement = (configuration) => {
    if(configuration.steps) {
      return findStepsAndCallback(configuration);
    }
    else {
      const symbol = machine.state.myNodeList[machine.state.cursor].innerText;
      if(symbol !=='') {
        if(configuration[symbol]) {
          return findStepsAndCallback(configuration, symbol);
        }
        else {
          return findStepsAndCallback(configuration, '🔣');
        }
      }
      else{
        if(configuration['🕳']) {
          return findStepsAndCallback(configuration, '🕳');
        }
        else if(configuration['0']) {
          return findStepsAndCallback(configuration, '0');
        }
      }
    }
  }

  const findStepsAndCallback = (configuration, emoji) => {
    if(emoji !== undefined) {
     configuration = configuration[emoji];
    }
    const stepArray = Object.assign([], configuration.steps)
    const step = stepArray.shift();
    return { stepArray: stepArray, step: step, cb: configuration.callback };
  }

  const nextStep = (stepArray, cb) => {
    if(machine.state.speed === 'steps') {
      if(machine.state.startNextStep) {
        //continue
      }
      else {
        machine.setState({nextOperation: [stepArray, cb]})
        return;
      }
    }
    if(machine.state.speed !== 'stopped') {
      //continue
    }
    else {
      machine.setState({nextOperation: [stepArray, cb]})
      return;
    }
    if(stepArray.length > 0) {
      const step = stepArray.shift();
      if(step.match('🖨')){
        const nextStep = [...step]
        setTimeout(turingMachineMovements[nextStep[0]],  machine.state.animationSpeed, nextStep[1], stepArray, cb);
      }
      else {
        setTimeout(turingMachineMovements[step], machine.state.animationSpeed, stepArray, cb);
      }
    }
    else {
      setStateOfMachineForThisConfiguration(machine.state.cursor)
      setCallbackOfMachineForThisConfiguration(cb)
      setTimeout(startConfiguration, machine.state.animationSpeed, cb);
    }
  }

  const restartMachine = (stepArray, cb) => {
    if(stepArray.length > 0) {
      const step = stepArray.shift();
      if(step.match('🖨')){
        const nextStep = [...step]
        turingMachineMovements[nextStep[0]](nextStep[1], stepArray, cb)
      }
      else {
        turingMachineMovements[step](stepArray, cb)
      }
    }
    else {
      setStateOfMachineForThisConfiguration(machine.state.cursor)
      setCallbackOfMachineForThisConfiguration(cb)
      startConfiguration(cb)
    }

  }

  turingMachineMovements["➡"] = (stepArray, cb) => {
    console.log("Moving Right")
    setStepForThisConfiguration("Moving Right", "⬅")
    if(machine.state.myNodeList[machine.state.cursor + 1] == null) {
      var div = document.createElement("div")
      div.classList.add("tape-square");
      machine.state.myNodeList[0].parentNode.appendChild(div)
    }
    machine.goForward()
    nextStep(stepArray, cb)
  }

  turingMachineMovements["⬅"] = (stepArray, cb) => {
    setStepForThisConfiguration("Moving Left", "➡")
    machine.goBackward()
    nextStep(stepArray, cb)
  }

  turingMachineMovements["🖨"] = (symbol, stepArray, cb) => {
    console.log("Printing symbol " + symbol)
    if(symbol === '🕳') {
      symbol = " "
    }
    var node = machine.state.myNodeList[machine.state.cursor];
    setStepForThisConfiguration("Printing symbol " + symbol, node.innerHTML)
    node.innerHTML  = symbol;
    if(symbol === '0' || symbol === '1') {
      machine.setState({
        output: machine.state.output += symbol
      })
    }
    nextStep(stepArray, cb)
  }

  return {
          startConfiguration: startConfiguration,
          restartMachine: restartMachine
        }

}