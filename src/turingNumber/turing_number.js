const findAllSymbols = require('./find_all_symbols').default
const configurationsTable = require('./configurationsTable').default

const turingNumber = (configuration) => {

  let keyMap = {}

  let calculatedNumber = ""

  const calculateTable = (operations, configurationsTable) => {
    for (var key in operations) {
      var operation = operations[key]
      if (operation.hasOwnProperty('steps')) {
        configurationTable.addConfiguration(key, mappedSymbols, operation.steps, operation.callback)
      }
      else {
        for (var operationKey  in operation) { 
          var operationConfiguration = operation[operationKey]
          if(operationKey === 'name') {
            continue;
          }
          if(operationKey === '🔣') {
            const operationArray = Object.keys(operation).map(key => symbols[key])
            const neededSymbols = mappedSymbols.filter( function( el ) {
              return !operationArray.includes( el );
            } );
            configurationTable.addConfiguration(key, neededSymbols, operationConfiguration.steps, operationConfiguration.callback)

          }
          else {
            configurationTable.addConfiguration(key, [symbols[operationKey]], operationConfiguration.steps, operationConfiguration.callback)
          }
        }
      }
    }

  }

  const calculateNumber = () => {
    for( var operation in configurationTable.configurations) {
      const thisConfiguration = configurationTable.configurations[operation]
      var calculatedConfigurationNumber = ""
      calculatedConfigurationNumber += "D"
      calculatedConfigurationNumber += "A".repeat(operation)
      for( var symbol in thisConfiguration) {
          var symbolOperation = thisConfiguration[symbol]
          var symbolOperationNumber = Object.assign(calculatedConfigurationNumber, "")
          symbolOperationNumber += "D"
          symbolOperationNumber += "C".repeat(symbol)
          if(symbolOperation.steps.length === 0){
            symbolOperationNumber = symbolOperationNumber + "N"
          }
          else {
    
            const printSymbol = [...symbolOperation.steps[0]][1]
            symbolOperationNumber += "D"
            symbolOperationNumber += "C".repeat(printSymbol) 
            if(symbolOperation.steps[1] === '➡') {
              symbolOperationNumber += "R"
            }
            else {
              symbolOperationNumber += "L"
            }
          }
          symbolOperationNumber += "D"
          symbolOperationNumber += "C".repeat(symbolOperation.callback)
          symbolOperationNumber += ";" 
          calculatedNumber += symbolOperationNumber;
      }
    }
  }

  const symbols = findAllSymbols(configuration.operations)
  const configurationTable = configurationsTable(symbols)
  const mappedSymbols = Object.keys(symbols).map(key => symbols[key])
  calculateTable(configuration.operations, configurationTable)
  calculateNumber()

  return {
    configurations: configurationTable.configurations,
    calculatedNumber: calculatedNumber
  }
}


export default turingNumber;
