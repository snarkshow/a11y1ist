import React, { Component} from 'react';
import firebase from './firebase';
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './Header.js';
import Button from './Button.js';
import QuickNav from './QuickNav';
// import CurrentDate from './CurrentDate.js';
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
        const buttonValue = event.target.textContent;
        const dbRef = firebase.database().ref(`savedItems`);
        dbRef.push(buttonValue);

	}

	scrollUp = () => {
		scroll.scrollMore(-100);
	}
	scrollDown = () => {
		scroll.scrollMore(100);
	}
	

  render(){
    return(
		<div className="App">
			<header>
				<Header />
			</header>
			<main className="contentSection">
				<section className="AppScreen" id="AppScreen">

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
								tabindex={this.tabIndex}
							/>
						</div>
						<div className="proteinList">
							<Button
								ingredients={this.state.protein}
								handleClick={this.handleClick}
							/>
						</div>
					</div>
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


				</section>
				<section className="ListScreen" id="ListScreen">
					<div className="paper">
						<div className="pattern">
							<div className="content">
								{/* <CurrentDate /> */}
								
								<QuickNav/>
								<List />

								<Link
									tabIndex="0"
									className="BackToTop"
									to="AppScreen"
									duration={1000}
									offset={-70}
									smooth={true}
									href="#AppScreen"
							
								>
									Take me back to the top
								</Link>
							</div>
						</div>
					</div>


				</section>
				
			</main>

				
      {/* <button tabIndex="0"> */}
            
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
