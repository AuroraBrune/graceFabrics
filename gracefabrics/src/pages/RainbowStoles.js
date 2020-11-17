import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const RainbowStoles = () => {
    const [rainbowList, setrainbowList] = useState({
        products: []
    }); 
    useEffect(() => {
        API.getRainbowStoles().then(results => {
            setrainbowList({
                ...rainbowList, 
                products: results.data
            });
        });
    }, []);

    const productsToMap = rainbowList.products.map(product => {
        console.log(product);
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

export default RainbowStoles;