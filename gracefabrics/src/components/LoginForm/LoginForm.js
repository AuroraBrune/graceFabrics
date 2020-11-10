import React from 'react';
import InputField from '../InputField/InputField'
import SubmitButton from '../SubmitButton/SubmitButton'
import { Redirect } from 'react-router-dom'

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
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect == true) {
      console.log('returning admin')
      return <Redirect to='/admin' />
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
    console.log(res);
    let result = await res;
    if (result /*&& result.success*/) {
      console.log('fetchin');
      this.setRedirect();
      console.log(this.state.redirect)
      console.log('did the thing')
    }
    else if (!result /*&& result.success === false*/) {
      console.log('hitting reset')
      this.resetForm();
      alert(/*result.msg*/ 'Whoopsies!');
    }
    }
    catch(e){
      console.log('catching result on login attempt')
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
