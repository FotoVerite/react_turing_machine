import { combineReducers } from 'redux';
import configurationsTable from './configurationsTable';
import machine from './machine';

export default combineReducers({
 configurationsTable,
 machine
});