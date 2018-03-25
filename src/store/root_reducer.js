import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../modules/counter';

export default combineReducers({
  routing: routerReducer,
  [counter.constants.NAME]: counter.reducers
})