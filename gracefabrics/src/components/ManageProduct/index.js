import React from "react";
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import UpdateForm from '../UpdateForm';
import './manageProduct.css';

const ManageProduct = (props) => {
  function deleteRender(event) {
    API.deleteProduct(event).then(() => {
      alert("The Product has been deleted")
      props.renderProducts()
    })
  }
  function updateForm(event) {
  let id = event.currentTarget.value
  let form = document.getElementById(id)
  form.setAttribute("style", "display:block")
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
        id={product.id}
        //pass other product info so that update form can be auto filled
        //and can update without the user needing to reinput all product info
        renderProducts={props.renderProducts} />
    </div>
  );
}

export default ManageProduct;