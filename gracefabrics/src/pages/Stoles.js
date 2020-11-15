import React , { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';

const Stoles = () => {
    const [christmasList, setChristmasList] = useState({
        products: []
    }); 

    useEffect(() => {
        API.getChristmasStoles().then(results => {
            setChristmasList({
                ...christmasList, 
                products: results.data
            });
        });
    }, []);

    // const [rainbowList, setRainbowList] = useState({
    //     products: []
    // }); 

    // useEffect(() => {
    //     API.getRainbowStoles().then(results => {
    //         setRainbowList({
    //             ...rainbowList, 
    //             products: results.data
    //         });
    //     });
    // }, []);

    const productsToMap = christmasList.products.map(product => {
        // console.log(product);
        return(
            <Grid item xs={9} sm={4} md={3}>
                <Product
                    productinfo={product}
                />
            </Grid>
        )
    })

    return(
        <Grid container> 
            {productsToMap}
        </Grid>
    )
}

export default Stoles;