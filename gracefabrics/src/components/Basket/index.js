import React, { Component, useContext } from "react";
import {CartProvider, useCartContext} from '../../utils/CartContext'
import './basket.css'

const Basket = ()=> {
  const [state, dispatch] = useCartContext();

  const shoppingList = [];
  return(
    <CartProvider>
    <div> 
    {console.log(state)}    
    
      <div>
        { state.cart.length === 0 ? ("Your cart is empty") : (
          <div>
            There are { state.cart.length } items in your cart. 
          </div>
        )}
        {
          state.cart.length > 0 && (
            <div>
              <ul>
                {state.cart.map((product) => (
                    <li key={product.id}>
                     
                      <img id="basketImg" src={product.img1}></img>
                      <div>{product.name}, Price: {product.price}</div>
                    
                      <button onClick={() => dispatch({type:'removeItem', product:product})}>
                        X
                      </button>
                    </li>
                  ) 
                )}
              
              </ul>
            </div>
          )
        }
      </div>

    </div>
    </CartProvider>
  );
}


export default Basket;