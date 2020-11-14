import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import Cart from '../components/CartModal/'
    
  const ProductManagement = () => {
    // const [productsList, setProducts] = useState({
    //     products: []
    // }); 

    // useEffect(() => {
    //     API.getProducts().then(results => {
    //         setProducts({
    //             ...productsList, 
    //             products: results.data
    //         });
    //     });
    // }, []);

    // const productsToMap = productsList.products.map(product => {

    //     return(
    //       <div>
    //         <li key = {product.id}>

    //         </li>
    //       </div>
    //     )
    // })

    return(
      <Grid container> 
        <Cart/>
      </Grid>
    )
}

export default ProductManagement;