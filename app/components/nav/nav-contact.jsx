import React, {Component} from 'react';
import ContactForm from 'ContactForm';

// import styles;
import "style-loader!css-loader!sass-loader!./nav.scss";


function NavigationContact(props) {
    return(
        <div className="nav">
            <nav className="nav-contact">
                <div className="nav-contact--container">
                    <div className="nav-contact--wrapper">
                        <div className="nav-contact--left">
                            <div className="hello">
                                <p className="title"> Hello </p>
                                <div>
                                    <p><span> contact me for help with your next project or just say hi </span></p>
                                </div>

                                <div>
                                    <p><a href="mailto:ziaulsarker@gmail.com" target="_blank">ziaulsarker@gmail.com</a></p>
                                    <p><a href="tel:6462837989" target="_blank"> +1 646.283.7989</a></p>
                                </div>
                                <div>
                                    <p>New York </p>
                                    <p>Queens, NY 11374 </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="nav-contact--right">
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavigationContact;

