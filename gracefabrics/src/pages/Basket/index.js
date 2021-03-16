import React, { Component, useContext } from "react";
import { CartProvider, useCartContext } from '../../utils/CartContext';
import ShopProduct from '../../components/ShopProduct';
import { Grid } from '@material-ui/core';
const Basket = () => {
  const [state, dispatch] = useCartContext();

  const shoppingList = [];
  return (
    <CartProvider>
      <div>
        {console.log(state)}

        <div>
          {state.cart.length === 0 ? ("Your cart is empty") : (
            <div className="main">
              There are { state.cart.length} items in your cart.
            </div>
          )}
          {
            state.cart.length > 0 && (
              <div>

                {state.cart.map((product) => (
                    <Grid item xs={9} sm={4} md={3} key={product.id}>
                      <ShopProduct
                        productinfo={product}
                        buttonTxt="Delete"
                        btnType="removeItem" />
                      <button onClick={() => dispatch({ type: 'removeItem', product: product })}>
                        X
                      </button>
                    </Grid>
                    
                  )
                  )}
              </div>
            )
          }
        </div>

      </div>
    </CartProvider>
  );
}


export default Basket;