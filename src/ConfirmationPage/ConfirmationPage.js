import React from 'react'
import { Link } from 'react-router-dom'
import approved from '../portfolio-resources/approved.png'
import './ConfirmationPage.css'

class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        return (
            <>
              <h2 className="confirm-title">Confirmation</h2>
              <div className="checkmark-image-container">
                  <img src={approved} alt="approved" className="checkmark"/>
              </div>
              <p className="confirm-text">Thank you for your email, it has been sent successfully. I will get back to you shortly!</p>
              <Link to={'/'} className="confirm-home-link">
                  <button className="confirm-home-button">Home</button>
              </Link>
            </>
        )
    }
}

export default ConfirmationPage