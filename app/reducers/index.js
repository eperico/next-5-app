import { combineReducers } from 'redux';
import races               from './racesReducer';
import race                from './raceReducer';

export default combineReducers({
  races,
  race
})
