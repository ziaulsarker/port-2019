import React, {Component} from 'react';
import path from "path";

// import styles
import "style-loader!css-loader!sass-loader!./projects.scss";

const projects = [
    {
        name : `Health Coach Institute`,
        link : `https://www.healthcoachinstitute.com/`,
        img : {
            src : `url('${ path.resolve(__dirname, "/public/img/hci.png" )}')`,
            alt : `Health Coach Institute`
        }
    },

    {
        name : `HCI Live`,
        link : `https://www.hcilive.com/`,
        img : {
            src : `url('${ path.resolve(__dirname, "/public/img/hcilive.png" )}')`,
            alt : `HCI Live`
        }
    },


];

console.log(projects[0].img.alt);


const Card = props => {
    return(
        <div className="card">
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
    )
}

const Projects = props => {

    let loopCards = cards => {
        return cards.map( (card, key) =>{
            return <Card key={key} {...card}></Card>;
        })
    }

    return(
        <div className="projects">
            <div className="projects-container container">
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
    )
}

export default Projects;