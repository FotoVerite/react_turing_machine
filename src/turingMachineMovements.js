let turingMachineMovements
export default turingMachineMovements = (machine) => {

  let props = machine.props
  let state = machine.state

  const startConfiguration = (emoji) => {
    const configuration = props.configurationsTable.configurations.operations[emoji];

    const configurationName = configuration.name || 'Unnamed'
    console.log('Started configuration ' + emoji + " " + configurationName )

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
      setTimeout(startConfiguration, state.speed, cb);
    }
  }

  turingMachineMovements["👍"] = (stepArray, cb) => {
    console.log("Moving Right")
    if(state.myNodeList[props.machine.cursor + 1] == null) {
      var div = document.createElement("div")
      div.classList.add("tape-square");
      state.myNodeList[0].parentNode.appendChild(div)
    }
    props.send_step('👍');
    nextStep(stepArray, cb)
  }

  turingMachineMovements["👎"] = (stepArray, cb) => {
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
    node.innerHTML  = symbol;
    nextStep(stepArray, cb)
  }

  return {startConfiguration: startConfiguration}

}