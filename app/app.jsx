import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// global Styles;

import "style-loader!css-loader!sass-loader!../public/styles/global.scss";

// components
import Nav from "Nav";
import Hero from "Hero";
import About from "About";




const Portfolio = props => {

    return(
        <Router>
            <div className="portfolio-container">
                <Nav></Nav>
                <main>
                    <Hero></Hero>
                    <About></About>
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