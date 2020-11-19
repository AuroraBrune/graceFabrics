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
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    const ourName = "Grace Fabrics";
    const data = {
      service_id: 'service_2j7t01m',
      template_id: 'template_hz588ig',
      user_id: 'user_RRLMrFKCJPv8XqiyFRHKM',
      templateParams: {
        message: message,
        from_name: name,
        from_email: email,
        to_name: ourName,      
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
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }
  render() {
    const { name, email, message, sentMessage } = this.state;
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
                value={this.state.name}
                onChange={this.handleChange} />
              <TextField name="email"
                type="email"
                placeholder="email@gmail.com"
                value={this.state.email}
                onChange={this.handleChange} />
              <TextField name="message"
                placeholder="Tell me more about..."
                value={this.state.message}
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
