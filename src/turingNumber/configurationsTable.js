 const configurationsTable = (symbols) => {

  const symbolsArray = Object.keys(symbols)
  const mappedSymbolsArray =  Object.keys(symbols).map(key => symbols[key])
  let configurations = {}
  let callbackMap = {}
  let numberOfConfigurations = 1

  const findSymbol = (symbol) => {
    return symbols[symbol] 
  }

  const constructConfigurationArray = (mConfiguration, scannedSymbols=[], steps, cb) => {
    //guard if no mConfiguration is set
    if(mConfiguration === undefined) {
      numberOfConfigurations = numberOfConfigurations + 1;
      mConfiguration = configurations[numberOfConfigurations]
    }
    var nextStep = steps.shift()
      if(nextStep.match('🖨')) {
        var splitPrint = [...nextStep]
        nextStep = splitPrint[0] + findSymbol(splitPrint[1])
        const nextSteps = [nextStep, steps.shift()]
        for(var index in scannedSymbols) {
          var symbol = scannedSymbols[index]
          mConfiguration[symbol] = {}
          mConfiguration[symbol]['steps'] = nextSteps
        }
      }
      else {
        for(var index in scannedSymbols) {
          var symbol = scannedSymbols[index]
          mConfiguration[symbol] = {}
          mConfiguration[symbol]['steps'] = ['🖨' + symbol, nextStep]
        }
      }
    addCallBackToConfiguration(mConfiguration, scannedSymbols, steps, cb)
  }

  const addCallBackToConfiguration = (mConfiguration, scannedSymbols, steps, cb) => {
     if(steps.length > 0) {
      const nextMConfiguration = numberOfConfigurations;
      numberOfConfigurations = numberOfConfigurations + 1;
      for(var index in scannedSymbols) {
        var symbol = scannedSymbols[index]
        mConfiguration[symbol]['callback'] = nextMConfiguration + ""
      }
      configurations[nextMConfiguration] = {}
      constructConfigurationArray(configurations[nextMConfiguration], mappedSymbolsArray, steps, cb)
    }
    else {
      for(var index in scannedSymbols) {
        var symbol = scannedSymbols[index]
        mConfiguration[symbol]['callback'] = mapCallback(cb)
      }
    }

  }

  const addConfiguration = (key, symbolNumbers=[], steps, cb) => {
    //Find mConfig if it exists for configurationKey
    const mConfig = mapCallback(key)
    //if configuration does not exist add it and increment number of mConfigs
    if(!configurations.hasOwnProperty(mConfig)) {
      configurations[mConfig] = {};
    }


    //set this configuration
    const thisConfiguration = configurations[mConfig]

    //set steps to empty if there are no steps
    if(steps.length === 0) {
      for(var index in symbolNumbers) {
        var symbol = symbolNumbers[index]
        thisConfiguration[symbol] = {}
        thisConfiguration[symbol]['steps'] = []
        thisConfiguration[symbol]['callback'] =  mapCallback(cb)
      }
    }
    else {
      var cloneOfSteps = Object.assign([], steps);
      constructConfigurationArray(thisConfiguration, symbolNumbers, cloneOfSteps, cb)
    }
    return thisConfiguration
  }

  const mapCallback = (cb) => {
    if(!callbackMap.hasOwnProperty(cb)) {
      callbackMap[cb] = numberOfConfigurations + "";
      numberOfConfigurations  = numberOfConfigurations + 1;
    }
    return callbackMap[cb]
  }


  return {
    addConfiguration: addConfiguration,
    configurations: configurations,
    symbols: symbols,
    symbolsArray : symbolsArray,
    findSymbol : findSymbol,
    constructConfigurationArray: constructConfigurationArray
  }

}

export default configurationsTable