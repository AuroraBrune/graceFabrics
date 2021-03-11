import React from "react";
import { Paper, TextField, FormControl, FormGroup, Button } from '@material-ui/core'
import "./orderForm.css";
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_RRLMrFKCJPv8XqiyFRHKM");

class CustomOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      commissionType: props.type,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message, price } = this.state;
    const ourName = "Grace Fabrics";
    const totalmessage = message + " Price range: " + price + " You can contact the customer at " + email;
    const data = {
      service_id: 'service_2j7t01m',
      template_id: 'template_hz588ig',
      user_id: 'user_RRLMrFKCJPv8XqiyFRHKM',
      templateParams: {
        message: totalmessage,
        email: email,
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
      commissionType: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }
  render() {
    const { name, email, message, sentMessage } = this.state;
    return (
      <form id="contactForm" onSubmit={this.handleSubmit}>
        
          <div className="contact-paper-hdr">
            <h3>Custom Order</h3>
          </div>
          <FormGroup>
            <FormControl noValidate autoComplete="off">
              <TextField name="name"
                type="text"
                placeholder="  Your first and last name"
                value={this.state.name}
                onChange={this.handleChange} />
              <TextField name="email"
                type="email"
                placeholder="  Your email"
                value={this.state.email}
                onChange={this.handleChange} />
              <TextField name="message"
                placeholder="  Description of desired commission..."
                value={this.state.message}
                onChange={this.handleChange} />
              <TextField name="commissionType"
                type="text"
                placeholder={"  Your are ordering a " + this.state.commissionType}
                value={this.state.commissionType}
                onChange={this.handleChange} />
              <Button type="submit" variant="outlined">Send</Button>
            </FormControl>
          </FormGroup>
       
      </form>
    );
  }

}

export default CustomOrderForm;
