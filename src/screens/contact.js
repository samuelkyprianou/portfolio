import React, { Component } from "react";
import emailjs from "emailjs-com";
import ContactForm from "../components/ContactForm";
import "../StyleSheets/Contact.css";

export default class Contact extends Component {
  state = {
    messageSuccess: false,
    messageError: false
  }
  
  sendEmail = (email) => {
    this.setState({messageSuccess: false, messageError: false})
    const {
      REACT_APP_SERVICE_ID: seviceID,
      REACT_APP_TEMPLATE_ID: template,
      REACT_APP_USER_ID: user,
    } = process.env;

    emailjs.send("service_w8xe4o1", "contact_form", email, "user_PZfNUR3qu3sCp2VgldHc7").then(
      (result) => {
        console.log(result.text);
        this.setState({messageSuccess: true})
      },
      (error) => {
        this.setState({messageError: true})
      }
    );
  };

  render() {
    return (
      <div id="contact" className="container">
        <div className="title">
          <h1>Contact</h1>
        <div className="tag">Have a question or want to work together?</div>
        </div>
        <ContactForm sendEmail={this.sendEmail} messageSuccess={this.state.messageSuccess} messageError={this.state.messageError} />
      </div>
    );
  }
}
