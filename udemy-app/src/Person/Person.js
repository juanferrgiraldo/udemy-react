import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }    
    return (
        <div className="Person" style={style}>
            <h4 onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} /> {/*Two way binding example*/}
        </div>    
    )
};

export default Radium(person)