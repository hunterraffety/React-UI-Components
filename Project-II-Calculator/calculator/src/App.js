import React from 'react';
import './App.scss';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='App'>
      <div className='wrap'>
        <div className='firstRow'>
          <CalculatorDisplay displayStyle='display' text='0' />
        </div>
        <div class='main'>
          <div className='leftSide'>
            <div className='clearButton'>
              <ActionButton buttonStyle='clear' text='clear' />
            </div>
            <div className='sevenThroughNine'>
              <NumberButton buttonStyle='number' text='7' />
              <NumberButton buttonStyle='number' text='8' />
              <NumberButton buttonStyle='number' text='9' />
            </div>
            <div className='fourThroughSix'>
              <NumberButton buttonStyle='number' text='4' />
              <NumberButton buttonStyle='number' text='5' />
              <NumberButton buttonStyle='number' text='6' />
            </div>
            <div className='oneThroughThree'>
              <NumberButton buttonStyle='number' text='1' />
              <NumberButton buttonStyle='number' text='2' />
              <NumberButton buttonStyle='number' text='3' />
            </div>
            <div className='zeroButton'>
              <ActionButton displayStyle='zero' text='0' />
            </div>
          </div>
          <div className='rightSide'>
            <NumberButton displayStyle='button' text='&divide;' />
            <NumberButton displayStyle='button' text='&times;' />
            <NumberButton displayStyle='button' text='-' />
            <NumberButton displayStyle='button' text='+' />
            <NumberButton displayStyle='button' text='=' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
