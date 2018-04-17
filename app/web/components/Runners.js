import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {List, ListItem}     from 'material-ui/List';


const mappedItems = (runners) => {
  return (
    runners.map((it, i) =>
      <ListItem 
        key={i}
        primaryText={it.position + ' - ' + it.name}
      />
    )
  )
}

/**
 * Displays the list a runners with the position and the name.
 */
export default class Runners extends Component {
  
  render() {
    return (
      <List>
        {mappedItems(this.props.runners)}
      </List>
    )
  }
}

Runners.propTypes = {
  runners: PropTypes.array.isRequired
}
