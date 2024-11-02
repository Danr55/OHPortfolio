import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    console.log("Header rendered")
    return (
        <header>
        <nav>
            <h1>Oscar Rendon</h1>
            <ul>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    };

export default Header;