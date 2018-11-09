import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../../../logo.svg';
import Container from '../../unit/Container/Container';

class Home extends Component {
  render() {
    const { name } = this.props;
    return (
      <Container className="home-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit 
            {' '}
            <code>src/App.js</code>
            {' '}
and save to reload.
          </p>
          <h4
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </h4>
        </header>
      </Container>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
}

export default Home;
