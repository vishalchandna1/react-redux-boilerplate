import React, { Component } from 'react';

import logo from '../../../logo.svg';
import Container from '../../unit/Container/Container';
import Button from '../../unit/Button/Button';

class Home extends Component {
  render() {
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
          <Button type="button">This is our Button(a unit component)</Button>
        </header>
      </Container>
    );
  }
}

export default Home;
