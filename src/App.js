import React, { Component} from 'react';
import firebase from './firebase';
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './Header.js';
import Button from './Button.js';
import List from './List.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      vegetables: [],
      fruit: [],
      protein: []
    }
  }
 
    handleClick = (event) => {
        //identify the button that was clicked
        //locate text value in the button
        //push to firebase
        const buttonValue = event.target.textContent;
        const dbRef = firebase.database().ref(`savedItems`);
        dbRef.push(buttonValue);

    }



  render(){
    return(
      <div>
        <div className="AppScreen" id="AppScreen">
			<Header />
			<div className="Buttons">
				<div className="vegetableList">
					<Button
						ingredients={this.state.vegetables}
            handleClick={this.handleClick}
            tabindex={this.tabIndex}
					/>
				</div>
		
				<div className="fruitList">
					<Button
					ingredients={this.state.fruit}
          handleClick={this.handleClick}
          
					/>
				</div>
					<div className="proteinList">
					<Button
					ingredients={this.state.protein}
					handleClick={this.handleClick}
					/>
				</div>
			</div>
      {/* <button tabIndex="0"> */}
            <Link
              tabIndex="0"
              className="GetList"
              to="ListScreen"
              duration={1000}
              smooth={true}
              onSubmit={this.keyPress}
              href="#ListScreen"
            >
              Get My List!
			</Link>
  
			
		</div>
		<div className="ListScreen" id="ListScreen">
			<List />
          {/* <button > */}
            <Link
              tabIndex="0"
              className="BackToTop"
              to="AppScreen"
              duration={1000}
              offset={-70}
              smooth={true}
              href="#ListScreen"

            >
              Take me back to the top
			</Link>
      {/* </button> */}
			
		</div>
      </div>
       
    );
  }
  componentDidMount() {

    const dbRefVegetables = firebase.database().ref("allVeg");
    dbRefVegetables.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      this.setState({
        vegetables: newState
      });
  
    });

    const dbRefFruit = firebase.database().ref("allFruit");
    dbRefFruit.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      this.setState({
        fruit: newState
      });

    });

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

    });
  }

  }




export default App;
