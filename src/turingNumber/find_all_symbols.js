const findAllSymbols = (operations) => {

  let symbols = {
    '🕳': 0,
    '0': 1,
    '1': 2 
  }


  const _findSymbols = (operations) => {
    for (var key in operations) {
      var operation = operations[key]
      if (operation.hasOwnProperty('steps')) {
          for (var i = operation.steps.length - 1; i >= 0; i--) {
            _addSymbol(operation.steps[i])
          }
      }
      else {
        for (var key  in operation) { 
          var operationConfiguration = operation[key]
          if(key === 'name') {
            continue;
          }
          for (var i = operationConfiguration.steps.length - 1; i >= 0; i--) {
            _addSymbol(operationConfiguration.steps[i])
          }
        }
      }
    }
    return symbols;
  }

  const _addSymbol = (step) => {
    if(step.match('🖨')) {
      const printerStep = [...step];
      if(!symbols.hasOwnProperty(printerStep[1])) {
        symbols[printerStep[1]] = Object.keys(symbols).length;
      }
    }
  }

  _findSymbols(operations)
  return symbols
}

export default findAllSymbols