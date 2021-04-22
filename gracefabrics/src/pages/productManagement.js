import { React, useEffect, useState } from 'react';
import ManageProduct from '../components/ManageProduct';
import CreateProductForm from '../components/CreateProductForm';
import { Grid, Button} from '@material-ui/core';
import API from '../utils/API';

const ProductManagement = () => {

    const [productsList, setProducts] = useState({
        products: [],
        renderProducts: () => {
            API.getProducts().then(results => {
                setProducts({
                    ...productsList,
                    products: results.data
                });
            });
        }
    });

    useEffect(() => {
        productsList.renderProducts()
    }, []);

    const productsToMap = productsList.products.map(product => {
        return (
            <Grid item xs={12} sm={12} md={12} key={product.id}>
                <ManageProduct
                    renderProducts={productsList.renderProducts}
                    productinfo={product}
                />
                <br></br>
            </Grid>
        )
    })
    return (
        <div >
            <div className="blurb">
                <h1 className="blurb">
                    Product Management
                </h1>
                <Button onClick={()=>{window.location.replace("/")}}>Log Out</Button>
            </div>
            <CreateProductForm renderProducts = {productsList.renderProducts}/>
            <hr />
            <Grid container>
                {productsToMap}
            </Grid>
        </div>
    )
}
export default ProductManagement;











