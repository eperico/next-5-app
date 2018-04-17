import React, { Component }       from 'react'
import { Link }                   from 'react-router'
import PropTypes                  from 'prop-types'

// components
import Countdown from './Countdown';
import Runners   from './Runners';

/*
* Race component displays single race information, includes a Countdown sub-component and the list of runners.
* It also dispatches information to parent when a race is finished.
*/
class RaceCard extends Component {

  render() {
    const { item, isRaceDetails } = this.props
    return (
      <span>
        { 
          isRaceDetails &&
          <p>Race {item.raceNumber} - {item.raceName}</p>
        }
        {
          !isRaceDetails &&
          <p><Link to={'/race/' + item.raceName}>Race {item.raceNumber} - {item.raceName}</Link></p>
        }
        
        <p>Meeting {item.meeting.meetingName} ({item.meeting.location})</p>
        
        { 
          !isRaceDetails &&
          <Countdown endDate={item.raceStartTime} suffix='to go' onFinishedCountdown={() => this.props.onRaceStarted()}/>
        }
        
        {
          item.runners &&
          <Runners runners={item.runners}/>
        }
      </span>
    )
  }

}

RaceCard.propTypes = {
  item: PropTypes.object.isRequired,
  isRaceDetails: PropTypes.bool.isRequired,
  onRaceStarted: PropTypes.func.isRequired
}

export default RaceCard;
