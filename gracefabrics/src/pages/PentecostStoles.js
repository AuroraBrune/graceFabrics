import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const PentecostStoles = () => {
    const [pentecostList, setPentecostList] = useState({
        products: []
    }); 

    useEffect(() => {
        API.getPentecostStoles().then(results => {
            setPentecostList({
                ...pentecostList, 
                products: results.data
            });
        });
    }, []);


    const productsToMap = pentecostList.products.map(product => {
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

export default PentecostStoles;