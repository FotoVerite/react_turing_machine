import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore() {
 return createStore(
  rootReducer,
   {
   	machine: {
   		direction: 'forward',
   		speed: 'normal',
   		steps: [],
   		output: "",
   		cursor: 0
   	},
   	head: {
   		direction: 'forward',
   		speed: 'normal',
   		steps: [],
   		start: '🌂',
   		configurations: {
   			name: '🌂',
		 		description: "Print .000000_ forever.",
		 		operations: {
		 			'🌂': {
		 				steps: ['👍', '👍', '🙋'],
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