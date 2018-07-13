import React, { Component } from 'react';

import Person from './Person/Person';

class persons extends Component{
  constructor(props){
    super (props);
    console.log(props);
    this.lastPersonRef = React.createRef();    
  }

  componentDidMount(){
    this.lastPersonRef.current.focus();
  }

  render(){
    return  this.props.persons.map((person, index) => {  // Maping an array into an array to output list
      return <Person 
        name={person.name} 
        age={person.age}
        position={index}
        ref={this.lastPersonRef}
        authenticated={this.props.isAuthenticated}
        key={person.id}      // The key value helps react to update only the components that have changed
        click={() => this.props.clicked(index)}
        change={(event) => this.props.changed(event, person.id)}/>
    });
  }   
} 

export default persons;