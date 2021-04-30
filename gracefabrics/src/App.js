import './App.css';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { React, useState, useEffect } from 'react'
import About from './pages/About';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import CommissionPage from './pages/Commissions'
import Cart from './pages/Cart';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Service from './pages/Services';
import PageNotFound from './components/PageNotFound';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Checkout from "./pages/CheckOut";
// import ProductManagement from './pages/productManagement';
// import API from './utils/API';

function App() {
  //TODO figure out how to change this state 
  //depending on the whether or not the user is currently logged in
  // const PrivateRoute =  ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={(props) => (
  //     auth.authed === true
  //       ? <Component {...props} />
  //       : <Redirect to='/login' />
  //   )} />
  // )
  return (
    <HashRouter>
      <Navbar />
      <div id="generalContainer">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/banners" render={() => {
            return <Shop type="banners" />
          }} />
          <Route path="/stoles" render={() => {
            return <Shop type="stoles" />
          }} />
          <Route path="/checkout" component={Checkout} />
          {/* <PrivateRoute path='/admin' component={ProductManagement}/> */}
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/about" component={About} />
          <Route path="/custom-order" component={CustomOrder} />
          <Route path="/commissions" component={CommissionPage} />
          <Route path="/workshops" render={() => {
            return <Service name="Hands-On Workshops" />
          }} />
          <Route path="/events" render={() => {
            return <Service name="Events" />
          }} />
          <Route path="/consultations" render={() => {
            return <Service name="Consultations" />
          }} />
          <Route path="/cart" render={() => {
            return <Cart />
          }} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;




