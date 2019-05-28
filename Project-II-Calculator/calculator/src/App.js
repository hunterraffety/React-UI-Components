import React from 'react';
import './App.scss';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
    console.log(this.state.total);
  }

  updateNumberHandler = event => {
    console.log(event);
    this.setState({ total: event.target.value });
  };

  singleClickHandler = () => alert('Single Click!');

  render() {
    return (
      <div className='App'>
        <div className='wrap'>
          <div className='firstRow'>
            <CalculatorDisplay displayStyle='display' text={this.state.total} />
          </div>
          <div className='main'>
            <div className='leftSide'>
              <div className='clearButton'>
                <ActionButton buttonStyle='clear' text='clear' />
              </div>
              <div className='sevenThroughNine'>
                <NumberButton
                  buttonStyle='number'
                  text='7'
                  singleClickHandler={this.singleClickHandler}
                />
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
              <NumberButton buttonStyle='button' text='&divide;' />
              <NumberButton buttonStyle='button' text='&times;' />
              <NumberButton buttonStyle='button' text='-' />
              <NumberButton buttonStyle='button' text='+' />
              <NumberButton buttonStyle='button' text='=' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
