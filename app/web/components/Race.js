import React, { Component }       from 'react'
import PropTypes                  from 'prop-types'

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
      </span>
    )
  }

}

Race.propTypes = {
  item: PropTypes.object.isRequired,
  onRaceStarted: PropTypes.func.isRequired
}

export default Race;
