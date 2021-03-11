import React from 'react';
import InputField from '../InputField'
import SubmitButton from '../SubmitButton/SubmitButton'
import { Redirect } from 'react-router-dom'
import App from '../../App'


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false,
      redirect: false
    }
  }

  setRedirect = () => {
    // console.log('setRedirect fired')
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    // console.log(this.state.redirect);
    if (this.state.redirect === true) {
      // console.log('renderRedirect firing')
      this.render()
    }
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 18) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async goLogin() {

    if(!this.state.username || !this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true
    })

      try{
        let res = await fetch ('/api/login', {
          method: 'post', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username:this.state.username,
            password:this.state.password
          })
        });

    let result = await res;
    //  console.log(res);
    if (result && result.status === 200) {
    
      // console.log('should be routing to admin')
      // return(<Redirect to="/ProductManagement"/>)
    }
      else if (result.statusText === "Unauthorized") {
        this.resetForm();
      }
      
    }
    catch(e){
      console.log(e);
      this.resetForm();
    }
  }
  render(){ 
    return (
      <div className="loginForm">
  
        Log In
        <InputField
          type='text'
          placeholder='Username'
          value={this.state.username ? this.state.username : ''}
          onChange={ (val) => this.setInputValue('username', val)}
        />
         <InputField
          type='password'
          placeholder='Password'
          value={this.state.username ? this.state.password : ''}
          onChange={ (val) => this.setInputValue('password', val)}
        />
        <SubmitButton 
          text='Login'
          disabled={this.state.buttonDisabled}
          onClick={ ()=> this.goLogin() }
        />
      </div>
    );
  }
}
export default LoginForm;
