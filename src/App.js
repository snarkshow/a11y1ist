import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header.js';
import VegButtons from './VegButtons.js';
import List from './List.js';
import Clear from './Clear.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      // vegetables: [],
    }
  }

  render(){
    return(
      <div>
        <Header />
        <VegButtons />
        <List />
      </div>
    );
  }

  }




export default App;
