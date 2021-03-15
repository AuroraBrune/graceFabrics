import React from "react";
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import UpdateForm from '../UpdateForm';
import './manageProduct.css';

const ManageProduct = (props) => {
  
  function deleteRender(event) {
    if(window.confirm("Are you sure you want to delete this Product?")){
      API.deleteProduct(event).then((err) => {
        if(err){
          alert("Something went wrong! Product may not have been deleted :(")
        }
          alert("The Product has been deleted")
          props.renderProducts()
      })
    }
    else{
      return
    }
  }

  function updateForm(e) {
  document.getElementById(e.currentTarget.value).setAttribute("style", "display:block")
  }

  const product = props.productinfo;
  return (

    <div id="productId" value={product.id}>
      <table >
        <tbody>
          <tr>
            <td><strong> Current Name: {product.name} </strong></td>
          </tr>
          <tr>
            <td> <img src={product.img1}></img> </td>
          </tr>
          <tr>
            <td> Current Price: ${product.price} </td>
          </tr>
          <tr>
            <td> Current Category: {product.type} </td>
          </tr>
          <tr>
            <td> Current Description: {product.description} </td> 
          </tr>
        </tbody>
      <Button value={product.id} onClick={updateForm}>
        <strong>Update</strong>
      </Button>
      <Button onClick={deleteRender} data-pid={product.id}>
        <strong>Delete</strong>
      </Button>
      </table>
      <UpdateForm
        productinfo={product}
        renderProducts={props.renderProducts} />
    </div>
  );
}

export default ManageProduct;