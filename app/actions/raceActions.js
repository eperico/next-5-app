import axios      from 'axios';
import * as types from '../constants/ActionTypes';
import {
  FETCH_RACES_URL,
} from '../constants/Endpoints';

const NB_RACES = 5

/*
* Fetches specified number of non finished races from TAB API.
*/
const fetchRaces = () => {
  const url = `${FETCH_RACES_URL}?maxRaces=${NB_RACES}`;
  return {
    type: types.FETCH_RACES,
    payload: axios.get(url)
  }
}

export {
  fetchRaces
};
