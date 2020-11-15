import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const Stoles = () => {
    const [stoles, setStoles] = useState({
        products: []
    }); 

    useEffect(() => {
        API.getStoles().then(results => {
            setStoles({
                ...stoles, 
                products: results.data
            });
        });
    }, []);

    const productsToMap = stoles.products.map(product => {
        return(
            <Grid item xs={9} sm={4} md={3}>
                <Product
                    productinfo={product}
                />
            </Grid>
        )
    })

    return(
        <Grid container> 
            {productsToMap}
        </Grid>
    )
}

export default Stoles;