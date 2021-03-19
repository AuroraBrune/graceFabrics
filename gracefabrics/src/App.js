import { HashRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import CommissionPage from './pages/Commissions'
import Cart from './pages/Cart';
import React from "react";
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Service from './pages/Services';
import { CartProvider } from './utils/CartContext';
import './App.css';

// function PrivateRoute ({component: Component, authed, ...rest}) { 
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
//   )
// }
// Now your Routes can look something like this

// <Route path='/' exact component={Home} />
// <Route path='/login' component={Login} />
// <Route path='/register' component={Register} />
// <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
function App() {

  return (
    <HashRouter>
      <Navbar />
      <CartProvider>
        <Route exact path="/" component={About} />
        <Route path="/Banners" render={() => { 
          return <Shop type="banners" /> }} />
        <Route path="/Stoles" render={() => { 
          return <Shop type="stoles" /> }} />
        <Route path="/admin" component={Login} />
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




