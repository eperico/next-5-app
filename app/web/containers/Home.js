import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router';

// actions
import { fetchRaces } from '../../actions/raceActions';

// components
import List from '../components/List';

/*
* Home page to navigate the all races or specific race type
*/
class Home extends Component {

  render() {
    return (
      <div>
        <h2>Welcome to Next 5 App</h2>
        <Link to="/races/all">All the races</Link><br/>
        <Link to="/races/r">Thoroughbred</Link><br/>
        <Link to="/races/g">Greyhounds</Link><br/>
        <Link to="/races/h">Harness</Link>
      </div>
    )
  }
}

export default Home;
