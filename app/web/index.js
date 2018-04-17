import 'babel-polyfill';
import React            from 'react';
import { render }       from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore   from '../store/configureStore';
import Root             from './containers/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// load the style
require('./styles/common.sass');

const store = configureStore();
const rootElement = document.getElementById('root');

render(
    <AppContainer>
      <MuiThemeProvider>
        <Root store={store}/>
      </MuiThemeProvider>  
    </AppContainer>,
    rootElement
);

// hot reloading management
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <MuiThemeProvider>
          <NewRoot store={store}/>
        </MuiThemeProvider>
      </AppContainer>,
      rootElement
    );
  });
}
