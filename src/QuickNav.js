import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class QuickNav extends Component {

    scrollUp = () => {
        scroll.scrollMore(-100);
    }
    scrollDown = () => {
        scroll.scrollMore(100);
    }

    render() {
        return (
            <div className="scrollButtons">
                <a onClick={this.scrollUp}>🔼</a>
                <a onClick={this.scrollDown} >🔽</a>
            
            </div>
        );
    }
}


export default QuickNav;
