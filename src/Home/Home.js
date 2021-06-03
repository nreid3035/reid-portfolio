import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import bannerImage from '../portfolio-resources/banner-image.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
              <div className="banner-container">
                  <img src={bannerImage} alt="banner-image" className="banner-image"/>
              </div>
              <div className="home-content">
                  <p className="intro-para">Hello, I am Nicholas Reid and I am a Junior Web Developer out of Poughkeepsie, New York. Below are my relevant skills
                    as well as access to my portfolio. Please feel free to contact me with any project opportunities.
                  </p>
                  <ul className="skills-list">
                      <li className="skill">JavaScript</li>
                      <li className="skill">React</li>
                      <li className="skill">CSS</li>
                      <li className="skill">Node.js</li>
                      <li className="skill">PostgreSQL</li>
                  </ul>
              </div>
              <div className="home-buttons-container">
                  <Link to={'/portfolio'} className="home-button-link">
                    <button className="home-button">View Portfolio</button>
                  </Link>
                  <Link to={'/contact'} className="home-button-link">
                    <button className="home-button">Contact</button>
                  </Link>
              </div>
            </>
        )
    }
}

export default Home