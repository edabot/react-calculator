import React, { Component } from 'react';
import './App.css';

class KeyboardInput extends Component {

    handleKeyDown = (event) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event)
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componenentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

  render() {
    return null
  }
}

export default KeyboardInput;
