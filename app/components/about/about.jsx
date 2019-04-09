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
            <div className="about" id="about">
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
                                <p>Hey, I'm Ziaul. Front End Developer residing in the great city of New York. Stuck in an infinite loop of learning, creating, and growing. I'm very passionate about programing, it has opened my eyes to new ways of thinking and doing. The more I learn, the more I realize there is so much more I still dont know yet. I believe the learning process for a developer is a never ending journey. <br></br><span> #juniordevforlife </span></p>
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
                            <svg id="html" ></svg>
                            <p>HTML</p>
                        </div>

                        <div className="skill">
                            <svg id="css" ></svg>
                            <p>CSS</p>
                        </div>

                        <div className="skill">
                            <svg id="js" ></svg>
                            <p>JS</p>
                        </div>

                        <div className="skill">
                            <svg id="python" ></svg>
                            <p>python</p>
                        </div>

                        <div className="skill">
                            <svg id="php" ></svg>
                            <p>PHP</p>
                        </div>

                        <div className="skill">
                            <svg id="scss" ></svg>
                            <p>SCSS / LESS</p>
                        </div>


                        <div className="skill">
                            <svg id="react" ></svg>
                            <p>React / Redux</p>
                        </div>

                        <div className="skill">
                            <svg id="node" ></svg>
                            <p>Node / NPM</p>
                        </div>

                        <div className="skill">
                            <svg id="webpack" ></svg>
                            <p>webpack / gulp</p>
                        </div>

                        <div className="skill">
                            <svg id="seo" ></svg>
                            <p>SEO</p>
                        </div>
                        
                        <div className="skill">
                            <svg id="wordpress" ></svg>
                            <p>Wordpress</p>
                        </div>

                        <div className="skill">
                            <svg id="passion" ></svg>
                            <p className="bold-text">Passion To Learn</p>
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
                textSize: .65,
                waveColor: "#324D5C",
                waveHeight: ( randomWaveHeight > .009 && randomWaveHeight > .7) ? .05 : randomWaveHeight
            }


            let settings = {
                ...liquidFillGauge.liquidFillGaugeDefaultSettings(),
                ...customDefaultSettings,
                ...config
            };

            let gauge = liquidFillGauge.loadLiquidFillGauge(eleTarget, percent, settings);

            window.addEventListener("resize", e => {
                gauge.update(percent);
                console.log("updated gauge translate");
            })
            return gauge;
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
            waveTextColor: "#324D5C",
            circleColor: "#fff",
            textSize: 1
        });



    }   
}


export default About;