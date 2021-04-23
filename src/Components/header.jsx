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
                    <a href="/">Accueil</a>
                    <a href="#tech">Technologies</a>
                    <a href="#experience">Experiences professionnelles</a>
                    <a href="#formation">Formations</a>
                    <a href="#contact">Contacts</a>
                </nav>
            </div>
        </React.Fragment>
     );
}

export default Header;