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
                    lorem ipsum dolor sit amet, lorem dolor ipsum dit somet som nut is door
                    lorem ipsum dolor sit amet, lorem dolor ipsum dit somet som nut is door 
                    lorem ipsum dolor sit amet, lorem dolor ipsum dit somet som nut is door 
                    lorem ipsum dolor sit amet, lorem dolor ipsum dit somet som nut is door 
                    lorem ipsum dolor sit amet, lorem dolor ipsum dit somet som nut is door 
                </p>
                <Link to={'/contact'} className="about-contact-link">
                  <button className="about-contact-button">Contact</button>
                </Link>
            </>
        )
    }
}

export default About