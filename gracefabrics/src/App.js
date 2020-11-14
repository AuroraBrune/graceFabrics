import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './Login.css';
import ShopHub from "./pages/ShopHub"
import Admin from "./pages/Admin"

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
        <div className={classes.root}>
          <Route exact path="/" component={ShopHub} />
          <Route path="/shop" component={ShopHub} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Admin} />
        </div>
    </Router>
  );
}

export default App;




