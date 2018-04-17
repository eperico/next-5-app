import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router';
import AppBar               from 'material-ui/AppBar';
import {List, ListItem}     from 'material-ui/List';

/*
* Home page to navigate the all races or specific race type
*/
class Home extends Component {

  navigateTo(route) {
    this.props.router.push(route)
  }

  render() {
    return (
      <div>
        <AppBar title="Welcome to Next 5 App"/>
        <List>
          <ListItem primaryText="All Racing" onClick={() => this.navigateTo('/races/all')}/>
          <ListItem primaryText="Thoroughbred Racing" onClick={() => this.navigateTo('/races/r')}/>
          <ListItem primaryText="Greyhounds Racing" onClick={() => this.navigateTo('/races/g')}/>
          <ListItem primaryText="Harness Racing" onClick={() => this.navigateTo('/races/h')}/>
        </List>
      </div>
    )
  }
}

export default Home;
