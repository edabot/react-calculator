import React, { Component } from 'react';
import './App.css';

class History extends Component {

    showHistory() {
        return this.props.history.map( item => {
            return (
                <div key={item.number}>
                    { item.operator + ' ' + item.number }
                </div>
            )
        })
    }

  render() {
    return (
      <div className="App">
        { this.showHistory() }
      </div>
    );
  }
}

export default History;
