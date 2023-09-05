import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../myCart/CheckoutForm';
import useFetchCartData from '../../../hooks/useFetchCartData';

const stripePromise = loadStripe(import.meta.env.VITE_STRIP_PK);

const CheckOut = () => {
  const [clientSecret, setClientSecret] = useState('');
  // console.log(clientSecret);

  const [, cart] = useFetchCartData();

  const totalPrice = cart.reduce(
    (pre, cur) => pre + parseInt(cur?.coursePrice),
    0
  );

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      'https://summer-camp-server-gug1twojs-14hak.vercel.app/create-payment-intent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ totalPrice: totalPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default CheckOut;
