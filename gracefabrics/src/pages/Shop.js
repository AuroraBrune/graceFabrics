import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const Shop = () => {
    const [productsList, setProducts] = useState({
        products: []
    }); 

    useEffect(() => {
        API.getProducts().then(results => {
            // console.log(results);
            setProducts({
                ...productsList, 
                products: results.data
            });
        });
    }, []);

    const productsToMap = productsList.products.map(product => {
        console.log(product);
        return(
            <Product
                productinfo={product}
            />
        )
    })

    return(

        <Grid container>
            <Grid item xs={9} sm={4} md={3}>
               {productsToMap}
            </Grid>
        </Grid>
    )
}

export default Shop;