import { React, useEffect } from 'react';
import API from '../../utils/API';

export default function ResetPassword() {

    useEffect(() => {
        let paramArr =  window.location.href.split('?token=')[1].split('&email=');
        let params = {
            token: paramArr[0],
            email: paramArr[1]
        };
        console.log(params)
        API.resetPassword({token:params.token, email: params.email}).then((res) => {
            console.log(res)
        })
    }
        , [])
    return (
        <div>
            reset password
        </div>
    )
}