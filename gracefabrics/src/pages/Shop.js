import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
// import API from '../utils/API';

const Shop = () => {
    // const [products, setProducts] = useState([]); // 'products' from this line will be used to map to components

    // useEffect(() => {
    //     API.getProducts().then(results => {
    //         console.log(results);
    //         setProducts({
    //             ...products

    //         });
    //     });
    // }, []);

    return(

        <Grid container>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
            <Grid item xs={9} sm={4} md={3}>
                <Product />
            </Grid>
        </Grid>
    )
}

export default Shop;