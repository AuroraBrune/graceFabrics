import Product from '../components/Product';
import ProductGrid from "../components/ProductGrid";
import React from "react";

function Gallery() {
    return(
        <div className="column">
            <ProductGrid/>
            <div>
                <Product class="card"/>
                <Product class="card"/>
                <Product class="card"/>
            </div>
        </div>
    )
}

export default Gallery;