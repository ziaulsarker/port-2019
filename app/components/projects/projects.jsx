import React, {Component} from 'react';
import path from "path";

// import styles
import "style-loader!css-loader!sass-loader!./projects.scss";

const projects = [
    {
        name : `Health Coach Institute`,
        link : `https://www.healthcoachinstitute.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/hci.png" )}`,
            alt : `Health Coach Institute`
        },
        animationDelay : ".3s"
    },

    {
        name : `Sentinel Data Centers`,
        link : `https://www.sentineldatacenters.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/sentinel.png" )}`,
            alt : `Sentinel Data Centers`
        },
        animationDelay : ".6s"
    },

    {
        name : `Buechel Stone`,
        link : `https://www.buechelstone.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/buechel.png" )}`,
            alt : `Buechel Stone`
        },
        animationDelay : ".9s"
    },

    {
        name : `Navatar Group`,
        link : `https://www.navatargroup.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/navatar.png" )}`,
            alt : `Navatar Group`
        },
        animationDelay : ".3s"
    },

    {
        name : `HCI Live`,
        link : `https://www.hcilive.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/hcilive.png" )}`,
            alt : `HCI Live`
        },
        animationDelay : ".6s"
    },

    {
        name : `Functional Nutrition Alliance`,
        link : `https://signup.fxnutrition.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/fxna.png" )}`,
            alt : `Functional Nutrition Alliance`
        },
        animationDelay : ".9s"
    },

    {
        name : `Wilbur Ellis`,
        link : `https://www.wilburellis.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/wilbur.png" )}`,
            alt : `Wilbur Ellis`
        },
        animationDelay : ".3s"
    },

    {
        name : `National Holdings`,
        link : `https://www.yournational.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/national.png" )}`,
            alt : `National Holdings`
        },
        animationDelay : ".6s"
    },

    {
        name : `Gilbert Displays`,
        link : `http://www.gilbertexperience.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/gilbert.png" )}`,
            alt : `Gilbert Displays`
        },
        animationDelay : ".9s"
    },

    {
        name : `Be Ready Long Island`,
        link : `https://www.bereadyli.org/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/bereadyli.png" )}`,
            alt : `Be Ready Long Island`
        },
        animationDelay : ".3s"
    },

    {
        name : `Github Cards`,
        link : `https://git-cards.herokuapp.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/git.png" )}`,
            alt : `Github Cards`
        },
        animationDelay : ".6s"
    }
];


const Card = props => {
    return(
        <div className="card wow fadeInUP" data-wow-delay={ props.animationDelay }>
            <div className="card-wrapper">
                <div className="card-front">
                    <img src={ props.img.src } alt={props.img.alt}></img>
                </div>
                <div className="card-back">
                    <div className="card-back-wrapper">
                        <a href={props.link} target="_blank">
                            <h5> { props.name } </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = props => {

    let loopCards = cards => {
        return cards.map( (card, key) =>{
            return <Card key={key} {...card}></Card>;
        })
    }

    const wowConfig = {
    
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    
    }

    const animateOnScroll = new WOW();

    animateOnScroll.init();

    return(
        <div id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-wrapper">
                    <div className="project-heading">
                        <h2>Projects</h2>
                    </div>
                    <div className="project-section">
                        <div className="project-section-wrapper">
                            { loopCards(projects) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;