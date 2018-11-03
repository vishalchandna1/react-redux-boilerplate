import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../unit/Slider/Slider'

import withStyles from '../../../helpers/withStyles';
import Container from '../../unit/Container/Container';

const styles = props => {
  const { unit } = props.theme.spacing;
  return {
    appContainer: {
      paddingLeft: 2 * unit,
      paddingRight: 2 * unit,
    }
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.appContainer}>
        Home Page Content
        <Slider>
          <Container>
            Slide 1
          </Container>
          <Container>
            Slide 2
          </Container>
          <Container>
            Slide 3
          </Container>
          <Container>
            Slide 4
          </Container>
          <Container>
            Slide 5
          </Container>
        </Slider>
      </Container>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);
