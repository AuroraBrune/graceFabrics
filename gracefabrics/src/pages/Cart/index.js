import { React, useState, useEffect } from 'react';
import ShopProduct from '../../components/ShopProduct';
import { Grid } from '@material-ui/core';

export default function Cart() {
    let retrieved;
    if(JSON.parse(localStorage.getItem("cart"))!== null){
        retrieved = JSON.parse(localStorage.getItem("cart"))
    }
    else{
        retrieved =[]
    }
    let [cartState, setCartState] = useState({
        cart: retrieved,
        removeCart: (e) => {
            let cartArr = cartState.cart
            for (let i = 0; i < cartArr.length; i++) {
                if (cartArr[i].id == e.target.name) {
                    cartArr.splice(i, 1)
                    localStorage.setItem("cart", JSON.stringify(cartArr))
                    setCartState({
                        ...cartState,
                        cart: cartArr
                    })
                    return;
                }
            }
        }
    });

    useEffect(() => {
        retrieved = JSON.parse(localStorage.getItem("cart"))
        if (retrieved !== null) {
            setCartState({
                ...cartState,
                cart: retrieved
            })
        }
        else {
            setCartState({
                ...cartState,
                cart: []
            })
        }
    }, [])

    let cartItems = cartState.cart.map(product => {
        return (
            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <ShopProduct
                    productinfo={product}
                    buttonTxt="Delete"
                    btnType="removeItem"
                    interactCart={cartState.removeCart}
                />
            </Grid>
        )
    });

    return (
        <div>
            <p className="main">
                There are {cartState.cart.length} items in your cart.
            </p>
            <Grid container>
                {cartItems}
            </Grid>
        </div>
    )
} 
