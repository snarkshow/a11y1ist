import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Child = ({ setFocus }) => {
    return (
        <div>
            <Link
                tabIndex="0"
                className="GetList"
                to="ListScreen"
                duration={1000}
                smooth={true}
               
                onClick={setFocus}
                // href="#ListScreen"
            >
                Get My List!
				</Link>
            <button >Focus First</button>
        </div>
    )
}

export default Child; 