import React, { Component } from 'react';
import PropTypes            from 'prop-types';

// The app entry point
export default class App extends Component {
  render() {
    return (
      <div className='react-web'>
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
    children: PropTypes.object
};
