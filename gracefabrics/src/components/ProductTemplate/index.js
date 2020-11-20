import React from 'react';

const ProductTemplate = (productinfo)=> {
  const product = productinfo.productinfo;
  
  return (
     <div>
       <table>
        <tbody>
          <tr>
            <td><strong> Current Name: {product.name} </strong></td><td> <input label="nName" placeholder="Updated Name"/></td>
          </tr>
          <tr>
            <td> Current Price: ${product.price} </td><td> <input label="nPrice" placeholder="Updated Price"/> </td>
          </tr>
          <tr>
            <td> Current Description: {product.description} </td><td> <input label="nDescription" placeholder="Updated Description"/> </td>
          </tr>
          <tr>
            <td> Current Image:{product.img1} </td><td> <input label="nDescription" placeholder="Updated Description"/></td>
          </tr>
        </tbody>
       </table>
      </div>
  );
}

export default ProductTemplate;