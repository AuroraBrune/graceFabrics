import { HashRouter, Route, Redirect } from 'react-router-dom';
import { React, useState, useEffect } from 'react'
import About from './pages/About';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import CommissionPage from './pages/Commissions'
import Cart from './pages/Cart';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Service from './pages/Services';
import { CartProvider } from './utils/CartContext';
import ProductManagement from './pages/productManagement';
import API from './utils/API';
import './App.css';
function App() {
let [auth, setAuth] = useState({
  authed: false
  // renderAuthStatus: () => {
  //   API.authenticate().then(results => {
  //       setAuth({
  //           ...auth,
  //           authed: results.data.authed
  //       });
  //   });
// }
})
// useEffect(() => {
//   auth.renderAuthStatus()
// }, []);
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
      <CartProvider>
        <Route exact path="/" component={About} />
        <Route path="/Banners" render={() => {
          return <Shop type="banners" />
        }} />
        <Route path="/Stoles" render={() => {
          return <Shop type="stoles" />
        }} />
        <Route path='/admin' component={ProductManagement} />
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




