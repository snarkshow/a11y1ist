import React from 'react';
import h1logo from './h1logo.svg';
import clipboard2 from './clipboard2.svg';

const Header = () => {
    return (
        <div>
            <header>
                <h1>
                    <img src={h1logo} alt="ally list logo" aria-label="ally list logo"/>
                </h1>
            </header>
            
        </div>
    )
} 

export default Header;