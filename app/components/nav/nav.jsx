import React, {Component} from 'react';

// import styles;
import "style-loader!css-loader!sass-loader!./nav.scss";
import bg from "../../../public/img/contact-bg.jpg";

import path from "path";

const Navigation = (props) => {

    let contactModalBgStyles = {
        backgroundImage:  `url('${ path.resolve(__dirname, "/public/img/contact-bg.jpg" )}')`
    }

    return(

        <header className="header" id="header">
            <nav className="nav">
                <div className="nav-left">
                    <p className="full-name h1">
                        <a href="#header">
                            <span className="first-name">Z</span>
                            <span className="last-name">S</span>
                        </a>
                    </p>
                </div>
                <div className="nav-right">
                    <ul>
                        <li className="nav-item"> <a href="#about">About </a> </li>
                        <li className="nav-item"> <a href="#projects">Projects </a> </li>
                    </ul>
                    <button className="contact-btn" data-toggle="modal" data-target="#myModal">
                        <span className="copy">Contact Me </span> 
                        <span className="icons"> 
                            <span className="mail fas fa-envelope"> </span>
                            <span className="phone fas fa-mobile-alt"></span>
                        </span>
                    </button>
                </div>

            </nav>

            <div className="modal fade contact-modal" id="myModal">
                <button type="button" className="close contact-modal-close" data-dismiss="modal">&times;</button>
                <div className="modal-dialog contact-modal-container modal-md">
                    <div className="modal-content contact-modal-wrapper">

                        <div className="modal-body contact-modal-body">
                            <div className="modal-body--wrapper">
                                <div className="left">
                                    <p className="h1" style={ contactModalBgStyles }>Ziaul Sarker</p>
                                </div>

                                <div className="right">
                                    <div>
                                        <a href="mailto:ziaulsarker@gmail.com">                            
                                            <span className="mail fas fa-envelope"></span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="tel:6462837989">
                                            <span className="phone fas fa-mobile-alt"></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navigation;

