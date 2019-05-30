import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header.js';
import List from './List.js';
import Clear from './Clear.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      vegetables: [],
    }
  }

  handleClick=(event)=>{
    //identify the button that was clicked
    //locate text value in the button
    //push to firebase
    const buttonValue = event.target.textContent;
    const dbRef = firebase.database().ref(`savedItems`);
    dbRef.push(buttonValue);
    // const users = firebase.database().ref('users');
    console.log(`I've been clicked`, buttonValue)
  }

  removeBook = (items) => {
    const dbRef = firebase.database().ref(`savedItems`);
    dbRef.child(items).remove();
  }

  render(){
    return(
      <div>
        <Header />
        {this.state.vegetables.map((veg) => {
          return <button onClick={this.handleClick}>{veg}</button>
        })}
        <List />
      </div>
    );
  }
  componentDidMount(){
    const dbRef = firebase.database().ref("allGroceries");
    dbRef.on('value',(response)=>{
      const newState = [];
      const data = response.val();
      for (let key in data){
        newState.push(data[key]);
      }
      this.setState({
        vegetables: newState
      });
      // console.log(response.val());
    });
  }
}



export default App;
