import { React, useEffect, useState } from "react";
import ShopProduct from '../../components/ShopProduct';
import { Grid } from '@material-ui/core';
import API from '../../utils/API';

const Shop = (props) => {
    let [savedProducts, setSavedProducts] = useState({
        cart: props.cart,
        addCart: (e) => {
            let newobj = JSON.parse(e.target.value)
            let cartArr = savedProducts.cart
            for (let i = 0; i < cartArr.length; i++) {
                if (cartArr[i].id === newobj.id) {
                    alert("You already have this item in your cart :)")
                    return;
                }
            }
            let newcart = cartArr.push(newobj)
            setSavedProducts({
                ...savedProducts,
                cart: newcart
            })
        }
    })
    useEffect(() => {
        props.updateCart(savedProducts.cart)
    }, [savedProducts.cart])
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
                    interactCart={savedProducts.addCart}
                />
            </Grid>
        )
    })

    return (
        <Grid container>
            {productsMaped}
        </Grid>
    )
}
export default Shop;