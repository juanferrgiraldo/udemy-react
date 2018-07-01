import React from 'react';

import classes from './Cockpit.css';
import logo from '../../assets/logo.svg';

const cockpit = (props) => {

    let btnClass = '';
    let assignedClasses = [];

    if (props.persons.length <= 2){
        assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <header className={classes.CockpitHeader}>
                <img src={logo} className={classes.CockpitLogo} alt="logo" />
                <h1 className={classes.CockpitTitle}>{ props.appTitle }</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>         
            </header>
            <br/>             
            <button 
                onClick={props.clicked}
                className={btnClass}>
                Toggle Persons
            </button>
        </div>       
    )
};

export default cockpit;