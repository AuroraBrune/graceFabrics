import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Aside from "../components/Aside";
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
import Basket from '../components/Basket'
import React , { useEffect, useState } from "react";
import PersistentDrawerLeft from '../components/Aside';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

const ShopHub = () => {

  const cartContext = React.createContext({
    cart:[]
  })

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

  return(
    <Router>
      <div className={classes.root}>
        <Navbar />
        <Grid container padding={5}>
          <Grid item md={2}>
            <PersistentDrawerLeft/>
          </Grid>
          <Grid item md={8}>
            <Route exact path="/" path="/shop" component={Shop} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Admin} />
            <Route path="/about" component={About}/>
            <Route path="/banners" component={Banners}/>
            <Route exact path="/stoles" component={Stoles}/>
            <Route  path="/rainbow-stoles" component={RainbowStoles}/>
            <Route  path="/easter-stoles" component={EasterStoles}/>
            <Route  path="/christmas-stoles" component={ChristmasStoles}/>
            <Route  path="/lenten-stoles" component={LentenStoles}/>
            <Route  path="/pentecost-stoles" component={PentecostStoles}/>
            <Route  path="/advent-stoles" component={AdventStoles}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/orders" component={Orders}/>
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

// const Aside = () => {
//   const classes = useStyles();
//   // const preventDefault = (event) => event.preventDefault();

//   return(
//     <div className={classes.root}>
//       <ul className="nav">
//         <li className="nav-item">
//           <Button color="primary">
//             <Link to="/about" className={ window.location.pathname === "/about" ? "nav-link active" : "nav-link" }>
//               About
//             </Link>
//           </Button>
//         </li>

//         <li className="nav-item">
//         <Button color="primary">
//             <Link to="/shop" className={ window.location.pathname === "/shop" ? "nav-link active" : "nav-link" }>
//               Shop
//             </Link>
//           </Button>
//         </li>

//         {/* Begin Sub-List */}
//           <ul>
//             <li> 
//               <Button color="primary">
//                 <Link to="/banners" className= { window.location.pathname === "/banners" ? "nav-link active" : "nav-link" }>
//                   Banners
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/stoles" className={ window.location.pathname === "/stoles" ? "nav-link active" : "nav-link" }>
//                   All Stoles
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/rainbow-stoles" className={ window.location.pathname === "/rainbow-stoles" ? "nav-link active" : "nav-link" }>
//                   Rainbow Stoles
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/christmas-stoles" className={ window.location.pathname === "/christmas-stoles" ? "nav-link active" : "nav-link" }>
//                   Christmas Stoles
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/easter-stoles" className={ window.location.pathname === "/easter-stoles" ? "nav-link active" : "nav-link" }>
//                   Easter Stoles
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/pentecost-stoles" className={ window.location.pathname === "/pentecost-stoles" ? "nav-link active" : "nav-link" }>
//                   Pentecost Stoles
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/lenten-stoles" className={ window.location.pathname === "/lenten-stoles" ? "nav-link active" : "nav-link" }>
//                   Lenten Stoles
//                 </Link>
//               </Button>
//             </li>
//             <li>
//               <Button color="primary">
//                 <Link to="/advent-stoles" className={ window.location.pathname === "/advent-stoles" ? "nav-link active" : "nav-link" }>
//                   Advent Stoles
//                 </Link>
//               </Button>
//             </li>
//           </ul>
//         {/* End Sub-List */}

//         <li className="nav-item">
//           <Button color="primary">
//             <Link to="/gallery" className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}>
//               Gallery
//             </Link>
//           </Button>
//         </li>
//         <li className="nav-item">
//           <Button color="primary">
//             <Link to="/contact" className={window.location.pathname === "/contact.js" ? "nav-link active" : "nav-link"}>
//               Contact Info
//             </Link>
//           </Button>
//         </li>
//         <li className="nav-item">
//           <Button color="primary">
//             <Link to="/orders" className={window.location.pathname === "/Orders.js" ? "nav-link active" : "nav-link"}>
//               Custom Orders
//             </Link>
//           </Button>
//         </li>
//       </ul> 
//     </div>
//   )
// }

// export default Aside;