import { React, useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';
import './login.css';

export default function Login() {
  let [loginStatus, setLoginStatus] = useState({
    isAuthenticated: false,
    username: "",
    password: "",
  });

  function setInputValue(property, val) {
    val = val.trim();
    setLoginStatus({
      ...loginStatus,
      [property]: val
    })
  }
  function goLogin(val){
    API.login({
          username: val.username,
          password: val.password
        })
        .then((res) => {
          console.log(res)
          if(res.status === 200){
            setLoginStatus({
              ...loginStatus,
              isAuthenticated: true
            })
          }
      })
  }
  if(loginStatus.isAuthenticated === true){
    return(
      <Redirect  to={{pathname:"/admin", authed: true}}/>
     ) 
  }
  else{
  return (
    <div className="loginForm">
      <h3>This page is for Administrative purposes...</h3>
      <p>If you are a shopper please use the side bar to return to the store :)</p>
      <br></br>
              Sign In
        <TextField
        type='text'
        placeholder='Username'
        value={loginStatus.username}
        onChange={(e) => setInputValue('username', e.target.value)}
      />
      <TextField
        type='password'
        placeholder='Password'
        value={loginStatus.password}
        onChange={(e) => setInputValue('password', e.target.value)}
      />
      <div className="submitButton">
        <Button onClick={(e) =>  goLogin(loginStatus)}>Login</Button>
      </div>
    </div>

)
  }
}