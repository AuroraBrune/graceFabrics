import { React } from 'react'

export default function ForgotPassword() {
    function emailSubmit() {
        let userEmail = document.getElementById("emailPassReset").value
        console.log(userEmail)
    }
    return (
    <div>
        <input id="emailPassReset" placeholder="email"></input>
        <button onClick={emailSubmit}>sumbit</button>
    </div>
    )
}
