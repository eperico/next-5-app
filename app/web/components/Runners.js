import React, { Component } from 'react';
import PropTypes            from 'prop-types';


const mappedItems = (runners) => {
  return (
    runners.map((it, i) =>
      <li key={i}>
        <p>{it.position} - {it.name}</p>
      </li>
    )
  )
}

export default class Runners extends Component {
  
  render() {
    return (
      <div>
        <h4>Runners</h4>
        <ul>{mappedItems(this.props.runners)}</ul>        
      </div>
    )
  }
}

Runners.propTypes = {
  runners: PropTypes.array.isRequired
}
