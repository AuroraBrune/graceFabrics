import React from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';

const Shop = () => {

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