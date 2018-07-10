import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    let btnClass = classes.Button;
    let assignedClasses = [];

    if (props.persons.length <= 2){
        assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        <Aux>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>         
            <br/>             
            <button 
                onClick={props.clicked}
                className={btnClass}>
                Toggle Persons
            </button>
        </Aux>       
    )
};

export default cockpit;