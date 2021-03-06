import React, { Component } from 'react';
import PropTypes            from 'prop-types';

// components
import RaceCard from './RaceCard';


const sortByClosingTime = (a, b) => new Date(a.raceStartTime) - new Date(b.raceStartTime)

const sortRacesForType = (races, type) => {
  return races.filter(r => r.meeting.raceType === type).sort(sortByClosingTime);
}

/*
* List component displays the list of races based on racing type if any. Races are sorted by their closing time.
* Informs parent when a race is finished.
*/
export default class List extends Component {

  render() {
    const { items, raceType } = this.props;

    const mappedItems = (items) => {
      return (
        items.map((it, i) =>
          <RaceCard key={it.raceName} item={it} isRaceDetails={false} onRaceStarted={() => this.props.onRaceStarted()}/>
        )
      )
    }

    return (
      <div>
        {raceType.match('all|r') &&
          <div>
            <h4>Thoroughbred Racing</h4>
            <ul>{mappedItems(sortRacesForType(items, 'R'))}</ul>
          </div>}

        {raceType.match('all|g') &&
          <div>
            <h4>Greyhounds Racing</h4>
            <ul>{mappedItems(sortRacesForType(items, 'G'))}</ul>
          </div>}

        {raceType.match('all|h') &&
          <div>
            <h4>Harness Racing</h4>
            <ul>{mappedItems(sortRacesForType(items, 'H'))}</ul>
          </div>}
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  raceType: PropTypes.string,
  onRaceStarted: PropTypes.func.isRequired
}
