import React, { Component } from 'react';
import firebase from './firebase';

class Button extends Component {

    render() {
        return (
            <div className="List">
                {this.props.ingredients.map((ingredient, index) => {
                    return <button className="groceryButton" key={index} onClick={this.props.handleClick}>{ingredient}</button>
                })}

            </div>
        );
    }
}
export default Button;