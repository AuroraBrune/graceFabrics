import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import API from '../../utils/API';

let updatedProduct = {
  id:"",
  name:"",
  price:"",
  type:"",
  description:"",
  img1:""
}

function defineName(){
  const newName = document.getElementById("nName").value
  updatedProduct.id = document.getElementById("nName").name
  updatedProduct.name = newName;
  let updateBtn = document.getElementById("updateBtn")
  updateBtn.value = JSON.stringify(updatedProduct)
  console.log(updatedProduct)
}
function definePrice(){
  const newPrice = document.getElementById("nPrice").value
  updatedProduct.id = document.getElementById("nName").name
  updatedProduct.price = newPrice;
  let updateBtn = document.getElementById("updateBtn")
  updateBtn.value = JSON.stringify(updatedProduct)
}
function defineCategory(){
  const newCategory = document.getElementById("nCategory").value
  updatedProduct.id = document.getElementById("nName").name
  updatedProduct.type = newCategory;
  let updateBtn = document.getElementById("updateBtn")
  updateBtn.value = JSON.stringify(updatedProduct)
}
function defineDescription(){
  const newDescription = document.getElementById("nDescription").value
  updatedProduct.id = document.getElementById("nName").name
  updatedProduct.description = newDescription;
  let updateBtn = document.getElementById("updateBtn")
  updateBtn.value = JSON.stringify(updatedProduct)
}
function defineImage(){
  const newImage = document.getElementById("nImage").value
  updatedProduct.id = document.getElementById("nName").name
  updatedProduct.img1 = newImage;
  let updateBtn = document.getElementById("updateBtn")
  updateBtn.value = JSON.stringify(updatedProduct)
}

const ProductTemplate = (productinfo)=> {

  const product = productinfo.productinfo;
    console.log(parseInt(product.id))
  return (
     <div id="productId" value={product.id}>
       <table >
        <tbody>
          <tr>
            <td><strong> Current Name: {product.name} </strong></td><td> <input onChange={defineName} label="nName" id="nName" name={product.id} placeholder="Updated Name"/></td>
          </tr>
          <tr>
            <td> Current Price: ${product.price} </td><td> <input onChange={definePrice} label="nPrice" id="nPrice" placeholder="Updated Price"/> </td>
          </tr>
          <tr>
            <td> Current Category: ${product.type} </td><td> <input onChange={defineCategory} label="nCategory" id="nCategory" placeholder="Updated Category"/> </td>
          </tr>
          <tr>
            <td> Current Description: {product.description} </td><td> <input onChange={defineDescription} label="nDescription" id="nDescription" placeholder="Updated Description"/> </td>
          </tr>
          <tr>
            <td> <img src={product.img1}></img> </td><td> <input label="nImage" placeholder="Updated Image URL"/></td>
          </tr>
        </tbody>
       </table>
        {/* <Button onClick={API.updateItem} value={ JSON.stringify({product}) }> */}
        <Button id="updateBtn" number={product.id} onClick={API.updateItem}>
          <strong>Update</strong>
        </Button> 
        <Button onClick={API.deleteProduct} data-pid={product.id}>
          <strong>Delete</strong>
        </Button>
      </div>
  );
}

export default ProductTemplate;