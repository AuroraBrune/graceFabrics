import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from "./gallery"
import About from "./About"
import Shop from "./Shop"
import Banners from './Banners';
import Stoles from './Stoles';
import ChristmasStoles from './ChristmasStoles';
import EasterStoles from './EasterStoles';
import RainbowStoles from './RainbowStoles';
import LentenStoles from './LentenStoles';
import PentecostStoles from './PentecostStoles';
import AdventStoles from './AdventStoles';
import Orders from './Orders';
import Contact from './contact';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

const ShopHub = () => {

  return(
    <Router>
      <div className={classes.root}>
        <Navbar />
        <Grid container padding={5}>
          <Grid item md={2}>
            <Aside/>
          </Grid>
          <Grid item md={9}>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/banners" component={Banners}/>
            <Route exact path="/stoles" component={Stoles}/>
            <Route  path="/rainbow-stoles" component={RainbowStoles}/>
            <Route  path="/easter-stoles" component={EasterStoles}/>
            <Route  path="/christmas-stoles" component={ChristmasStoles}/>
            <Route  path="/lenten-stoles" component={LentenStoles}/>
            <Route  path="/pentecost-stoles" component={PentecostStoles}/>
            <Route  path="/advent-stoles" component={AdventStoles}/>
            <Route path="/gallery" component={Gallery}/>
            <Route exact path="/" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/orders" component={Orders}/>
          </Grid>  
        </Grid>
     </div>
    </Router>
  )
}
export default ShopHub;