import { React, useEffect, useState } from "react";
import ShopProduct from '../../components/ShopProduct';
import { Grid } from '@material-ui/core';
import API from '../../utils/API';

const Shop = (props) => {
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