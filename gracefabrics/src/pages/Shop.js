import React from "react";
import Product from '../components/Product';
import ProductGrid from "../components/ProductGrid";


function Shop() {
    return(
        <div className="column">
            shop
            <ProductGrid/>
            <div>
                <Product class="card"/>
                <Product class="card"/>
                <Product class="card"/>
            </div>
        </div>
    )
}

export default Shop;