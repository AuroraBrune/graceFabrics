import { React, useEffect } from 'react';
import API from '../../utils/API';

export default function ResetPassword() {

    useEffect(() => {
        let paramArr =  window.location.href.split('?token=')[1].split('&email=');
        let params = {
            token: decodeURIComponent(paramArr[0]),
            email: paramArr[1]
        };
        API.resetPassword(params).then((res) => {
            if(res.data.showForm === false){
                document.getElementById("resetMessage").innerText = res.data.message
            }
            else{
                console.log(res.data.record)
            }
        })
    } , [])

    return (
        <div id="resetMessage">
            reset password
        </div>
    )
}