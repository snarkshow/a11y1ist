import React, { Component } from 'react';
import firebase from './firebase';
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './Header.js';
import VegButtons from './VegButtons.js';
import FruitButtons from './FruitButtons.js';
import ProteinButtons from './ProteinButtons.js';
import List from './List.js';
// import Clear from './Clear.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      // vegetables: [],
    }
  }
  function() {
  scroll.scrollToBottom();
}


  render(){
    return(
      <div>
        <div className="AppScreen">
          <Header />
          <div className="Buttons">
            <VegButtons />
            <FruitButtons />
            <ProteinButtons />
          </div>
        </div>
        <div className="ListScreen">
          <List />

          <Link
            to="AppScreen">Link here!</Link>
        </div>
       

      </div>
    );
  }

  }




export default App;
