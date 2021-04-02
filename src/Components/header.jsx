import React from "react";
import './header.css';
import logo from '../Assets/logo.png';

const Header = () => {
    return ( 
        <React.Fragment>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <nav className="navlinks">
                    <a href="/">ACCUEIL</a>
                    <a href="#tech">TECHNOLOGIES</a>
                    <a href="#experience">EXPERIENCES PROFESIONNELLES</a>
                    <a href="#project">PROJETS</a>
                    <a href="#contact">CONTACTS</a>
                </nav>
            </div>
        </React.Fragment>
     );
}

export default Header;