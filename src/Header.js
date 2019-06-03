import React from 'react';
import h1logo from './h1logo.svg';
import clipboard2 from './clipboard2.svg';

const Header = () => {
    return (
        <div>
            <header>
                <h1 aria-label="ally list logo">
                    <img src={h1logo} alt="ally list logo"/>
                </h1>
            </header>
            
        </div>
    )
} 

export default Header;