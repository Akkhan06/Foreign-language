import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAxios from "../../hooks/useAxios";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
const Payment = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const url = `http://localhost:5173/selectedonde/${id}`;
  const [axiosSe] = useAxios();
  useEffect(() => {
    axiosSe(`/selectedonde/${id}`).then((data) => {
      setCart(data.data);

    });
  },[]);
  // const total = cart.reduce((sum, item) => sum + item.price, 0);
  // const price = parseFloat(total.toFixed(2));
  const {price} = cart
  // const total = parseFloat(price.toFixed(2))

  return (
    <>
      <h1>payment system</h1>
      <h1>name:</h1>
      <Elements stripe={stripePromise}>
        <CheckOut cart={cart} price={price}/>
      </Elements>
    </>
  );
};

export default Payment;
