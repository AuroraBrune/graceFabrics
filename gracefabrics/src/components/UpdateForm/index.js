import {React, useState, useEffect} from "react";
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import './updateForm.css';
import API from '../../utils/API';

export default function UpdateForm(props) {
    let [newImage, setNewImage] = useState('')
    let [preview, setPreview] = useState(false)
    let [updatedProduct, setUpdatedProduct] = useState(props.productinfo)
    let handleNewImage = e => {
        setNewImage(e.target.files[0])
        setPreview(true)
    }
    let handleImgSubmit = async (image) => {
        setUpdatedProduct({
            ...updatedProduct,
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
        setUpdatedProduct({
            ...updatedProduct,
            [e.target.id]: e.target.value
        })
        document.getElementById(updatedProduct.id + "updateBtn").value = JSON.stringify(updatedProduct)
    }


    function updateRender(event) {
        document.getElementById((updatedProduct.id)).setAttribute("style", "display:none")
        API.updateItem(event).then(() => {
            alert("The Product has been updated")
            props.renderProducts()
        })
    }

    function updateProductsObj(e) {
        updatedProduct[e.target.name] = e.target.value
        document.getElementById((updatedProduct.id + "updateBtn")).value = JSON.stringify(updatedProduct)
    }

    function nevermind(e) {
        document.getElementById(e.currentTarget.value).setAttribute("style", "display:none")
    }

    return (
        <form className="updateForm" id={updatedProduct.id}>
            <table >
                <tbody>
                    <tr><td> <TextField onChange={updateProductsObj} name="name" placeholder="Update Name" /></td></tr>
                    <tr><td> <TextField onChange={updateProductsObj} name="price" placeholder="Update Price" /> </td></tr>
                    <tr><td> <TextField onChange={updateProductsObj} name="type" placeholder="Update Category" /> </td></tr>
                    <tr><td> <TextField onChange={updateProductsObj} name="description" placeholder="Update Description" /> </td></tr>
                    <tr><td>{preview ?
                            <>
                                <button onClick={() => { setNewImage(''); setPreview(false); }}>X</button>
                                <img src={URL.createObjectURL(newImage)} alt={newImage} />
                                <button onClick={() => { handleImgSubmit(newImage) }}>Upload!</button>
                            </>
                            :
                            <>
                                <input type="file" onChange={handleNewImage} accept="png jpg jpeg" />
                            </>
                        }</td></tr>
                </tbody>
                <Button id={updatedProduct.id + "updateBtn"} value={JSON.stringify(updatedProduct)} onClick={updateRender}>Sumbit Update</Button>
                <Button value={updatedProduct.id} onClick={nevermind}>Nevermind</Button>
            </table>
        </form>
    )
}