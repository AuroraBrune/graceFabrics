import React from "react";
import LoginForm from "../components/LoginForm";
import '../App.css'

const inlineStyle = {
  textAlign:'center',
  display:'flex', 
  justifyContent: 'center',
  alignItems:'center',
  marginTop:'80px'
}

function Login() {
    return (
        <div style={inlineStyle}>
          <LoginForm />
        </div>
    )
}

export default Login;
