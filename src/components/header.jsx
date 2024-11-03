import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    console.log("Header rendered")
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-bg1">
            <div className="container-fluid">
            <h1 className="navbar-brand col-2 text-white">Oscar Rendon</h1>
            <button className="navbar-toggle custom-bg2 rounded-pill d-lg-none" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link active text-white" aria-current="page">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className="nav-link text-white">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/Resume" className="nav-link text-white">Resume</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">Contact</Link>
            </li>
            </ul>
            </div>
            </div>
        </nav>
        </header>
    );
    };

export default Header;