import React, { Component }       from 'react'
import PropTypes                  from 'prop-types'

// components
import Countdown from './Countdown';

/*
* Race component displays single race information and includes a Countdown sub-component.
* It also dispatches information to parent when a race is finished.
*/
class Race extends Component {

  render() {
    const { item } = this.props
    return (
      <span>
        <p>Race {item.raceNumber} - {item.raceName}</p>
        <p>Meeting {item.meeting.meetingName} ({item.meeting.location})</p>
        <Countdown endDate={item.raceStartTime} suffix='to go' onFinishedCountdown={() => this.props.onRaceStarted()}/>
      </span>
    )
  }

}

Race.propTypes = {
  item: PropTypes.object.isRequired,
  onRaceStarted: PropTypes.func.isRequired
}

export default Race;
