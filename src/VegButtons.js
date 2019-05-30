import React, { Component} from 'react';
import firebase from './firebase';

class VegButtons extends Component {
    constructor() {
        super();
        this.state = {
            vegetables: [],
        }
    }
    handleClick = (event) => {
        //identify the button that was clicked
        //locate text value in the button
        //push to firebase
        const buttonValue = event.target.textContent;
        const dbRef = firebase.database().ref(`savedItems`);
        dbRef.push(buttonValue);
        // const users = firebase.database().ref('users');
        console.log(`I've been clicked`, buttonValue)
    }

    render() {
        return (
            <div className="vegetableList">
            
                {this.state.vegetables.map((veg, index) => {
                    return <button key={index} onClick={this.handleClick}>{veg}</button>
                })}
             
            </div>
        );
    }

    componentDidMount() {
        const dbRef = firebase.database().ref("allVeg");
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            }
            this.setState({
                vegetables: newState
            });
            // console.log(response.val());
        });
    }
}
export default VegButtons;