import React, { useState} from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
    const [isNavCollapsed, setNavCollapsed] = useState(true);

    const handleToggleNav = () => {
        setNavCollapsed(!isNavCollapsed);
    };

    const handleLinkClick = () => {
        setNavCollapsed(true); // Close the navbar when a link is clicked
    };

    console.log("Header rendered")
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-bg1 fixed-top">
            <div className="container-fluid">
            <h1 className="text-left fs-1 bordered-text">Oscar Rendon</h1>
            <button className="navbar-toggle rounded-pill d-lg-none text-left" type="button" data-bs-toggle="collapse"
            onClick={handleToggleNav} 
         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse text-center fs-4 bordered-text" ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-link text-white" aria-current="page" activeClassName="active" onClick={handleLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link text-white" activeClassName="active" onClick={handleLinkClick}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/Resume" className="nav-link text-white" activeClassName="active" onClick={handleLinkClick}>Resume</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-white" activeClassName="active" onClick={handleLinkClick}>Contact</NavLink>
            </li>
            </ul>
            </div>
            </div>
        </nav>
        </header>
    );
    };

export default Header;