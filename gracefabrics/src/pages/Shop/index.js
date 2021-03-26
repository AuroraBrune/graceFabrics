import { React, useEffect, useState } from 'react';
import ShopProduct from '../../components/ShopProduct';
import { Grid } from '@material-ui/core';
import API from '../../utils/API';

export default function Shop (props){
    let retrieved;
    if(JSON.parse(localStorage.getItem("cart"))!== null){
        retrieved = JSON.parse(localStorage.getItem("cart"))
    }
    else{
        retrieved =[]
    }
    
    let [cartState, setCartState] = useState({
        cart: [],
        addCart: (e) => {
            let newobj = JSON.parse(e.target.value)
            let cartArr = cartState.cart
            for (let i = 0; i < cartArr.length; i++) {
                if (cartArr[i].id === newobj.id) {
                    alert(newobj.name + " is already in your cart :)")
                    return;
                }
            }
            let newcart = cartArr.push(newobj)
            setCartState({
                ...cartState,
                cart: newcart
            })
            localStorage.setItem("cart", JSON.stringify(cartState.cart))
            alert(newobj.name + " has been added to your cart :)")
        }
    });
    useEffect(()=>{
        retrieved = JSON.parse(localStorage.getItem("cart"))
        if(retrieved !== null){
            setCartState({
                ...cartState,
                cart: retrieved
            })
        }
        else{
          setCartState({
            ...cartState,
            cart: []
          })
        }
      },[]);

    const [productsList, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        API.getSortedStoles(props.type).then(function (res) {
            setProducts({
                products: res.data
            })
        })
    }, [props.type]);

  
    const productsMaped = productsList.products.map(product => {
        return (
            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <ShopProduct
                    productinfo={product}
                    buttonTxt="Add to Cart"
                    btnType="addItem"
                    interactCart={cartState.addCart}
                />
            </Grid>
        )
    });

    return (
        <Grid container>
            {productsMaped}
        </Grid>
    )
}
