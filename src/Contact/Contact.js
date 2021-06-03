import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    submitContactForm = (e) => {
        e.preventDefault();

      emailjs.sendForm('zoho_service', 'portfolio_template', e.target, 'user_mSrjxdfmkC62Kh6lf239j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    render() {
        return (
            <>
              <h2 className="contact-title">Contact Page</h2>
              <p className="form-intro">Please fill out the form below and I will get back to you by email promptly</p>
              <form className="contact-form" onSubmit={(e) => this.submitContactForm(e)}>
                  <label htmlFor="from_name" className="contact-label">Name</label>
                  <input type="text" name="from_name" id="name" className="contact-input"/>
                  <label htmlFor="from_email" className="contact-label">Email</label>
                  <input type="text" name="from_email" id="email" className="contact-input"/>
                  <label htmlFor="message" className="contact-label">Message</label>
                  <textarea className="contact-textarea" name="message">Type here...</textarea> 
                  <input type="submit" className="contact-submit"/>
              </form>
            </>
        )
    }
}

export default Contact