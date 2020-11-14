import React, { useEffect, useState } from "react";
import Product from '../components/Product';
import { Grid } from '@material-ui/core/';
import API from '../utils/API';
import { Card, Icon, CardTitle, Row, Col } from 'react-materialize'
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
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <Card
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={product.img1} reveal waves="light" />}
                        reveal={<p>{product.description}</p>}
                        revealIcon={<Icon>more_vert</Icon>}
                        title={product.name}
                    >
                        <p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </p>
                    </Card>
                </Col>
            </Row>


        )
    })
    return (
        <Grid container>
            {productsToMap}
            <button>Create New Item</button>
        </Grid>
    )
}
export default ProductManagement;











