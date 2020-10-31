import logo from './logo.svg';
import Product from './components/Product';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import ProductGrid from "./components/ProductGrid";
import './App.css';

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

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div class = "column">
          <Aside/>
    </div>
    
    <div class = "column">
    {/* <ProductGrid/> */}

      <div class = "row">
      
          <Product class="card"/>

          <Product class="card"/>

          <Product class="card"/>
       
      </div>

    </div> 
      
    </div>
  );
}

export default App;
