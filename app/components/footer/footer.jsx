import React, { Component } from "react";

// import styles
import "style-loader!css-loader!sass-loader!./footer.scss";

const Footer = (props) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-wrapper">
                    <p>&copy; 2019 Ziaul Sarker</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;