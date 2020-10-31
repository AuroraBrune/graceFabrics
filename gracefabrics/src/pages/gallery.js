<<<<<<< HEAD
import React from 'react'
import Carousel from '../components/carousel'

export default function Gallery(){
    return(
        <Carousel/>
    )
}
=======
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
>>>>>>> bde80da79a7b3b20f3dc0c8e31be296bb1a6bab3
