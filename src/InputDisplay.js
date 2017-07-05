import React, { Component } from 'react';
import './App.css';

class InputDisplay extends Component {

    combinedInput() {
        let number = this.props.currentInput || 0
        return this.props.operator + ' ' + number;
    }

  render() {
    return (
      <div className="input">
       { this.combinedInput() }
      </div>
    );
  }
}

export default InputDisplay;
