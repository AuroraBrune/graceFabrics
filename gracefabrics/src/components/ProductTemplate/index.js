import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  // root: {
  //   boxShadow: "0 0 0.7em #000000",
  //   background:'ivory',
  //   minWidth: 150,
  //   height: 400,
  //   margin: 10,
  // },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  // title: {
  //   marginTop: 20,
  //   marginLeft: 20,
  //   fontSize: 16,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
  // image: {
  //   justifyContent:'center',
  //   display:'flex',
  //   height:200,
  // },
  // priceTag: {
  //   marginLeft: 12,
  //   fontSize: 13
  // },
  // addToCart:{
  //   background: "#97E7FE"
  // }
});

const ProductTemplate = (productinfo)=> {
  const classes = useStyles();
  const product = productinfo.productinfo;
  
  return (
   
     <div>
       <table>
        <tbody>
          <tr>
            <td><strong> Current Name: {product.name} </strong></td><td> <input label="nName" placeholder="Updated Name"/></td>
          </tr>
          <tr>
            <td> Current Price: ${product.price} </td><td> <input label="nPrice" placeholder="Updated Price"/> </td>
          </tr>
          <tr>
            <td> Current Description: {product.description} </td><td> <input label="nDescription" placeholder="Updated Description"/> </td>
          </tr>
          <tr>
            <td> Current Image:{product.img1} </td><td> <input label="nDescription" placeholder="Updated Description"/></td>
          </tr>
        </tbody>
       </table>
      </div>
   
  );
}

export default ProductTemplate;