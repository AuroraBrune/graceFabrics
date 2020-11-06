import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../';

const Shop = () => {
    const [products, setProducts] = useState([]); // 'products' from this line will be used to map to components

    function getProducts() {
        API.getProducts().then((res) => setProducts(res.data))
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        getProducts();
    }, []);

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