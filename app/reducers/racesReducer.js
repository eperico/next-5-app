import * as types from '../constants/ActionTypes'

const initialState = {
  list: [],
  fetching: false,
  fetched: false,
  error: null,
  lastUpdated: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_RACES_PENDING:
      return {...state, fetching: true};

    case types.FETCH_RACES_REJECTED:
      return {...state, fetching: false, error: payload};

    case types.FETCH_RACES_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        list: payload.data.races,
        lastUpdated: Date.now()
      }
  }

  return state;
}
