import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {  // Maping an array into an array to output list
        return <Person 
          name={person.name} 
          age={person.age}
          key={person.id}       // The key value helps react to update only the components that have changed
          click={() => props.clicked(index)}
          change={(event) => props.changed(event, person.id)}/>
      });

export default persons;