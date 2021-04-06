import { React, useEffect } from 'react';
import API from '../../utils/API';

export default function ResetPassword(){
    useEffect(()=>{
        console.log("hit")
        API.resetPassword().then((res)=>{
            console.log("hit2")
            console.log(res)
        })
    }
    ,[])
    return(
        <div>
            reset password
        </div>
    )
}