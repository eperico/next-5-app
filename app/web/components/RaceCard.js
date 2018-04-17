import React, { Component }       from 'react';
import { Link }                   from 'react-router';
import PropTypes                  from 'prop-types';
import FlatButton                 from 'material-ui/FlatButton';
import { 
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';

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
      <Card>
        <CardHeader
          title={'Race ' + item.raceNumber + ' - ' + item.raceName}
          subtitle={'Meeting ' + item.meeting.meetingName  + '(' + item.meeting.location + ')'}
          expandable={false}
        />
        
        {
          !isRaceDetails &&
          <div>
            <CardText>
              <Countdown endDate={item.raceStartTime} suffix='to go' onFinishedCountdown={() => this.props.onRaceStarted()}/>
            </CardText>
            <CardActions>
              <Link to={'/race/' + item.raceName}>View</Link>
            </CardActions>
          </div>
        }

        {
          item.runners &&
          <CardText>
            <h4>Runners</h4>
            <Runners runners={item.runners}/>
          </CardText>
        }
      </Card>
    )
  }
}

RaceCard.propTypes = {
  item: PropTypes.object.isRequired,
  isRaceDetails: PropTypes.bool.isRequired,
  onRaceStarted: PropTypes.func.isRequired
}

export default RaceCard;
