import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import { Card } from 'react-materialize'
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
      
                    <Card>
                        <h3>{product.name}</h3>
                        <img src={product.img1}></img>
                        <p>{product.description}</p>

                        <button>Edit</button>
                        <button>Delete</button>
                    </Card>
           
        )
    })
    return (
        <Grid container>
            {productsToMap}
            <button>Create New Item</button>
        </Grid>
    )
}
export default ProductManagement;











