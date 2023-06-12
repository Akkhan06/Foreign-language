import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./Checkout.css";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const CheckOut = ({ price, card }) => {
  const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSe] = useAxios();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSe.post("/create-payment-intent", { price }).then((data) => {
        console.log(data);
        setClientSecret(data.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const {paymentIntent, error: confiremError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      },
    );

    
    console.log(paymentIntent)
  };

  return (
    <>
      <form className="m-8 w-1/2" onSubmit={handleSubmit}>
        <CardElement
          className=""
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError ?? <p className="text-red-800">{cardError}</p>}
    </>
  );
};

export default CheckOut;
