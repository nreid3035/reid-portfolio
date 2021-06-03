import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import headerLogo from './portfolio-resources/header-logo.png'
import burgerMenu from './portfolio-resources/hamburger-menu.png'
import githubLogo from './portfolio-resources/github-logo.png'
import linkedInLogo from './portfolio-resources/linkedin-logo.png'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: false
    }
  }

  handleHamburgerClick = () => {
    this.setState({
      nav: !this.state.nav
    })
  }

 

  renderMainRoutes = () => {
    return (
      <>
        <Route
          exact 
          path={'/'}
          component={Home}/>

        <Route 
          path={'/about'}
          component={About}/>
        
        <Route 
          path={'/portfolio'}
          component={Portfolio}/>

        <Route 
          path={'/contact'}
          component={Contact}/>
      </>
    )
  }

  render() {
  
    let navJsx = null
    if (this.state.nav === true) {
      navJsx = <nav className="navigation">
                <NavLink className="nav-link" to={'/'} onClick={() => this.handleHamburgerClick()}><p className="nav-text">Home</p></NavLink>
                <NavLink className="nav-link" to={'/about'} onClick={() => this.handleHamburgerClick()}><p className="nav-text">About Me</p></NavLink>
                <NavLink className="nav-link" to={'/portfolio'} onClick={() => this.handleHamburgerClick()}><p className="nav-text">Portfolio</p></NavLink>
                <NavLink className="nav-link" to={'/contact'} onClick={() => this.handleHamburgerClick()}><p className="nav-text">Contact</p></NavLink>
               </nav>
    }

  return (
    <div className="App">
      <header className="App-header">
        <div className="non-nav-header">
          <div className="image-container" id="logo-container">
            <img src={headerLogo} alt="logo-image" className="logo-image"/>
          </div>
          <div className="header-labels-container">
            <h1 className="header-label" id="full-name">Nicholas Reid</h1>
            <h2 className="header-label" id="job-title">Junior Web Developer</h2>
          </div>
          <div className="image-container" id="burger-container" onClick={() => this.handleHamburgerClick()}>
            <img src={burgerMenu} alt="hmc"/>
          </div>
        </div>
          {navJsx}
      </header>
      <main>
        {this.renderMainRoutes()}
      </main>
      <footer>
        <div className="social-links">
          <div className="link-logo-container">
            <a href="https://github.com/nreid3035" target="_blank">
              <img src={githubLogo} alt="github-logo"/>
            </a>
          </div>
          <div className="link-logo-container">
            <a href="https://www.linkedin.com/in/nicholas-reid845/" target="_blank">
              <img src={linkedInLogo} alt="linkedin-logo"/>
            </a>
          </div>
        </div>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Photo by <a href="https://unsplash.com/@mfrazi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fahrul Razi</a> on <a href="https://unsplash.com/s/photos/code-text?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        <h5 className="copyright">&copy; Nicholas Reid</h5>
      </footer>
    </div>

    );
  }
}

export default App;
