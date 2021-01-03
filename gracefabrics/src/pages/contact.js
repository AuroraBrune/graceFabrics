import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import "../components/ContactForm/contact.css"

function Contact() {
    return (
        <div>
            <div className="blurb" style={{marginTop:80}}>
                <header class="header-about">Commissions Accepted</header>
                <br></br>
                <p>
                    Don't see what your looking for in the shop?
                    Have a unique idea for a stoll or need a custom sixe banner?
                    Don't hesitate to contact me with the form below!
                    I will be able to email you within a couple of days depending on holiday schedule. :)
                </p>
            </div>
            <br></br>
            <div className="contactContainer">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;
