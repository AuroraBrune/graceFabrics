import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import image from '../../assets/demo_img.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

export default function Product(productInfo) {
  const productCard = useStyles();
 
  return (
    <Card className = 'productCard'>
    <a href='' ><img src={image}/></a>
     <p>Here are a few sentences about the product. Come on then, what are you waiting for? Buy it!</p>
     
    </Card>
  );
}