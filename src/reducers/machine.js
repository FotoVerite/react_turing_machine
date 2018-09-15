export default (state = {}, action) => {
 switch (action.type) {
 		case 'bootUp':
	  	return Object.assign(
	  		state,
	  		{ 
	  			bootup: true,
	  			headPosition: state.headPosition + 111
	  		}
	  	)
	  case 'play': 
		  return Object.assign(
		  		state,
		  		{ 
		  			speed: 'normal'
		  		}
		  	)
		case 'stop': 
		  return Object.assign(
		  		state,
		  		{ 
		  			speed: 'stopped'
		  		}
		  	)
  	case '👍':
	  	var object = Object.assign(
	  		state,
	  		{ 
	  			bootup: true,
	  			cursor: state.cursor + 1, 
	  			startNextStep: false,
	  			steps: [...state.steps, action.type]
	  		}
	  	)

	  	if(object.cursor > 10) {
	  		object = Object.assign(
		  		state,
		  		{ 
		  			tapePosition: state.tapePosition - 34,
		  		}
		  	)

	  	}
	  	else {
	  		object = Object.assign(
		  		state,
		  		{ 
		  			headPosition: state.headPosition + 34,
		  		}
		  	)

	  	}
	  	return object
  	case '🙋':
	  	return Object.assign(
	  		state,
	  		{ 
	  			bootup: true,
	  			output: state.output + "1",
	  			startNextStep: false,
	  			steps: [...state.steps, action.type]
	  		}
	  	)
	  case 'START_NEXT_STEP':
	  	return Object.assign(
	  		state,
	  		{ 
	  			bootup: true,
	  			startNextStep: true,
	  			speed: 'steps'
	  		}
	  	)
  default:
   return state
 }
}