import React from 'react';
import { Button } from '@material-ui/core';

export default function PageNotFound(){

    return(
        <div>
            <h1 className="main">404</h1>
            <br></br>
            <p className="blurb">Sorry this isn't a real page           
            <Button onClick={()=>{window.location.replace("/")}}>
            Return to Color for the Journey</Button></p>
        </div>
    )
}