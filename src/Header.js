import React from 'react';
import h1logo from './h1logo.svg';
import clipboard2 from './clipboard2.svg';

const Header = () => {
    return (
            <header>
                <h1>
                    <img src={h1logo} alt="ally list logo" aria-label="ally list logo"/>
                </h1>
                <div className="headerIntro">
                    <p>AllyList is an accessible grocery list builder. Hit "tab" to navigate, and use "enter" to select or remove items.</p>
                </div>
                <div className="skipLinks">
                    <a href="#AppScreen">Start building a list</a>
                    <a href="#ListScreen">Go to my current list</a>
                </div>
                
                
            </header>
            

    )
} 

export default Header;