<<<<<<< HEAD
import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const Banners = () => {
    const [bannersList, setBanners] = useState({
        products: []
    }); 

    useEffect(() => {
        API.getBanners().then(results => {
            setBanners({
                ...bannersList, 
                products: results.data
            });
        });
    }, []);

    const productsToMap = bannersList.products.map(product => {
        console.log(product);
        return(
            <Grid item xs={9} sm={4} md={3}>
                <Product
                    productinfo={product}
                />
            </Grid>
        )
    })
=======
import React from 'react';
import Carousel from '../components/carousel';
import FilterProducts from '../filterProducts';
>>>>>>> af13594d33dced13671a4325afa34226519e350f

    return(
        <Grid container> 
            {productsToMap}
        </Grid>
    )
}

export default Banners;