import React from "react";
import CustomOrderForm from "../components/CustomOrderForm";


function CustomOrder(props) {
    return (
        <div>
            <div className="blurb" style={{ marginTop: 80 }}>
                <header class="header-about">You are ordering a {props.item}</header>
                <br></br>
                <p>
                    Please fill out the form below with your email, best way to contact you,
                    and a description of your desired commission and
                    I will be able to contact you within a couple of days depending on holiday schedule. :)
                </p>
            </div>
            <br></br>
            <div className="contactContainer">
                <CustomOrderForm
                type={props.item} />
            </div>
        </div>
    )
}

export default CustomOrder;
