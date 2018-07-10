import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor( props ){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <Aux>
                <h4 onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</h4>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} /> {/*Two way binding example*/}
            </Aux>    
        )
    }    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person, classes.Person);