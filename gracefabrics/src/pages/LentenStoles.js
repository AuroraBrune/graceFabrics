import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const LentenStoles = () => {
    const [lentenList, setLentenList] = useState({
        products: []
    }); 

    useEffect(() => {
        API.getLentenStoles().then(results => {
            setLentenList({
                ...lentenList, 
                products: results.data
            });
        });
    }, []);

    const productsToMap = lentenList.products.map(product => {
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

export default LentenStoles;