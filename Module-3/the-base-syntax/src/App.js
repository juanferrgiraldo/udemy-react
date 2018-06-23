import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {
  state = {
    userNames: [
      {userName: "Juanferr"},
      {userName: "Andrea"},
      {userName: "Daniela"}
    ]
  }

  switchUserNameHandler = (newUsername) =>{
    this.setState({
      userNames: [
        {userName: newUsername},
        {userName: "Andre"},
        {userName: "Dani"}
      ]
    })
  }

  changeUsernameHandler = (event) => {
    this.setState({
      userNames: [
        {userName: "Juanfer"},
        {userName: event.target.value},
        {userName: "Dani"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <UserInput userName={this.state.userNames[1].userName} change={this.changeUsernameHandler}></UserInput>
        <UserOutput userName={this.state.userNames[0].userName}></UserOutput>
        <UserOutput userName={this.state.userNames[1].userName}></UserOutput>
        <UserOutput userName={this.state.userNames[2].userName}></UserOutput>
        <button
          onClick={() => this.switchUserNameHandler('Juanfis')}>
          Switch Username
        </button>
      </div>
    );
  }
}

export default App;
