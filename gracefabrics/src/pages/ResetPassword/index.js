import { React, useEffect } from 'react';
import API from '../../utils/API';

export default function ResetPassword(){
    useEffect(()=>{
        API.resetPassword()
    }
    ,[])
    return(
        <div>
            reset password
        </div>
    )
}