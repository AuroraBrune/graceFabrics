import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './updateForm.css'
import API from '../../utils/API';

export default function UpdateForm(props) {
    function updateRender(event) {
        document.getElementById((props.id)).setAttribute("style", "display:none") 
        API.updateItem(event).then(() => {
            alert("The Product has been updated")
          props.renderProducts()
        })
      }
    let updatedProduct = {
        id: props.id,
        name: "",
        price: "",
        type: "",
        description: "",
        img1: ""
    }

    function updateName() {
        const newName = document.getElementById((props.id + "Name")).value
        updatedProduct.name = newName;
        let updateBtn = document.getElementById((props.id +"updateBtn"))
        updateBtn.value = JSON.stringify(updatedProduct)
        console.log(updatedProduct)
    }
    function updatePrice() {
        const newPrice = document.getElementById((props.id + "Price")).value
        updatedProduct.price = newPrice;
        let updateBtn = document.getElementById((props.id +"updateBtn"))
        updateBtn.value = JSON.stringify(updatedProduct)
    }
    function updateCategory() {
        const newCategory = document.getElementById((props.id + "Category")).value
        updatedProduct.type = newCategory;
        let updateBtn = document.getElementById((props.id +"updateBtn"))
        updateBtn.value = JSON.stringify(updatedProduct)
    }
    function updateDescription() {
        const newDescription = document.getElementById((props.id + "Description")).value
        updatedProduct.description = newDescription;
        let updateBtn = document.getElementById((props.id +"updateBtn"))
        updateBtn.value = JSON.stringify(updatedProduct)
    }
    function updateImage() {
        const newImage = document.getElementById((props.id + "Image")).value
        updatedProduct.img1 = newImage;
        let updateBtn = document.getElementById((props.id +"updateBtn"))
        updateBtn.value = JSON.stringify(updatedProduct)
    }
    function nevermind(event){
        let id = event.currentTarget.value
        let form = document.getElementById(id)
        form.setAttribute("style", "display:none")

    }
    return (
        <form class="updateForm" id={props.id}>
            <table >
                <tbody>
                    <tr><td> <TextField onChange={updateName} label="Name" id={props.id + "Name"} placeholder="Updated Name" /></td></tr>
                    <tr><td> <TextField onChange={updatePrice} label="Price" id={props.id + "Price"} placeholder="Updated Price" /> </td></tr>
                    <tr><td> <TextField onChange={updateCategory} label="Category" id={props.id + "Category"} placeholder="Updated Category" /> </td></tr>
                    <tr><td> <TextField onChange={updateDescription} label="Description" id={props.id + "Description"} placeholder="Updated Description" /> </td></tr>
                    <tr><td> <TextField onChange={updateImage} label="Image" id={props.id + "Image"} placeholder="Updated Image URL" /></td></tr>
                </tbody>
            <Button id={props.id + "updateBtn"} value={JSON.stringify(updatedProduct)} onClick={updateRender}>Sumbit Update</Button>
            <Button value={props.id} onClick={nevermind}>Nevermind</Button>
            </table>
        </form>
    )
}