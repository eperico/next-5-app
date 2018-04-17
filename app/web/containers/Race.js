import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

// actions
import { fetchRace } from '../../actions/raceActions';

// components
import RaceCard from '../components/RaceCard';


/*
* Race container fetches and displays the information about a single race.
*/
class Race extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRace(this.props.params.raceName))
  }

  render() {
    const { race } = this.props;

    if (race.error) {
      return <h3>Cannot find this race.</h3>
    }

    if (race.fetching) {
      <p>fetching data...</p>
    }

    if (race.item) {
      return (
        <div>
          <Link to="/">Back</Link>
          <h3>Race Information</h3>
          <RaceCard item={race.item} isRaceDetails={true} onRaceStarted={() => {}}/>
        </div>
      );
    }

    return(null)
  }
}

Race.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const select = (store) => {
  return {
    race: store.race
  };
}
export default connect(select)(Race);
