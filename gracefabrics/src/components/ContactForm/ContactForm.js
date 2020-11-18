import React from "react";
import { Paper, TextField, FormControl, FormGroup, Button } from '@material-ui/core'
import "./contact.css";
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_RRLMrFKCJPv8XqiyFRHKM");

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const data = {
      service_id: 'service_2j7t01m',
      template_id: 'template_hz588ig',
      user_id: 'user_RRLMrFKCJPv8XqiyFRHKM',
      templateParams: {
        from_name: name,
        from_email: email,
        to_name: 'grace fabrics',
        subject,
        message_html: message,
      }
    }
   emailjs.send(
     data.service_id, 
     data.template_id,
     data.templateParams,
     data.user_id
   )
   this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }
  render() {
    const { name, email, subject, message, sentMessage } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Paper>
          <div className="contact-paper-hdr">
            <h3>Contact Us</h3>
          </div>
          <FormGroup>
            <FormControl noValidate autoComplete="off">
              <TextField name="name"
                type="text"
                placeholder="Your first and last name"
                value={name}
                onChange={this.handleChange} />
              <TextField name="email"
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={this.handleChange} />
              <TextField name="subject"
                type="text"
                placeholder="What is the subject?"
                value={subject}
                onChange={this.handleChange} />
              <TextField name="message"
                placeholder="Tell me more about..."
                value={message}
                onChange={this.handleChange} />
              <Button type="submit" variant="outlined" color="primary">Send</Button>
            </FormControl>
          </FormGroup>
        </Paper>
      </form>
    );
  }

}

export default ContactForm;
