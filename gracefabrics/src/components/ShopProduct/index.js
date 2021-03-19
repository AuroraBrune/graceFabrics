import React from 'react';
import { makeStyles, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { CartProvider, useCartContext } from '../../utils/CartContext';

const useStyles = makeStyles({
  root: {
    boxShadow: "0 0 0.7em #000000",
    background: 'ivory',
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
    justifyContent: 'center',
    display: 'flex',
    height: 200,
  },
  priceTag: {
    marginLeft: 12,
    fontSize: 13
  },
  addToCart: {
    background: "#97E7FE"
  }
});

export default function ShopProduct(props) {
  const classes = useStyles();
  const product = props.productinfo;
  const [state, dispatch] = useCartContext();

  return (
    <CartProvider>
      <Card className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {product.name}
        </Typography>
        <CardContent>
          <img className={classes.image} src={product.img1} alt='product' />
          <Typography className={classes.pos} color="textSecondary">
          </Typography>
          <Typography variant="body2" component="p">
            Description: {product.description}
          </Typography>
        </CardContent>
        <div className={classes.priceTag}><strong>Price: ${product.price}</strong></div>
        <CardActions>
          <Button className={classes.addToCart} onClick={() => dispatch({ type: props.btnType, product: product })} size="small" ><strong>{props.buttonTxt}</strong></Button><br />
        </CardActions>
      </Card>
    </CartProvider>
  );
}