import React, { Component } from 'react';
import firebase from './firebase';

class ProteinButtons extends Component {
    constructor() {
        super();
        this.state = {
            protein: [],
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
            <div className="proteinList">

                {this.state.protein.map((protein, index) => {
                    return <button className="groceryButton" key={index} onClick={this.handleClick}>{protein}</button>
                })}

            </div>
        );
    }

    componentDidMount() {
        const dbRefProtein = firebase.database().ref("allProtein");
        dbRefProtein.on('value', (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            }
            this.setState({
                protein: newState
            });
            // console.log(response.val());
        });
    }
}
export default ProteinButtons;