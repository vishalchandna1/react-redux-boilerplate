import React, { Component } from 'react';

class Container extends Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <div {...other}>
        {children}
      </div>
)
  }
}

Container.propTypes = {
}

export default Container;
