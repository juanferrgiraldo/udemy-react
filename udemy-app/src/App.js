import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Juan", age: "21"},      
      {id: '2', name: "Daniela", age: "23"},
      {id: '3', name: "Andrea", age: "21"}
    ],
    otherState: [
      {name: "This is another state"}
    ],
    showPersons: true
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;   // Bad practice, because the objects an arrays are reference types, so we're mutating the original data.
    // const persons = this.state.persons.slice(); // Creates a copy of array and then updates the state.
    const persons = [...this.state.persons];       // The same of slice operator but with a modern JS.
    persons.splice(personIndex, 1);      // Removes one person from the array.
    this.setState({persons: persons});
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

    let persons = null;

    if(this.state.showPersons){
      persons = (     // the most optimal and elegat way to output conditional content: The JS way.
        <div>
          {this.state.persons.map((person, index) => {  // Maping an array into an array to output list
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id}       // The key value helps react to update only the components that have changed
              click={() => this.deletePersonHandler(index)}/>
          })}            
          </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React App</h1>          
        </header>                
        <button 
          onClick={this.togglePersonsHandler}
          style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Welcome to my React App"));
  }
}

export default App;
