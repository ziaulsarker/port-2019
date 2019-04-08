import React, { Component } from "react";

// import styles
import "style-loader!css-loader!sass-loader!./footer.scss";

const Footer = (props) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-wrapper">
                    <ul>
                        <li><a href="https://github.com/ziaulsarker" target="_blank"><span className="fab fa-github-square"></span></a></li>
                        <li><a href="https://www.linkedin.com/in/ziaul-sarker-58b11374/" target="_blank"><span className="fab fa-linkedin"></span></a></li>
                    </ul>
                    <p>&copy; 2019 Ziaul Sarker</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;