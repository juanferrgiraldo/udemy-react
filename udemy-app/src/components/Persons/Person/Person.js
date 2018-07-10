import React from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

const person = (props) => {  
    return (
        <Aux>
            <h4 onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} /> {/*Two way binding example*/}
        </Aux>    
    )
};

export default withClass(person, classes.Person);