import { React, useState, useEffect } from 'react';
import ShopProduct from '../../components/ShopProduct';
import { Grid, Button } from '@material-ui/core';

export default function Cart(props) {
    let [savedProducts, setSavedProducts] = useState({
        cart: props.cart,
        removeCart: (e) => {
            for (let i = 0; i < savedProducts.cart.length; i++) {
                let cartArr = savedProducts.cart
                if (cartArr[i].id == e.target.name) {
                    let newcart = savedProducts.cart.splice(i, 1)
                    setSavedProducts({
                        ...savedProducts,
                        cart: newcart
                    })
                    return;
                }
            }
           
        }
    })
    useEffect(() => {
        props.updateCart(savedProducts.cart)
    }, [savedProducts.cart])
    useEffect(() => {
        setSavedProducts({
            ...savedProducts,
            cart: props.cart
        })
    }, [props.cart])
    
    let cartItems = savedProducts.cart.map(product => {
     return (
            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <ShopProduct
                    productinfo={product}
                    buttonTxt="Delete"
                    btnType="removeItem"
                    interactCart={savedProducts.removeCart}
                />
            </Grid>
        )
    })
    return (
        <div>
            <p className="main">
                There are {savedProducts.cart.length} items in your cart.
            </p>
            <Grid container>
                {cartItems}
            </Grid>
        </div>
    )
} 
