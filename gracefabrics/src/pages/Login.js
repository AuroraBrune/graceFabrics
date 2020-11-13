import React from 'react';
import '../Login.css';
import LoginForm from '../components/LoginForm/LoginForm'

class Login extends React.Component {

  render(){
    
      return (
        <div className="app">
          <div className='container'>
            <LoginForm/>
          </div>
        </div>
      );
   
  }
}
export default (Login);
