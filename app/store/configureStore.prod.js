import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise  from 'redux-promise-middleware';
import thunk    from 'redux-thunk';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(promise(), thunk)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(reducers);
}
