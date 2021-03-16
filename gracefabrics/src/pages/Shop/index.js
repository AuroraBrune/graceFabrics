import { React, useEffect, useState } from "react";
import ShopProduct from '../../components/ShopProduct';
import { Grid } from '@material-ui/core';
import API from '../../utils/API';

const Shop = (props) => {

    let [productsList, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        API.getSortedStoles(props.type).then(function (res) {
            setProducts({
                products: res.data
            })
        })
    }, []);

    let productsMaped = productsList.products.map(product => {
        return (
            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <ShopProduct
                    productinfo={product}
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