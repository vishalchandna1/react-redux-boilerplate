import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from '../../../helpers/withStyles';

const styles = props => {
  const { spacing, shadows } = props.theme;
  const { unit } = spacing;
  const color = props.theme.palette[props.color ? props.color : 'primary'];
  const { radius } = props.theme.buttonBorder;
  const { common } = props.theme.palette;

  return {
    button: {
      minWidth: 'auto',
      minHeight: 'auto',
      backgroundColor: color.main,
      borderRadius: radius,
      width: props.width || 'auto',
      color: common.white,
      boxShadow: shadows[2],
      '&:hover' : {
        boxShadow: shadows[4],
        backgroundColor: color.light,
      }
    },
    small: {
      paddingLeft: unit,
      paddingRight: unit,
      paddingTop: unit/2,
      paddingBottom: unit/2,
    },
    large: {
      paddingLeft: 2 * unit,
      paddingRight: 2 * unit,
      paddingTop: 2 * unit/2,
      paddingBottom: 2 * unit/2,
    },
    transparent: {
      backgroundColor: 'transparent',
      color: color.main,
      boxShadow: 'none',
      border: 'none',
      '&:hover' : {
        boxShadow: 'none',
        backgroundColor: 'inherit',
      }
    },
    fab: {
      borderRadius: '50px',
      padding: unit,
    },
  }
}

class CustomButton extends Component {
  render() {
    const { classes, transparent, width, fab, children, className, size, ...other } = this.props;
    const btnClasses = classNames({
      [classes.button]: true,
      [classes.transparent]: transparent,
      [classes.fab]: fab,
      [classes[size]]: size,
      [className]: className,
    });
    return (
      <Button {...other} className={btnClasses}>
        {children}
      </Button>
)
  }
}

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'default',
    'coverColor',
  ]),
  width: PropTypes.string,
  transparent: PropTypes.bool,
  fab: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'large',
  ])
}

CustomButton.defaultProps = {
  color: 'primary',
  size: 'small',
  width: 'auto',
  transparent: false,
  fab: false,
}

export default withStyles(styles)(CustomButton);
