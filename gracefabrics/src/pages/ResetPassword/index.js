import { React, useEffect, useState } from 'react';
import API from '../../utils/API';

export default function ResetPassword() {
    let [userRecordState, setUserRecordState] = useState({})
    useEffect(() => {
        let paramArr = window.location.href.split('?token=')[1].split('&email=');
        let params = {
            token: decodeURIComponent(paramArr[0]),
            email: paramArr[1]
        };
        API.resetPassword(params).then((res) => {
            if (res.data.showForm === false) {
                document.getElementById("resetMessage").innerText = res.data.message
                document.getElementById("newPassForm").setAttribute("style", "display:none");
            };
            console.log(res.data.record);
            setUserRecordState(res.data.record);
            document.getElementById("newPassForm").setAttribute("style", "display:block");
        })
    }, []);

    function passwordCheck(){
        let newPass = document.getElementById("newPass").value;
        let verifyPass = document.getElementById("newPassVerify").value;
        if(newPass !== verifyPass){
            document.getElementById("resetMessage").innerText = "Passwords do not match! Please try again :)"
        }
        let updatedPass = {
            password: newPass,
            userRecord: userRecordState
        }
        API.updatePassword(updatedPass).then((res)=>{
            console.log(res)
            document.getElementById("resetMessage").innerText = res.message
        })
    }

    return (
        <div>
            <p id="resetMessage">
                reset password
            </p>

            <div id="newPassForm" >
                <input id="newPass"label="password" placeholder="New Password"></input>
                <br></br>
                <input id="newPassVerify" label="verify password" placeholder="Verify Password"></input>
                <button onClick={passwordCheck}>submit</button>
            </div>
        </div>
    )
}