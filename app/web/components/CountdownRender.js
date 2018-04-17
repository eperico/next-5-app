import React from 'react';

export default function() {
  const { days=false, hours=true, minutes=true, seconds=true, suffix} = this.props;

  if (this.state.total <= 0) {
    return <span>Race has started! Betting is suspended</span>
  }

  return (
    <span>
      {days && <span>
        <span>{this.state.days}</span>
        <span> days </span>
      </span>}
      {hours && <span>
        <span>{this.state.hours}</span>
        <span> hours </span>
      </span>}
      {minutes && <span>
        <span>{this.state.minutes}</span>
        <span> minutes </span>
      </span>}
      {seconds && <span>
        <span>{this.state.seconds}</span>
        <span> seconds </span>
      </span>}
      {suffix}
    </span>
  )
}
