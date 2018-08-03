import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burguer from '../../components/Burguer/Burguer';
import Buildcontrols from '../../components/Burguer/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientsHandler = (type) => {
        if(this.state.ingredients[type] >= 3){
            return;
        }
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = this.state.ingredients;
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});                
    }

    removeIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedIngredients = {
                ...prevState.ingredients
            };
            if (updatedIngredients[type] === 0){
                return;
            }
            updatedIngredients[type] -= 1;
            return({
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
            });         
        })            
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients}/>
                <Buildcontrols 
                    ingredientAdded={this.addIngredientsHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurguerBuilder;