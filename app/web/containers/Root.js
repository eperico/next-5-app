import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Provider }         from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import App   from './App';
import Home  from './Home';
import Races from './Races';


// Basic router to select races based on race type
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="races/:raceType" component={Races}/>
  </Route>
);

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
