import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Juan", age: "21"},      
      {name: "Daniela", age: "23"},
      {name: "Andrea", age: "21"}
    ],
    otherState: [
      {name: "This is another state"}
    ]
  }

  switchNameHandler = (newName) => {
    // DON'T DO  THIS: this.state.persons[0].name = 'Juanfis';
    this.setState({
      persons: [
        {name: newName, age: "21"},
        {name: "Daniela", age: "23"},
        {name: "Andrea", age: "21"}        
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Juan", age: "21"},
        {name: event.target.value, age: "23"},
        {name: "Andrea", age: "21"}        
      ]
    })
  }

  render() {
    // Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'    
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React App</h1>          
        </header>       
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Juanfis')}> {/*Best way to pass methods by reference*/}
          Hobbies: Code and skateboarding.
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}>
          Hobbies: Read and draw.
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
          Hobbies: Read and draw.
        </Person>
        {/*<Person name={this.state.otherState[0].name} /> --> not a properly way to make it*/} 
        <button 
          onClick={() => this.switchNameHandler('Juanfis!')}
          style={style}>
          Switch Name
        </button> {/*Second way to pass methods by reference, not recommended, inefficient*/}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Welcome to my React App"));
  }
}

export default App;
