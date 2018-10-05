import turingNumber from '../turingNumber/turing_number'

import configurationsOptions from '../configurations'


export default (state = {}, action) => {
 switch (action.type) {
  case 'REPLACE_CONFIGURATION':
    const configuration = configurationsOptions[action.data.value];
    turingNumber(configuration)
    return Object.assign(state, {
      start: configuration.start,
      configurations: configuration
    })
  default:
   return state
 }
}