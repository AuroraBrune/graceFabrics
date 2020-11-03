import Product from './components/Product';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import ProductGrid from "./components/ProductGrid";
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Gallery from "./pages/gallery"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Login from "./pages/Login"

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

function App() {
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
          <Route path="/gallery" component={Gallery}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Shop}/>
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




