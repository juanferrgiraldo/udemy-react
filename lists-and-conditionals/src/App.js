import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Validation from  './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteLetterHandler = (index) => {
    const charList = [...this.state.userInput];
    charList.splice(index, 1);
    const updateChartList = charList.join('');    // convert the array into a String again
    this.setState({userInput: updateChartList});
  }

  render() { 
    let charList = null;    

    if(this.state.userInput.length >= 0){
      charList = (
        <div>
          {this.state.userInput.split('').map((char, index) => {
            return <Char
          letter={char}
          key={index}
          click={() => this.deleteLetterHandler(index)}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to my React second task!</h1>      
        </header>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>

        <Validation textLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;
