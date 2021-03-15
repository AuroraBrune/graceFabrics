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
            document.getElementById("Name").value = "" 
            document.getElementById("Type").value = ""
            document.getElementById("Price").value = ""
            document.getElementById("Description").value = ""
            document.getElementById("Image").value = ""
            alert("New Product Created --Scroll to the bottom to see :)")
            productsList.renderProducts()
        }) 
    }

    const productsToMap = productsList.products.map(product => {
        console.log(product)
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
    function defineName() {
        let newName = document.getElementById("Name").value
        Products.name = newName
        let button = document.getElementById("CreateButton")
        button.value = JSON.stringify(Products)
    }
    function defineType() {
        let newType = document.getElementById("Type").value
        Products.type = newType
        let button = document.getElementById("CreateButton")
        button.value = JSON.stringify(Products)

    }
    function definePrice() {
        let newPrice = document.getElementById("Price").value
        Products.price = newPrice
        let button = document.getElementById("CreateButton")
        button.value = JSON.stringify(Products)

    }
    function defineDescription() {
        let newDescription = document.getElementById("Description").value
        Products.description = newDescription
        let button = document.getElementById("CreateButton")
        button.value = JSON.stringify(Products)
    }
    function defineImg() {
        let newImg = document.getElementById("Image").value
        Products.img1 = newImg
        let button = document.getElementById("CreateButton")
        button.value = JSON.stringify(Products)
        console.log(button.value)
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <table>
                    <tbody>
                        <tr>
                            <td><TextField id="Name" label="Name" variant="outlined" onChange={defineName} /></td>
                            <td><TextField id="Type" label="Category" variant="outlined" onChange={defineType} /></td>
                        </tr>
                        <tr>
                            <td><TextField id="Price" label="Price" variant="outlined" onChange={definePrice} /></td>
                            <td><TextField id="Description" label="Description" variant="outlined" onChange={defineDescription} /></td>
                        </tr>
                        <tr>
                            <td><TextField id="Image" label="URL to Image" variant="outlined" onChange={defineImg} /></td>
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











