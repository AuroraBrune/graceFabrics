import { HashRouter, Route, Redirect } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import CommissionPage from './pages/Commissions'
import Cart from './pages/Cart';
import React from "react";
import Navbar from './components/NavBar';
import Login from './pages/Login';
import ProductManagement from './pages/productManagement';
import Service from './pages/Services';
import { CartProvider } from './utils/CartContext';
import './App.css';


function PrivateRoute({ component: Component, authed, ...rest }) {
  console.log(authed)
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
// Now your Routes can look something like this

function App() {

  return (
    <HashRouter>
      <Navbar />
      <CartProvider>
        <Route exact path="/" component={About} />
        <Route path="/Banners" render={() => {
          return <Shop type="banners" />
        }} />
        <Route path="/Stoles" render={() => {
          return <Shop type="stoles" />
        }} />

        <PrivateRoute authed={true} path='/admin' component={ProductManagement} />
        <Route path="/login" component={Login} />
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
        <Route path="/cart" component={Cart} />

      </CartProvider>
    </HashRouter>
  );
}

export default App;




