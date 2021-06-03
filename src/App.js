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
import ConfirmationPage from './ConfirmationPage/ConfirmationPage'
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

        <Route 
          path={'/confirmation'}
          component={ConfirmationPage}/>
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
            <img src={headerLogo} alt="logo" className="logo-image"/>
          </div>
          <div className="header-labels-container">
            <h1 className="header-label" id="full-name">Nicholas Reid</h1>
            <h2 className="header-label" id="job-title">Web Developer</h2>
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
        <div className="link-logo-container">
          <a href="https://github.com/nreid3035" target="_blank" rel="noreferrer" className="social-link">
            <img src={githubLogo} alt="github-logo" className="social-image"/>
          </a>
        </div>        
        <div className="credits">
          <div className="photo-credit">Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticon.com</a></div>
          <div className="photo-credit">Photo by <a href="https://unsplash.com/@mfrazi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Fahrul Razi</a> on <a href="https://unsplash.com/s/photos/code-text?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></div>
          <h5 className="copyright">&copy; Nicholas Reid</h5>
        </div>
        <div className="link-logo-container">
            <a href="https://www.linkedin.com/in/nicholas-reid845/" target="_blank" rel="noreferrer" className="social-link">
              <img src={linkedInLogo} alt="linkedin-logo" className="social-image"/>
            </a>  
        </div>

      </footer>
    </div>

    );
  }
}

export default App;
