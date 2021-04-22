
import { React, useEffect, useState } from 'react';
import { TextField, Button,  makeStyles  } from '@material-ui/core';
import API from '../../utils/API';
export default function CreateProductForm(props) {
    let [newProduct, setNewProduct] = useState({
        name: "",
        type: "",
        price: "",
        description: "",
        img1: ""
    }
    )
    function updateProductsObj(e) { 
        let change = e.target.id
        setNewProduct({
            ...newProduct,
            [change]: e.target.value
        }) 
        document.getElementById("CreateButton").value = JSON.stringify(newProduct)
    }
    function createRender(event) {
        API.createProduct(event).then(() => {
            document.querySelectorAll("input").forEach(function (input) {
                input.value = ""
            })
            alert("New Product Created --Scroll to the bottom to see :)")
            props.renderProducts()
        })
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();
    return (
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
                        <td><Button id="CreateButton" onClick={createRender} value={JSON.stringify(newProduct)}>Create New Item</Button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}