import { React } from 'react'
import API from '../../utils/API'

export default function ForgotPassword() {
    function emailSubmit() {
        let userEmail = document.getElementById("emailPassReset").value
        console.log(userEmail)
        API.forgotPassword({email: userEmail})
    }
    return (
    <div>
        <input id="emailPassReset" placeholder="email"></input>
        <button onClick={emailSubmit}>sumbit</button>
    </div>
    )
}
