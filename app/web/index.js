import 'babel-polyfill';
import React            from 'react';
import { render }       from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore   from '../store/configureStore';
import Root             from './containers/Root';

// load the style
require('./styles/common.sass');

const store = configureStore();
const rootElement = document.getElementById('root');

render(
    <AppContainer>
      <Root store={store}/>
    </AppContainer>,
    rootElement
);

// hot reloading management
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store}/>
      </AppContainer>,
      rootElement
    );
  });
}
