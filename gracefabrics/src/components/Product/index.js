import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import image from '../../assets/demo_img.jpg';
// import FilterProducts from '../../filterProducts';

const useStyles = makeStyles({
  root: {
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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    height:200,
  }
});

export default function Product(productinfo) {
  const classes = useStyles();
  const product = productinfo.productinfo;
  console.log(productinfo);
  console.log(product)
  
  return (
    <Card className={classes.root} variant="outlined">
      {/* <FilterProducts onChange={onChange} /> */}
      <Typography className={classes.title} color="textSecondary" gutterBottom>
       {product.name}
      </Typography>
      <CardContent>
        <a href='' ><img className={classes.image} src={image}/></a>
        <Typography className={classes.pos} color="textSecondary"> 
        </Typography>
        <Typography variant="body2" component="p">
         Description: {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button> <Button size="small">Buy now ({product.price})</Button>
      </CardActions>
    </Card>
  );
}