import React from 'react'
import './Portfolio.css'
import quizMeHomePage from '../portfolio-resources/quiz-me-home.jpg'
import recipeBreakdownHomePage from '../portfolio-resources/recipe-breakdown-home-page.jpg'

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="portfolio-container">
              <h2 className="portfolio-title">Portfolio</h2>
              <div className="project-container">
                <h3 className="project-title">Quiz Me!</h3>
                <div className="project-image-container">
                    <img src={quizMeHomePage} alt="project-screenshot" className="project-image"/>
                </div>
                <p className="project-description">Quiz Me is a full stack application allowing users to register for an account, where they will be able to create flashcards, and group those flashcards into quizzes. 
                These will be saved in the database to be accessed by the user whenever they login. 
                Best practices for signup/login are used. JSON Web Token Authentication was utilized as well as bcrypt for password hashing. 
                A comprehensive test file exists for the API and all basic authentication security, as well as protestion from XSS attacks exists.</p>
                <h4 className="stack-title">Stack:</h4>
                <ul className="stack-list">
                    <li className="stack-item">JavaScript</li>
                    <li className="stack-item">React</li>
                    <li className="stack-item">Node.js</li>
                    <li className="stack-item">Express</li>
                    <li className="stack-item">PostgreSQL</li>
                    <li className="stack-item">SQL</li>
                    <li className="stack-item">JSON Web Token</li>
                    <li className="stack-item">bcrypt</li>
                    <li className="stack-item">Mocha</li>
                    <li className="stack-item">Chai</li>
                    <li className="stack-item">Supertest</li>
                    <li className="stack-item">CSS</li>
                </ul>
                <a href="https://github.com/nreid3035/quiz-me" target="_blank" className="project-link" rel="noreferrer">
                  <button className="project-link-button">Github Repository</button>
                </a>
                <a href="https://github.com/nreid3035/quiz-me-api" target="_blank" className="project-link" rel="noreferrer">
                  <button className="project-link-button">API Github Repository</button>
                </a>
                <a href="quiz-me.vercel.app" target="_blank" className="project-link" rel="noreferrer">
                  <button className="project-link-button">Quiz Me! Live</button>
                </a>
              </div>
              <div className="project-container">
                <h3 className="project-title">Recipe Breakdown</h3>
                <div className="project-image-container">
                    <img src={recipeBreakdownHomePage} alt="project-screenshot"  className="project-image"/>
                </div>
                <p className="project-description">Recipe Breadown is an application that allows users to search for recipes by ingredients, or cuisine type
                A list of recipes are then displayed after an API call to the edamam recipe API. If the user selects a recipe, the ingredients will be listed as well as nutrition information on the recipe.
                A link to the page with the recipe directions will be provided at the bottom if you wish to continue. 
                Another API call is made to foodish when the home page loads.
                It generates a new food image for the home page each time.</p>
                <h4 className="stack-title">Stack:</h4>
                <ul className="stack-list">
                    <li className="stack-item">JavaScript</li>
                    <li className="stack-item">jQuery</li>
                    <li className="stack-item">HTML</li>
                    <li className="stack-item">CSS</li>
                </ul>
                <a href="https://github.com/nreid3035/recipe-breakdown" target="_blank" className="project-link" rel="noreferrer">
                  <button className="project-link-button">Github Repository</button>
                </a>
                <a href="https://nreid3035.github.io/recipe-breakdown/" target="_blank" className="project-link" rel="noreferrer">
                  <button className="project-link-button">Recipe Breakdown Live</button>
                </a>
              </div>
            </div>
        )
    }
}

export default Portfolio