import React, { useEffect, useState } from "react";
import ManageProduct from '../components/ManageProduct';
import { Grid, Button, makeStyles, TextField } from '@material-ui/core';
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
        API.getProducts().then(results => {
            setProducts({
                ...productsList,
                products: results.data
            });
        });
    }, []);



    function createRender(event){
        API.createProduct(event).then( () => {
            document.querySelectorAll("input").forEach(function (input){
                    input.value = ""
            })
            alert("New Product Created --Scroll to the bottom to see :)")
            productsList.renderProducts()
        }) 
    }

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

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    let Products = {
        name: "",
        type: "",
        price: "",
        description: "",
        img1: ""
    }
    function updateProductsObj(e){
        Products[e.target.id] = e.target.value
        document.getElementById("CreateButton").value = JSON.stringify(Products)
    }
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <table>
                    <tbody>
                        <tr>
                            <td><TextField id="name" label="Name" variant="outlined" onChange={updateProductsObj} /></td>
                            <td><TextField id="type" label="Category" variant="outlined" onChange={updateProductsObj} /></td>
                        </tr>
                        <tr>
                            <td><TextField id="price" label="Price" variant="outlined" onChange={updateProductsObj} /></td>
                            <td><TextField id="description" label="Description" variant="outlined" onChange={updateProductsObj} /></td>
                        </tr>
                        <tr>
                            <td><TextField id="img1" label="URL to Image" variant="outlined" onChange={updateProductsObj} /></td>
                            <td><Button id="CreateButton" onClick={createRender} value={JSON.stringify(Products)}>Create New Item</Button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <hr />
            <Grid container>
                {productsToMap}
            </Grid>
        </div>
    )
}
export default ProductManagement;











