import { HashRouter, Route } from 'react-router-dom';
import About from "./pages/about";
import Shop from "./pages/shop";
import CustomOrder from './pages/customOrder';
import CommissionPage from './pages/commissions'
import Basket from './components/Basket';
import React from "react";
import Navbar from './components/NavBar';
import Admin from './pages/admin';
import { CartProvider } from './utils/CartContext';

function App() {

  return (
    <HashRouter>
      <Navbar />
      <CartProvider>

        <Route exact path="/" component={About} />
        <Route path="/Banners" render={() => { return <Shop type="banners" /> }} />
        <Route path="/Stoles" render={() => { return <Shop type="stoles" /> }} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Admin} />
        <Route path="/about" component={About} />
        <Route path="/custom-order" component={CustomOrder} />
        <Route path="/commissions" component={CommissionPage}/>
                {/* <Route path="/workshops" component={WorkShops}/>
                <Route path="/events" component={Events}/>
                <Route path="/consultations" component={Consultations}/> */}
        <Route path="/cart" component={Basket} />

      </CartProvider>
    </HashRouter>
  );
}

export default App;




