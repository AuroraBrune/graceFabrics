import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import image from '../../assets/demo_img.jpg';

const useStyles = makeStyles({
  root: {
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

export default function Product(productInfo) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root} variant="outlined">
      <Typography className={classes.title} color="textSecondary" gutterBottom>
       Product Name
      </Typography>
      <CardContent>
        <a href='' ><img className={classes.image} src={image}/></a>
        <Typography className={classes.pos} color="textSecondary">
          Product Description
        </Typography>
        <Typography variant="body2" component="p">
         Here are a few sentences about the product. Come on then, what are you waiting for? Buy it!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button> <Button size="small">Buy now</Button>
      </CardActions>
    </Card>
  );
}