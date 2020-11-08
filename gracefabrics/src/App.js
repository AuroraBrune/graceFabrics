import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Gallery from "./pages/gallery"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Banners from './pages/Banners';
import Stoles from './pages/Stoles';
import { useEffect } from 'react';
import Admin from './pages/Admin';
import Contact from './pages/contact';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

function App() {
  useEffect(() =>{
    fetch("/api/products").then(res => res.json()).then(productres => {

      // console.log(productres)
    })
  },[] )
  return(
    <Router>
      <Navbar />
      <div className={classes.root}>
      <Grid container padding={5}>
        <Grid item md={2}>
          <Aside/>
        </Grid>
        <Grid item md={9}>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/banners" component={Banners}/>
          <Route path="/stoles" component={Stoles}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Shop}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/contact" component={Contact}/>
        </Grid> 
            {/* 
            <RequireAuth>
                <Route exact path="/admin" component={admin} />
            </RequireAuth> */}
     </Grid>
     </div>
    </Router>
  );
}

export default App;




