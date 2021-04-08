import React from "react";
import tech from '../Assets/tech1.svg';
import html from '../Assets/html.svg';
import css from '../Assets/css.svg';
import js from '../Assets/js.svg';
import nodejs from '../Assets/nodejs.svg';
import php from '../Assets/php.svg';
import laravel from '../Assets/laravel.png';
import mysql from '../Assets/mysql.svg';
import python from '../Assets/python.svg';
import django from '../Assets/django.png';
import reactjs from '../Assets/reactjs.svg';
import vuejs from '../Assets/vuejs.png';
import bootstrap from '../Assets/bootstrap.png';
import tailwindcss from '../Assets/tailwindcss.svg';
import r from '../Assets/R.svg';
import powerbi from '../Assets/powerbi.png';
import mongodb from '../Assets/mongodb.png';
import './landing-page.css';

const LandingPage = () => {
    return ( 
        <React.Fragment>
            <div className="landing-page">
                <div className="left">
                    <h1>Salut 👋🏾, moi c'est Mathiam</h1>
                    <p>Je m'appelle Mathiam Mbow, j'ai 22 ans et je suis passioné du developpement web, de la conception de base de données, de la programmation et de l'analyse de données.</p>
                    <img src={tech} alt="" />
                </div>
                <div className="right" id="tech">
                    <h2>Ce que je fais...</h2>
                        <div className="tech">
                            <img src={html} alt=""/>
                            <img src={css} alt=""/>
                            <img src={js} alt=""/>
                            <img src={nodejs} alt=""/>
                            <img src={reactjs} alt=""/>
                            <img src={vuejs} alt=""/>
                            <img src={php} alt=""/>
                            <img src={mysql} alt=""/>
                            <img src={mongodb} alt=""/>
                            <img src={laravel} alt=""/>
                            <img src={python} alt=""/>
                            <img src={django} alt=""/>
                            <img src={bootstrap} alt=""/>
                            <img src={tailwindcss} alt=""/>
                            <img src={r} alt=""/>
                            <img src={powerbi} alt=""/>

                        </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default LandingPage;