import React from "react";
import "./contact.css"

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
         return(
        <div className="contacForm">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <h4>Contact Us</h4>
              <input type="text" className="form-control" placeholder="Full Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="e-Mail Address" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" placeholder="Add your message here" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <div className="form-group">
            <button type="submit" className="btn form-control">Submit</button>
            </div>
          </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(event) {
    }
  }

  export default ContactForm;
