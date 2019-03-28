import React, {Component} from "react";
import * as d3 from "d3";
import path from "path";
import Vivus from "vivus";


// import styles
import "style-loader!css-loader!sass-loader!./about.scss";




class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }


    render(){
        const expertise = {
            web: {
                svg: `${ path.resolve(__dirname, "/public/img/web.svg") }`
            },
            responsive: {
                svg : `${ path.resolve(__dirname, "/public/img/responsive.svg") }`
            },

            love: {
                svg : `${ path.resolve(__dirname, "/public/img/love.svg") }` 
            }
        }

        return(
            <div className="about">
                <div className="about-container">
                    <div className="about-wrapper">
                        <div className="about-img">
                            <div>
                                <img src={`${ path.resolve(__dirname, "/public/img/me.jpeg") }`}></img>
                            </div>
                        </div>
                        <div className="about-copy">
                            <div className="text">
                                <h2> About Me </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut purus sit amet tortor tempor tristique eget in tellus. Vestibulum ut gravida quam, ornare varius metus. Pellentesque iaculis leo et neque vehicula, ut hendrerit augue mattis. Quisque ac sem condimentum, scelerisque neque quis, dignissim dui. Nam ultrices massa vitae efficitur tristique. Duis quis felis eget tortor luctus finibus at vel odio. Curabitur ullamcorper, lacus ut lacinia semper, nibh sapien consectetur lorem, nec faucibus sapien quam eget sapien</p>
                            </div>
                            <div className="expertise">
                                <div>
                                    <object id="responsive-svgas" type="image/svg+xml" data={ expertise.responsive.svg }></object>
                                    <p>Responsive Design</p>
                                </div>

                                <div>
                                    <object id="web-svg" type="image/svg+xml" data={ expertise.web.svg }></object>
                                    <p>W3 Web Standards</p>
                                </div>

                                <div>
                                    <object id="love-svg" type="image/svg+xml" data={ expertise.love.svg }></object>
                                    <p>Code With LOVE</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){

    }   
}


export default About;