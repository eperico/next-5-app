import * as types from '../constants/ActionTypes'

const initialState = {
  item: null,
  fetching: false,
  fetched: false,
  error: null,
  lastUpdated: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_RACE_PENDING:
      return {...state, fetching: true, item: initialState.item};

    case types.FETCH_RACE_REJECTED:
      return {...state, fetching: false, error: payload, item: initialState.item};

    case types.FETCH_RACE_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        item: payload.data.race,
        lastUpdated: Date.now()
      }
  }

  return state;
}
