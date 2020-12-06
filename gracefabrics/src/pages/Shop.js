import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid, AppBar, Toolbar } from '@material-ui/core/';
import API from '../utils/API';
import Button from '@material-ui/core/Button';

const Shop = () => {
    let [productsList, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        API.getProducts().then(results => {
            setProducts({
                ...productsList,
                products: results.data
            });
            console.log(productsList.products)
        });
    }, []);


    const renderSortedNav = (event) => {
        API.getSortedStoles(event).then(function (res) {
            console.log("it worked!")
            setProducts({
                ...productsList,
                products: res.data
            })

        })
    }
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
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={renderSortedNav}>All Products</Button>
                    <Button color="inherit" value="banners" onClick={renderSortedNav}>Banners</Button>
                    <Button color="inherit" value="stoles" onClick={renderSortedNav}>Stoles</Button>
                    <Button value="rainbow-stoles" color="inherit" onClick={renderSortedNav}>Rainbow</Button>
                    <Button color="inherit" value="christmas-stoles" onClick={renderSortedNav}>Chirstmas</Button>
                    <Button color="inherit" value="easter-stoles" onClick={renderSortedNav}>Eater</Button>
                    <Button color="inherit" value="pentecost-stoles" onClick={renderSortedNav}>Pentecost</Button>
                    <Button color="inherit" value="lenten-stoles" onClick={renderSortedNav}>Lenten</Button>
                    <Button color="inherit" value="advent-stoles" onClick={renderSortedNav}>Advent</Button>
                </Toolbar>
            </AppBar>

            {productsMaped}
        </Grid>
    )
}

export default Shop;