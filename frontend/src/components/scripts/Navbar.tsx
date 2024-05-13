import path from "path";
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" title='Home'>Home</Link>
                    </li>
                    <li>
                        <Link to="/" title='Home'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/" title='Home'>Contact Us</Link>
                    </li>

                </ul>
            </nav>
        </>
    )

}


export default Navbar;