import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Calculator</h2>
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
