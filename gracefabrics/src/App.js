import { makeStyles } from '@material-ui/core/styles';
import './Login.css';
import ShopHub from "./pages/ShopHub"
import { CartProvider } from './utils/CartContext'

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

function App() {

  return (
    <div>
      <CartProvider>
      <ShopHub/>
      </CartProvider>
    </div>
  );
}

export default App;




