import React, { useState, useEffect } from "react";
import Cart from '../Cart';
import './checkout.css'
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProductDisplay = ({ handleClick }) => (
  <section id="preview">
    <Cart />
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Confirm Order
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = window.location.href.split("?");
    console.log(query[1])
    if (query[1] === "success=true") {
      localStorage.setItem("cart", JSON.stringify([]))
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query[1] === "canceled=true") {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async function (event) {
    let retrieved = await JSON.parse(localStorage.getItem("cart"))
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", 
    {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(retrieved)
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
