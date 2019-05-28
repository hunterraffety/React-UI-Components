import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
  return <div className={props.displayStyle}>{props.text}</div>;
};

export default CalculatorDisplay;
