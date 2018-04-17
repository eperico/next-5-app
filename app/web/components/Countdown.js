import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Render               from './CountdownRender';

const initialState = {
  started: false,
  total: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  timeInterval: null
};

/*
* Countdown component is in charge of updating the remaing time before a race starts
* and informs parent component when a race is finished
*/
class Countdown extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.getTimeRemaining();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.endDate) {
      this.clearTimer();
      this.setState({
        timeInterval: setInterval(this.getTimeRemaining.bind(this), 1000)
      });
    }
  }

  render() {
    // extract rendering into another file to make it cleaner
    return Render.call(this, this.props, this.state);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.state.timeInterval) {
      clearInterval(this.state.timeInterval);
    }
  }

  /*
  * Calculates the remaining time before the race starts breaking into days, hours, minutes and seconds.
  */
  getTimeRemaining() {
    const { endDate } = this.props;
    const now = new Date();
    if (endDate && (new Date(endDate) - now - 1000) > 0) {
      const time    = new Date(endDate) - now - 1000;
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours   = Math.floor((time/ (1000 * 60 * 60)) % 24);
      const days    = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        started: true,
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    } else {
      // check if countdown has started to avoid re-rendering after fetching the data
      if (this.state.started) {
        this.props.onFinishedCountdown();
        this.setState(initialState);
      }
    }
  }

}

Countdown.propTypes = {
  endDate: React.PropTypes.string.isRequired,
  onFinishedCountdown: PropTypes.func.isRequired
};

export default Countdown;
