import { BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from "../components/Navbar";
import Gallery from "./gallery"
import About from "./About"
import Shop from "./Shop"
// import Orders from './Orders';
import Contact from './contact';
import Basket from '../components/Basket'
import React from "react";
import PersistentDrawerLeft from '../components/Aside';
import Admin from './Admin'
import Aside from '../components/Aside'
import { AdbOutlined } from '@material-ui/icons';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

const ShopHub = (props) => {
  

  return(
    <Router>
      <div className={classes.root}>
        <Navbar />
        <Grid container padding={5}>
          <Grid item md={2}>
            <PersistentDrawerLeft/>
          </Grid>
          <Grid item md={8}>
            <Route exact path="/" component={Shop} />
            <Route path="/shop" component={Shop}/>
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Admin} />
            <Route path="/about" component={About}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/contact" component={Contact}/>
            {/* <Route path="/basket" component={Basket}/> */}
            {/* <Route path="/orders" component={Orders}/> */}
          </Grid>  
          <Grid item md={2}>
            <Basket />
          </Grid>
        </Grid>
     </div>
    </Router>
  )
}
export default ShopHub;