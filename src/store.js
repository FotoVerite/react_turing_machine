import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore() {
 return createStore(
  rootReducer,
   {
   	machine: {
         bootup: false,
   		direction: 'forward',
   		speed: 'stopped',
         startNextStep: 0,
   		steps: [],
   		output: "",
   		cursor: 0,
         headPosition: 84,
         tapePosition: 0
   	},
   	configurationsTable: {
   		start: '🌂',
   		configurations: {
   			name: '🌂',
		 		description: "Print .1111111_ forever.",
		 		operations: {
		 			'🌂': {
		 				steps: ['➡', '🖨1'],
		 				callback: '🌂'
		 			}
		 		}
		 	}
   	}
   },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk)

 );
}