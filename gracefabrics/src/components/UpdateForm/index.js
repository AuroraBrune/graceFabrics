import React from "react";
import {Button, TextField} from '@material-ui/core';
import './updateForm.css';
import API from '../../utils/API';

export default function UpdateForm(props) {
    let updatedProduct = props.productinfo;
    function updateRender(event) {
        document.getElementById((updatedProduct.id)).setAttribute("style", "display:none") 
        API.updateItem(event).then(() => {
            alert("The Product has been updated")
          props.renderProducts()
        })
      }
    function updateProductsObj(e){
        updatedProduct[e.target.name] = e.target.value
        document.getElementById((updatedProduct.id +"updateBtn")).value = JSON.stringify(updatedProduct)
    }
    function nevermind(e){
       document.getElementById(e.currentTarget.value).setAttribute("style", "display:none")
    }
    return (
        <form className="updateForm" id={updatedProduct.id}>
            <table >
                <tbody>
                    <tr><td> <TextField onChange={updateProductsObj} name="name" placeholder="Update Name"/></td></tr>
                    <tr><td> <TextField onChange={updateProductsObj}  name="price" placeholder="Update Price" /> </td></tr>
                    <tr><td> <TextField onChange={updateProductsObj}  name="type" placeholder="Update Category" /> </td></tr>
                    <tr><td> <TextField onChange={updateProductsObj} name="description" placeholder="Update Description" /> </td></tr>
                    <tr><td> <TextField onChange={updateProductsObj}  name="img1" placeholder="Update Image URL" /></td></tr>
                </tbody>
            <Button id={updatedProduct.id + "updateBtn"} value={JSON.stringify(updatedProduct)} onClick={updateRender}>Sumbit Update</Button>
            <Button value={updatedProduct.id} onClick={nevermind}>Nevermind</Button>
            </table>
        </form>
    )
}