import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Gallery from "./pages/gallery"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Banners from './pages/Banners';
import Stoles from './pages/Stoles';
import Admin from './pages/Admin';
import Orders from './pages/Orders';
import Contact from './pages/contact';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

export const isAuthenticated = {
  // SET TO TRUE TO SIMULATE LOGGED IN
  signedIn: true
};

const RequireAuth = ({ children }) => {
  if (!isAuthenticated.signedIn) {
    return <Redirect to={Login} />;
  }

  return children;
};

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
            <Route path="/banners" component={Banners}/>
            <Route path={["/christmas-stoles", "/rainbow-stoles"]} component={Stoles}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            <RequireAuth>
              <Route exact path="/admin" component={Admin} />
            </RequireAuth>
            <Route path="/orders" component={Orders}/>
          </Grid>  
      </Grid>
     </div>
    </Router>
  );
}

export default App;




