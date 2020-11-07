import React from 'react';
import Carousel from '../components/carousel';
// import { Grid } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core/Grid';
import FilterProducts from '../filterProducts';

export default function Banners(){
    return(
        <div>
            {Carousel}
            This is the Banners page
            (Will add filter for banners)
            <FilterProducts />
        </div>
    )
}
