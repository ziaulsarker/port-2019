import React, {Component} from "react";
import path from "path";
import Vivus from "vivus";
import * as d3 from "d3";


// // import Liquid Fill Gauge;
import liquidFillGauge from "../../../public/scripts/liquidFillGauge.js";

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
                    <div className="about-info-wrapper">
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
                    <div className="about-skills-wrapper">

                        <div className="skill">
                            <svg id="html" width="100%" height="250"></svg>
                            <p>HTML</p>
                        </div>

                        <div className="skill">
                            <svg id="css" width="100%" height="250"></svg>
                            <p>CSS</p>
                        </div>

                        <div className="skill">
                            <svg id="js" width="100%" height="250"></svg>
                            <p>JS</p>
                        </div>

                        <div className="skill">
                            <svg id="python" width="100%" height="250"></svg>
                            <p>python</p>
                        </div>

                        <div className="skill">
                            <svg id="php" width="100%" height="250"></svg>
                            <p>PHP</p>
                        </div>

                        <div className="skill">
                            <svg id="scss" width="100%" height="250"></svg>
                            <p>SCSS / LESS</p>
                        </div>


                        <div className="skill">
                            <svg id="react" width="100%" height="250"></svg>
                            <p>React / Redux</p>
                        </div>

                        <div className="skill">
                            <svg id="node" width="100%" height="250"></svg>
                            <p>Node / NPM</p>
                        </div>

                        <div className="skill">
                            <svg id="webpack" width="100%" height="250"></svg>
                            <p>webpack / gulp</p>
                        </div>

                        <div className="skill">
                            <svg id="seo" width="100%" height="250"></svg>
                            <p>SEO</p>
                        </div>
                        
                        <div className="skill">
                            <svg id="wordpress" width="100%" height="250"></svg>
                            <p>Wordpress</p>
                        </div>

                        <div className="skill">
                            <svg id="passion" width="100%" height="250"></svg>
                            <p>Passion To Learn</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){



        let createGauge = (eleTarget, percent, config) => {

            let randomWaveHeight = Math.random();

            let customDefaultSettings = {
                waveTextColor: "#fff",
                textColor: "#324D5C",
                circleColor: "#324D5C",
                textSize: .5,
                waveColor: "#324D5C",
                waveHeight: ( randomWaveHeight > .009 && randomWaveHeight > .7) ? .05 : randomWaveHeight
            }

            console.log(customDefaultSettings.waveHeight);

            let settings = {
                ...liquidFillGauge.liquidFillGaugeDefaultSettings(),
                ...customDefaultSettings,
                ...config
            };

            let gauge = liquidFillGauge.loadLiquidFillGauge(eleTarget, percent, settings);
        }


        let html = createGauge("html", 90);
        let css =  createGauge("css", 88);
        let js =  createGauge("js", 82);
        let python =  createGauge("python", 69);
        let php =  createGauge("php", 73);
        let node =  createGauge("node", 70);
        let scss =  createGauge("scss", 80);
        let react = createGauge("react", 75);
        let webpack = createGauge("webpack", 75);
        let seo = createGauge("seo", 80);
        let wordpress = createGauge("wordpress", 85);
        let passion = createGauge("passion", 100, {
            textColor: "#324D5C",
            waveColor: "#fff",
            waveTextColor: "rgba(240,202,77, .9)",
            circleColor: "#fff"
        });


    }   
}


export default About;