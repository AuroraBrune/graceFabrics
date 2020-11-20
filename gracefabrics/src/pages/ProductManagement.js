import React, { useEffect, useState } from "react";
import ProductTemplate from '../components/ProductTemplate';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ProductManagement = () => {
    const [productsList, setProducts] = useState({
        products: []
    });

    useEffect(() => {
        API.getProducts().then(results => {
            setProducts({
                ...productsList,
                products: results.data
            });
        });
    }, []);

    const productsToMap = productsList.products.map(product => {
        return (
            <Grid item xs={12} sm={12} md={12} key={product.id}>
                <ProductTemplate
                    productinfo={product}
                />
                <Button onClick={API.updateItem}><strong>Update</strong></Button> 
                {/* //onclick=api.update */}
<<<<<<< HEAD
                <Button ><strong>Delete</strong></Button> 
=======
                <Button onClick={API.deleteProduct} data-pid={product.id}><strong>Delete</strong></Button> 
>>>>>>> main
                {/* //onclick=api.delete */}
                <hr/>
            </Grid>
        )
    })

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));

    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <table>
                    <tbody>
                        <tr>
                            <td><TextField id="Name" label="Name" variant="outlined" /></td>
                            <td><TextField id="Type" label="Category" variant="outlined" /></td>
                        </tr>
                        <tr>
                            <td><TextField id="Price" label="Price" variant="outlined" /></td>
                            <td><TextField id="Description" label="Description" variant="outlined" /></td>
                        </tr>
                        <tr>
                        <td><TextField id="Image" label="URL to Image" variant="outlined" /></td>
                        <td><Button >Create New Item</Button></td>
                            {/* //onclick=api,create/submitform */}
                        </tr>
                    </tbody>
            </table>
        </form>
        <hr/>
            <Grid container>
                {productsToMap}
            </Grid>
        </div>
    )
}
export default ProductManagement;











