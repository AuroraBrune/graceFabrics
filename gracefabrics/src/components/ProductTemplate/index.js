import React from 'react';

const ProductTemplate = (productinfo)=> {
  const product = productinfo.productinfo;
  console.log(product.id)
  function Test (){
    let name = document.getElementById("name")
    console.log(name.value)
  }
  return (
     <div id="name"  value={product.id}>
       <table>
        <tbody>
          <tr>
            <td ><strong> Current Name: {product.name} </strong></td><td> <input label="nName" placeholder="Updated Name" onChange={Test}/></td>
          </tr>
          <tr>
            <td> Current Price: ${product.price} </td><td> <input label="nPrice" placeholder="Updated Price"/> </td>
          </tr>
          <tr>
            <td> Current Description: {product.description} </td><td> <input label="nDescription" placeholder="Updated Description"/> </td>
          </tr>
          <tr>
            <td> <img src={product.img1}></img> </td><td> <input label="nImage" placeholder="Updated Image URL"/></td>
          </tr>
        </tbody>
       </table>
      </div>
  );
}

export default ProductTemplate;