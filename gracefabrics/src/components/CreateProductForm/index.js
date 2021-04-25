
import { React, useEffect, useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import API from '../../utils/API';
export default function CreateProductForm(props) {
    let [newImage, setNewImage] = useState('')
    let [preview, setPreview] = useState(false)
    let [newProduct, setNewProduct] = useState({
        name: "",
        type: "",
        price: "",
        description: "",
        img1: ""
    }
    )
    let handleNewImage = e => {
        setNewImage(e.target.files[0])
        setPreview(true)
    }
    let handleImgSubmit = async (image) => {
        setNewProduct({
            ...newProduct,
            img1: image.name
        })
        let fd = new FormData()
        fd.append('image', image)
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }
        try{
            const res = await axios.post('/api/upload', fd, config)
            console.log(res.data)
        } catch(err){
            console.log(err)
        }
    }
    function updateProductsObj(e) {
        setNewProduct({
            ...newProduct,
            [e.target.id]: e.target.value
        })
        document.getElementById("CreateButton").value = JSON.stringify(newProduct)
    }
    function createRender(event) {
        API.createProduct(event).then(() => {
            document.querySelectorAll("input").forEach(function (input) {
                input.value = ""
            })
            setPreview(false)
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
                        <td> {preview ?
                            <>
                                <button onClick={() => { setNewImage(''); setPreview(false); }}>X</button>
                                <img src={URL.createObjectURL(newImage)} alt={newImage} />
                                <button onClick={() => { handleImgSubmit(newImage) }}>Upload!</button>
                            </>
                            :
                            <>
                                <input type="file" onChange={handleNewImage} accept="png jpg jpeg" />
                            </>
                        }</td>
                        <td><Button id="CreateButton" onClick={createRender} value={JSON.stringify(newProduct)}>Create New Item</Button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}