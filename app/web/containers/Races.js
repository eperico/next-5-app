import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

// actions
import { fetchRaces } from '../../actions/raceActions';

// components
import List from '../components/List';


/*
* Races container fetches and display the list of upcoming races.
*/
class Races extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRaces())
  }

  // fetches the list of races again once a race has stared
  refreshRaces() {
    this.props.dispatch(fetchRaces())
  }

  render() {
    const { races } = this.props;

    if (races.error) {
      return <h3>Oops, something went wrong fetching the data.</h3>
    }

    if (races.fetching) {
      <p>fetching data...</p>
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Upcoming races</h3>
        <List items={races.list} raceType={this.props.params.raceType} onRaceStarted={() => this.refreshRaces()}/>
        <p>last updated: {new Date(races.lastUpdated).toString()}</p>
      </div>
    );
  }
}

Races.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const select = (store) => {
  return {
    races: store.races
  };
}
export default connect(select)(Races);
