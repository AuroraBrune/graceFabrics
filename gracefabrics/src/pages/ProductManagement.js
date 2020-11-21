import React, { useEffect, useState } from "react";
import ProductTemplate from '../components/ProductTemplate';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

// const [newName, setName] = useState();
// const [newType, setType] = useState();
// const [newPrice, setPrice] = useState();
// const [newDescription, setDescription] = useState();
// const [newImage, setImage] = useState();

// function getUpdatedProduct(){
//     console.log('newName' + newName)
//     console.log(newType)
//     console.log(newPrice)
//     console.log(newDescription)
//     console.log(newImage)
//     return(JSON.stringify({
//         "name":newName,
//         "type":newType,
//         "price":newPrice,
//         "description":newDescription,
//         "img1":newImage
//     }))
// }
   

    const productsToMap = productsList.products.map(product => {
        console.log(product)
        return (
            <Grid item xs={12} sm={12} md={12} key={product.id}>
                <ProductTemplate
                    productinfo={product}
                />
                <hr />
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
                            <td><Button id="CreateButton" onClick={API.createProduct} value={JSON.stringify(Products)}>Create New Item</Button></td>
                            {/* //onclick=api,create/submitform */}
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











