import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import './shop.css'

const Shop = (props) => {
    let [productsList, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        console.log(props)
        API.getSortedStoles(props.type).then(function (res) {
            console.log("it worked!")
            setProducts({
                products: res.data
            })
        })
    }, []);



    let productsMaped = productsList.products.map(product => {

        return (
            <Grid item xs={9} sm={4} md={3} key={product.id}>
                <Product
                    productinfo={product}
                />
            </Grid>
        )
    })



    return (
        <Grid container>
            {/* <AppBar id="ShopNav" position="static" >
                <Toolbar>
                    <Button color="inherit" onClick={renderSortedNav}>All Products</Button>
                    <Button color="inherit" value="banners" onClick={renderSortedNav}>Banners</Button>
                    <Button color="inherit" value="stoles" onClick={renderSortedNav}>Stoles</Button>
                    <Button value="rainbow-stoles" color="inherit" onClick={renderSortedNav}>Rainbow</Button>
                    <Button color="inherit" value="christmas-stoles" onClick={renderSortedNav}>Chirstmas</Button>
                    <Button color="inherit" value="easter-stoles" onClick={renderSortedNav}>Easter</Button>
                    <Button color="inherit" value="pentecost-stoles" onClick={renderSortedNav}>Pentecost</Button>
                    <Button color="inherit" value="lenten-stoles" onClick={renderSortedNav}>Lenten</Button>
                    <Button color="inherit" value="advent-stoles" onClick={renderSortedNav}>Advent</Button>
                </Toolbar>
            </AppBar> */}

            {productsMaped}
        </Grid>
    )
}

export default Shop;