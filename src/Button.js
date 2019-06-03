import React, { Component } from 'react';

class Button extends Component {


    render() {
        return (
            <div className="List">
                {this.props.ingredients.map((ingredient, index) => {
                    return <button tabIndex={0} className="groceryButton" key={index} onClick={this.props.handleClick} ref={index === 0 ? this.myButtonRef : ''}>{ingredient}</button>
                })}

            </div>
        );
    }
}
export default Button;