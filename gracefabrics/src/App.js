import { HashRouter, Route, Redirect} from 'react-router-dom';
import {React, useState, useEffect} from 'react'
import About from './pages/About';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import CommissionPage from './pages/Commissions'
import Cart from './pages/Cart';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import ProductManagement from './pages/productManagement';
import Service from './pages/Services';
import { CartProvider } from './utils/CartContext';
import API from './utils/API'
import './App.css';


function PrivateRoute({ component: Component, ...rest }) {
  let [auth, setAuth] = useState({authed: false});
 useEffect(()=>{
    API.authenticate().then(function (res) {
      console.log(res)
      setAuth(res.data)
    })
  },[])
  console.log(auth.authed)
  return (
    <Route
      {...rest}
      render={(props) => auth.authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />}
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

        <PrivateRoute path='/admin' component={ProductManagement} />
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




