import update from 'immutability-helper';

let turingMachineMovements

export default turingMachineMovements = (machine) => {

  let props = machine.props
  let state = machine.state
  let configurationsCalled = 0

  const setStateForThisConfiguration = () => {
    machine.setState({
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
    machine.setState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {configurationName: {$set: name}
        }
      })
    })
  }

  const setStepForThisConfiguration = (step, reverse) => {
    machine.setState({
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
    machine.setState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {
            stateOfMachine: {$set: [...document.getElementById(state.uuid).getElementsByClassName('tape-square')].map(t => t.innerHTML)  
          },
          cursorIndex: {$set: index

          }
        }
      })
    })
  }

  const setCallbackOfMachineForThisConfiguration = (cb) => {
    machine.setState({
      configurationsCalled: update(
        machine.state.configurationsCalled, {
          [configurationsCalled]: {callback: {$set: cb}
        }
      })
    })
  }

  const startConfiguration = (emoji) => {
    configurationsCalled += 1
    setStateForThisConfiguration()
    const configuration = props.configurationsTable.configurations.operations[emoji];
    const configurationName = configuration.name || 'Unnamed'
    var isDoing = 'Started configuration ' + emoji + " " + configurationName
    setNameForThisConfiguration(configurationName)
    console.log(isDoing)

    var configurationMovement = findConfigurationMovement(configuration);

    console.log('Next configuration will be ' + configurationMovement.cb );

    if(configurationMovement.step === undefined) {
      console.log('This configuration does nothing.')
      return setTimeout(nextStep, state.speed, [], configurationMovement.cb)
    }
    else if(configurationMovement.step.match('🖨')){
      const nextStep = [...configurationMovement.step]
      return setTimeout(turingMachineMovements[nextStep[0]], state.speed, nextStep[1], configurationMovement.stepArray, configurationMovement.cb);
    }
    else {
      return setTimeout(turingMachineMovements[configurationMovement.step], state.speed, configurationMovement.stepArray, configurationMovement.cb);
    }
  }

  const findConfigurationMovement = (configuration) => {
    if(configuration.steps) {
      return findStepsAndCallback(configuration);
    }
    else {
      const symbol = state.myNodeList[props.machine.cursor].innerText;
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
    machine.setState({ update: true });
    if(props.machine.speed === 'steps') {
      if(props.machine.startNextStep) {
        //continue
      }
      else {
        setTimeout(nextStep, state.speed, stepArray, cb);
        return;
      }
    }
    if(props.machine.speed !== 'stopped') {
      //continue
    }
    else {
      setTimeout(nextStep, state.speed, stepArray, cb);
      return;
    }
    if(stepArray.length > 0) {
      const step = stepArray.shift();
      if(step.match('🖨')){
        const nextStep = [...step]
        setTimeout(turingMachineMovements[nextStep[0]],  state.speed, nextStep[1], stepArray, cb);
      }
      else {
        setTimeout(turingMachineMovements[step], state.speed, stepArray, cb);
      }
    }
    else {
      setStateOfMachineForThisConfiguration(props.machine.cursor)
      setCallbackOfMachineForThisConfiguration(cb)
      setTimeout(startConfiguration, state.speed, cb);
    }
  }

  turingMachineMovements["👍"] = (stepArray, cb) => {
    console.log("Moving Right")
    setStepForThisConfiguration("Moving Right", "👎")
    if(state.myNodeList[props.machine.cursor + 1] == null) {
      var div = document.createElement("div")
      div.classList.add("tape-square");
      state.myNodeList[0].parentNode.appendChild(div)
    }
    props.send_step('👍');
    nextStep(stepArray, cb)
  }

  turingMachineMovements["👎"] = (stepArray, cb) => {
    setStepForThisConfiguration("Moving Left", "👍")
    props.send_step('👎');
    nextStep(stepArray, cb)
  }

  turingMachineMovements["🖨"] = (symbol, stepArray, cb) => {
    console.log("Printing symbol " + symbol)
    if(symbol === '🕳') {
      symbol = " "
    }
    props.send_step('🖨', symbol);
    var node= state.myNodeList[props.machine.cursor];
    setStepForThisConfiguration("Printing symbol " + symbol, node.innerHTML)
    node.innerHTML  = symbol;
    nextStep(stepArray, cb)
  }

  return {startConfiguration: startConfiguration}

}