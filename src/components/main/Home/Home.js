import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../../unit/Container/Container';

class Home extends Component {
  render() {
    const { name } = this.props;
    return (
      <Container className="home-container">
        Home {name}
      </Container>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
}

export default Home;
