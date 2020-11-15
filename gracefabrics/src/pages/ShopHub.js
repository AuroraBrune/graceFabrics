import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from "./Gallery"
import About from "./About"
import Shop from "./Shop"
import Banners from './Banners';
import Stoles from './Stoles';
import Orders from './Orders';
import Contact from './contact';
import Basket from '../components/Basket'
import React , { useEffect, useState } from "react";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

const ShopHub = () => {

  let [cart, setCart] = useState({
    products:[]
  })
  
  const addItem = (item)  =>   {
    let cartState = [...cart]
    let{ID} = item;
    let existingItem = cartState.find(cartItem => cartItem.ID === ID);
  
    if(existingItem) {
      existingItem.quantity += item.quantity
    } else {
      cartState.push(item)
    }
    setCart(cartState)
    let stringCart = JSON.stringify(cartState);
    localStorage.setItem("cart", stringCart)
  }

  const updateItem = (itemID, amount) => {
    let cartState = [...cart]
    let exItem = cartState.find(item => item.ID === itemID);
    
    if(!exItem) return
  
    exItem.quantity += amount;
  
    if(exItem.quantity <= 0) {
      cartState = cartState.filter(item => item.ID !== itemID)
    }
    setCart(cartState);
    let cartString = JSON.stringify(cartState);
    localStorage.setItem('cart', cartString);
  
  }
  const removeItem = (itemID) => {
    let cartState = [...cart]
  
    cartState = cartState.filter(item => itemID !== itemID);
    setCart(cartState);
  
    let cartString = JSON.stringify(cartState)
    localStorage.setItem('cart', cartString)
  }
  
  console.log(cart) 

  return(
    <Router>
      <div className={classes.root}>
        <Navbar />
        <Grid container padding={5}>
          <Grid item md={2}>
            <Aside/>
          </Grid>
          <Grid item md={8}>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/banners" component={Banners}/>
            <Route path="/stoles" component={Stoles}/>
            <Route path="/gallery" component={Gallery}/>
            <Route exact path="/" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/orders" component={Orders}/>
          </Grid>  
          <Grid item md={2}>
            <Basket props={cart.products}/>
          </Grid>
        </Grid>
       
     </div>
    </Router>
  )
}
export default ShopHub;