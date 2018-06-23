import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h4 onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} /> {/*Two way binding example*/}
        </div>    
    )
};

export default person