import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
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
            <ul>
                <li>
                    <Button color="primary" onClick={renderSortedNav}>
                        All Products
              </Button>
                </li>
                <li>
                    <Button color="primary" value="banners" onClick={renderSortedNav}>
                        Banners
              </Button>
                </li>
                <li>
                    <Button color="primary" value="stoles" onClick={renderSortedNav}>
                        Stoles
              </Button>
                </li>
                <li>
                    <Button value="rainbow-stoles" color="primary" onClick={renderSortedNav}>
                        Rainbow Stoles
              </Button>
                </li>
                <li>
                    <Button color="primary" value="christmas-stoles" onClick={renderSortedNav}>
                        Chirstmas Stoles
              </Button>
                </li>
                <li>
                    <Button color="primary" value="easter-stoles" onClick={renderSortedNav}>
                        Eater Stoles
              </Button>
                </li>
                <li>
                    <Button color="primary" value="pentecost-stoles" onClick={renderSortedNav}>
                        Pentecost Stoles
              </Button>
                </li>
                <li>
                    <Button color="primary" value="lenten-stoles" onClick={renderSortedNav}>
                        Lenten Stoles
              </Button>
                </li>
                <li>
                    <Button color="primary" value="advent-stoles" onClick={renderSortedNav}>
                        Advent Stoles
              </Button>
                </li>
            </ul>


            {productsMaped}
        </Grid>
    )
}

export default Shop;