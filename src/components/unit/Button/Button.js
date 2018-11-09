import React, { Component } from 'react';

class CustomButton extends Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <button type="button" {...other}>
        {children}
      </button>
)
  }
}

export default CustomButton;
