import React, { Component } from 'react';
import './App.css';
import History from './History';
import InputDisplay from './InputDisplay';
import KeyboardInput from './InputArea';

const Operators = ['/', '*', '+', '-']

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [],
            currentInput: '',
            operator: '',
            counter: 0
        }
    }

    updateCurrentInput( newInput ) {
        this.setState( { currentInput: newInput } )
    }

    handleOperator( operator ) {
        let historyItem = { operator: this.state.operator, number: this.state.currentInput, id: this.state.counter}
        let newHistory = this.state.history.concat([historyItem]);
        this.setState({history: newHistory, currentInput: '', operator: operator, counter: this.state.counter + 1 })
    }

    inputDot() {
        if ( !this.state.currentInput.includes('.') ) {
            this.setState({ currentInput: this.state.currentInput + '.' })
        }
    }

    deleteLastChar() {
        let length = this.state.currentInput.length;
        if ( length > 0 ) {
            this.setState({ currentInput: this.state.currentInput.substring(0, length - 1)})
        }
    }

    removeItem( id ) {
        let editedHistory = this.state.history.filter( item => { return item.id !== id } )
        this.setState({history: editedHistory})
    }

    handleKeyDown(event) {
        let { key } = event
        if ( key === '0' && this.state.currentInput === '' ) {
            event.preventDefault()
        } else if ((/\d/).test(key)) {
            event.preventDefault()
            this.setState({currentInput: this.state.currentInput + key})
        } else if ( key === '.') {
            event.preventDefault()
            this.inputDot()
        } else if ( key === "Backspace" ) {
            event.preventDefault()
            this.deleteLastChar()
        } else if (Operators.includes(key)) {
            this.handleOperator(key)
        }

    }

    calculateTotal( calculation ) {
        if ( calculation.length === 0 ) {return null}
        let fullCalculation = calculation.concat([{operator: this.state.operator, number: this.state.currentInput}])
        let total = parseFloat(fullCalculation[0].number)
        for ( let i = 1; i < fullCalculation.length; i++ ) {
            if ( fullCalculation[i].number === '' ) { break }
            let number = parseFloat(fullCalculation[i].number)
            let operator = fullCalculation[i].operator
            if ( operator === '+' ) {
                total += number
            } else if ( operator === '-' ) {
                total -= number
            } else if ( operator === '*' ) {
                total *= number
            } else if ( operator === '/' ) {
                total /= number
            }
        }

        return '= ' + total;
    }

  render() {
    return (
      <div className="App">
        <History history={this.state.history} removeItem={this.removeItem.bind(this)}/>
        <InputDisplay currentInput={ this.state.currentInput } operator={this.state.operator}/>
        <div className="results">
        { this.calculateTotal(this.state.history) }
        </div>
        <KeyboardInput onKeyDown={event => this.handleKeyDown(event)}/>
      </div>
    );
  }
}

export default Calculator;
