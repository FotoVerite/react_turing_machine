export default (state = {}, action) => {
 switch (action.type) {
  case 'MOVE':
   return state
  case 'BOOTUP':
  	return Object.assign(state, {bootup: true})
  default:
   return state
 }
}