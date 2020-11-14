import React , { useEffect, useState } from "react";

const CartModal = () => {

  let [cart, setCart] = useState([])
  
  let localCart = (localStorage.getItem("cart"));

  const addItem = (item)  =>   {
    let cartState = [...cart]
    let{ID} = item;
    let existingItem = cartState.find(cartItem => cartItem.ID == ID);

    if(existingItem) {
      existingItem.quantity += item.quantity
    } else {
      cartState.push(item)
    }
    setCart(cartState)
    let stringCart = JSON.stringify(cartState);
    localStorage.setItem("cart", stringCart)
  }

  const updateItem = (itemID, amount) => {
    let cartState = [...cart]
    let exItem = cartState.find(item => item.ID == itemID);
    
    if(!exItem) return

    exItem.quantity += amount;

    if(exItem.quantity <= 0) {
      cartState = cartState.filter(item => item.ID != itemID)
    }
    setCart(cartState);
    let cartString = JSON.stringify(cartState);
    localStorage.setItem('cart', cartString);

  }
  const removeItem = (itemID) => {
    let cartState = [...cart]

    cartState = cartState.filter(item => itemID != itemID);
    setCart(cartState);

    let cartString = JSON.stringify(cartState)
    localStorage.setItem('cart', cartString)
  }
  
  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)

  }, []) 

  console.log(localCart)
  localCart.addItem({
    name:"testItem",
    type:"stole",
    img1:"testImg",
    description:"test description",
    price:"1.99"
  })
 

  return (
  <div>Here's the shopping cart</div>
  )
}

export default CartModal;


// useEffect(() => {
//   API.getProducts().then(results => {
//       setProducts({
//           ...productsList, 
//           products: results.data
//       });
//   });
// }, []);

// const productsToMap = productsList.products.map(product => {

//   return(
//       <Grid item xs={9} sm={4} md={3} key = {product.id}>
//           <Product 
//               productinfo={product}
//           />
//       </Grid>
//   )
// })
