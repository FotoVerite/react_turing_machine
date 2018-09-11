export default (state = {}, action) => {
 switch (action.type) {
  case 'MOVE':
   return state
  	case '👍':
	  	return Object.assign(
	  		state,
	  		{ cursor: state.cursor++, 
	  			steps: [...state.steps, action.type]
	  		},
	  	)
  	case '🙋':
	  	return Object.assign(
	  		state,
	  		{ 
	  			output: state.output + "1",
	  			steps: [...state.steps, action.type]
	  		}
	  	)
  default:
   return state
 }
}