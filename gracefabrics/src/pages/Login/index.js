import React from 'react';
import { Button, TextField } from '@material-ui/core';
import ProductManagement from '../productManagement';
import './login.css'

export const isAuthenticated = {
  // SET TO TRUE TO SIMULATE LOGGED IN
  signedIn: false
};

// const RequireAuth = ({ children }) => {
//   if (!isAuthenticated.signedIn) {
//     console.log('hitting admin path')
//   }

//   return children;
// };

const inlineStyle = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '80px'
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false,
      redirect: false
    }
  }
  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
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


  async goLogin() {

    if (!this.state.username || !this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true
    })

    try {
      let res = await fetch('/api/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });

      let result = await res;
      //  console.log(res);
      if (result && result.status === 200) {
        // console.log('before setting ' + isAuthenticated.signedIn)
        isAuthenticated.signedIn = true;
        // console.log('after setting ' + isAuthenticated.signedIn)
        this.setState({ redirect: "/ProductManagement" })

      }
      else if (result.statusText === "Unauthorized") {
        // console.log('form reset')
        this.resetForm();
      }

    }
    catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

//   render () {
//     const { redirect } = this.state;

//      if (redirect) {
//        return <Redirect to='/somewhere'/>;
//      }

//      return <RenderYourForm/>;
// }
  render() {

    if (this.state.redirect) {

      return (

        <div>
          <h1 className="blurb">
            Product Management
         </h1>
          <ProductManagement />
        </div>

      )

    } else {

      return (

        <div style={inlineStyle}>
          <div className="loginForm">
            <h3>This page is for Administrative purposes...</h3>
            <p>If you are a shopper please use the side bar to return to the store :)</p>
            <br></br>
                Sign In
                <TextField
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={(e) => this.setInputValue('username', e.target.value)}
            />
            <TextField
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={(e) => this.setInputValue('password', e.target.value)}
            />
            <div className="submitButton">
              <Button
                disabled={this.state.buttonDisabled}
                onClick={() => this.goLogin()}
              >
                Login
              </Button>
            </div>
          </div>
        </div>

      )
    }
  }
}

export default (Login);
