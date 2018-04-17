import { createStore, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import createLogger from 'redux-logger';
import promise      from 'redux-promise-middleware';
import reducers     from '../reducers';

// create a store that has redux-thunk middleware, and redux dev tooling enabled.
// dev tools allows to commit different actions and go forwards and backwards in time
const composeEnhancers = (process.env.PLATFORM_ENV == 'web' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const createDevStoreWithMiddleware = composeEnhancers(
  applyMiddleware(promise(), thunk),
)(createStore);

export default function configureStore() {
  const store = createDevStoreWithMiddleware(reducers);

  // enable webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
