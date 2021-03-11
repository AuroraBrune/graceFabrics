import React from 'react';
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton/SubmitButton'
import ProductManagement from './productManagement'
import LoginForm from '../components/LoginForm';
import './admin.css'

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
    textAlign:'center',
    display:'flex', 
    justifyContent: 'center',
    alignItems:'center',
    marginTop:'80px'
  }

class Admin extends React.Component {

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
            // console.log('before setting ' + isAuthenticated.signedIn)
            isAuthenticated.signedIn = true;
            // console.log('after setting ' + isAuthenticated.signedIn)
            this.setState({ redirect:"/ProductManagement"})
           
        }
          else if (result.statusText === "Unauthorized") {
            // console.log('form reset')
            this.resetForm();
          }
          
        }
        catch(e){
          console.log(e);
          this.resetForm();
        }
      }

    render(){

      if(this.state.redirect){

      return(
    
       <div>
       <h1>
         Product Management
         </h1>
         <ProductManagement/>
       </div>

      )

      } else {

        return(
    
          <div style ={inlineStyle}>
            <div className="loginForm">
            <h3>This page is for Administrative purposes...</h3>
        <p>If you are a shopper please use the side bar to return to the store :)</p>
        <br></br>
                Sign In
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
        </div>

         )
      }
    }
}

export default (Admin);
