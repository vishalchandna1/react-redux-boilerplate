import React, { Component } from 'react';
import PropTypes from "prop-types";

class CustomButton extends Component {
  render() {
    const { children, type, ...other } = this.props;
    return (
      <button type={type} {...other}>
        {children}
      </button>
)
  }
}

CustomButton.propTypes = {
  type: PropTypes.string,
}

export default CustomButton;
