import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  nameChangeHandler = (event, id) => {
    const indexPerson = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[indexPerson]
    };

    person.name = event.target.value; // Updates person name.

    const persons = [...this.state.persons];
    persons[indexPerson] = person;

    this.setState({ persons: persons })
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

    let persons = null;    

    if(this.state.showPersons){
      persons = (     // the most optimal and elegat way to output conditional content: The JS way.        
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />         
          </div>          
      )      
    }

    return (
        <div className={classes.App}>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}            
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Welcome to my React App"));
  }
}

export default App;