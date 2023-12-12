import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Layout from "./Layout";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const OrderResult = () => {
  console.log("Loading order result...");

  let query = useQuery();
  let id = query.get("id");
  const [paymentIntent, setPaymentIntent] = useState(null);

  useEffect(() => {
    fetch("checkout/" + id)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setPaymentIntent(data);
      });
  }, [id]);

  if (paymentIntent === null || paymentIntent.status !== "Captured") {
    return (
    <Layout>
      <div className="item">🥺 Payment failed!</div>
      <div className="item">
        <small>
          Looks like your payment failed. Current status is '{paymentIntent?.status}'.
        </small>
      </div>
    </Layout>
    );
  }
  return (
    <Layout>
      <div className="item">🥳 Payment successfull</div>
      <div className="item">
        <small>
          ⚠️ Always ensure that you verify the status of your payment intent
          through an API call from your backend. Confirm its successful status
          directly on your backend.
        </small>
      </div>
    </Layout>
  );
};
