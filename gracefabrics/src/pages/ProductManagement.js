import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import Button from '@material-ui/core/Button';

const ProductManagement = () => {
    const [productsList, setProducts] = useState({
        products: []
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
        return (

            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <Product
                    productinfo={product}
                />
                <Button>Edit</Button>
                <Button onClick={API.deleteProduct} data-pid={product.id}>Delete</Button>
            </Grid>


        )
    })
    return (
        <div>
            <button>Create New Item</button>
            <Grid container>
                {productsToMap}
            </Grid>
        </div>
    )
}
export default ProductManagement;











