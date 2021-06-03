import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import portraitImage from '../portfolio-resources/portrait-image.jpg'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
              <div className="portrait-container">
                  <img src={portraitImage} alt="portrait" className="portrait-image"/>
              </div>
                <h2 className="about-title">About Me</h2>
                <p className="about-para">
                    My name is Nicholas Reid, I am 24 years old and have been learning to program for 3 years now.
                    Coding started out as an interest that I never thought I'd be able to do anything with. 
                    I learned to make simple web pages and was exposed to JavaScript.
                    Learning JavaScript satisfied all the things I always loved about math, working through problems is very rewarding for me.
                    The long list of tools that JavaScript provided allowed for me to express creativity alongside my problem solving skills.
                    I was hooked, I have continued to teach myself through free resources like freeCodeCamp and some paid resources like codeCademy Pro.
                    I have also seeked out mentorship from developers in the industry to fill gaps in my understanding.
                    The confidence I have built in my abilities has led me to take the next step and develop a career.
                    Along with personal projects, I currently work on making websites and applications for friends, family, and local buisnesses to help them gain an online presense.
                    Contact me below with job opportunities, or project proposals.
                </p>
                <Link to={'/contact'} className="about-contact-link">
                  <button className="about-contact-button">Contact</button>
                </Link>
            </>
        )
    }
}

export default About