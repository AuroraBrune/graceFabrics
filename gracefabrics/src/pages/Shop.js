import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const Shop = () => {

    const [productsList, setProducts] = useState({
        products: [],
        renderProducts: () => {
            API.getSorte().then(results => {
                setProducts({
                    ...productsList,
                    products: results.data
                });
            });
        }
    }); 

    useEffect(() => {
        API.getProducts().then(results => {
            setProducts({
                ...productsList, 
                products: results.data
            });
        });
    }, []);

    const productsToMap = productsList.products.map(product => {

        return(
            <Grid item xs={9} sm={4} md={3} key = {product.id}>
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

export default Shop;