import logo from './logo.svg';
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
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Login from "./pages/Login"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <div class = "column">
//             <Aside/>
//       </div>
//       <div class = "column">
//       {/* <ProductGrid/> */}
//         <div class = "row">
//             <Product class="card"/>
//             <Product class="card"/>
//             <Product class="card"/>      
//         </div>
//       </div> 
//     </div>
//   );
// }

function App() {
  return(
    <Router>
      <div className="app">
        <Navbar />
        <div className = "column">
             <Aside/>
        </div>
          {/* <Switch> */}
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/gallery" component={Gallery}/>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/login" component={Login}/>
            {/* <Route path="/" component={}/> */}
{/* 
            <RequireAuth>
                <Route exact path="/admin" component={admin} />
            </RequireAuth> */}
          {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;




