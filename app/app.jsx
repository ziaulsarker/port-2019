import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// global Styles;

import "style-loader!css-loader!sass-loader!../public/styles/global.scss";

// components
import NavigationContact from "NavigationContact";

function toggleClassOnClick(query, className){
    document.querySelector(query).classList.toggle(className);
}


function initContactNav(event){
    
    toggleClassOnClick(".nav-contact--trigger", "init");
    toggleClassOnClick(".nav-contact--trigger .open", "init")
    toggleClassOnClick(".nav-contact--trigger .close", "init")
    toggleClassOnClick(".nav", "init")

}


function NavTrigger(){
    return(
        <p className="nav-contact--trigger" onClick={initContactNav}> 
            <span className="open"> Contact </span> 
            <span className="close"> Close </span> 
        </p>
    )
};





const Portfolio = props => {
    return(
        <Router>
            <div className="portfolio-container">
                <NavTrigger></NavTrigger>
                <NavigationContact></NavigationContact>
                <main>
                    <Route path="/" 
                        render={ 
                            () => {
                                return(
                                    true
                                );
                            } 
                        }>
                    
                    </Route>
                </main>

            </div>
        </Router>
    )
}


ReactDOM.render(
    <Portfolio />,
    document.getElementById("portfolio")
);


console.log("testing port");