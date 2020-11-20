import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../assets/demo_img.jpg';
import {CartProvider, useCartContext} from '../../utils/CartContext'
// import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    boxShadow: "0 0 0.7em #000000",
    background:'ivory',
    minWidth: 150,
    height: 400,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    justifyContent:'center',
    display:'flex',
    height:200,
  },
  priceTag: {
    marginLeft: 12,
    fontSize: 13
  },
  addToCart:{
    background: "#97E7FE"
  }
});

export default function Product(productinfo) {
  const classes = useStyles();
  const product = productinfo.productinfo;
  const [state, dispatch] = useCartContext();
  
  return (
    <CartProvider>
      <Card className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
        {product.name}
        </Typography>
        <CardContent>
          <img className={classes.image} src={product.img1} alt='product'/>
          <Typography className={classes.pos} color="textSecondary"> 
          </Typography>
          <Typography variant="body2" component="p">
          Description: {product.description}
          </Typography>
        </CardContent>
          <div className={classes.priceTag}><strong>Price: ${product.price}</strong></div>
        <CardActions>
          <Button className={classes.addToCart} onClick={() => dispatch({type:'addItem', product:product})} size="small" ><strong>Add to cart</strong></Button><br/> 
        </CardActions>
      </Card>
    </CartProvider>
  );
}