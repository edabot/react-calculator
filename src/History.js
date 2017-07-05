import React, { Component } from 'react';
import './App.css';

class History extends Component {

    showHistory() {
        return this.props.history.map( item => {
            return (
                <HistoryItem key={item.id} removeItem={this.props.removeItem} item={item} />
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

class HistoryItem extends Component {

    removeItem() {
        this.props.removeItem(this.props.item.id)
    }

    render() {
        return (
            <div className='line-item'>
                { this.props.item.operator + ' ' + this.props.item.number + ' '}
                <span className='item-delete' onClick={this.removeItem.bind(this)}>x</span>
            </div>
        )
    }
}

export default History;
