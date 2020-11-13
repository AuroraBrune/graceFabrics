import React from 'react';
import Carousel from '../components/carousel';
// import { Grid } from '@material-ui/core/Grid';
import FilterProducts from '../filterProducts';

export default function Gallery({onChange}){
    return(
        <div>
            {Carousel}
            This is the Gallery page.
            <FilterProducts onChange={onChange}/>
        </div>
    )
}

