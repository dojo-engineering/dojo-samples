import React, { useEffect, useState, useCallback } from "react";
import Layout from "./Layout";
import useQuery from "../utils/query";
import WalletComponent from "./WalletComponent";
import "../iframe.threeds.css";
import CardComponent from "./CardComponent";
import RecurringPaymentComponent from "./RecurringPaymentComponent";
import LogOutButtonComponent from "./LogOutButtonComponent";

import { useAuth } from "../context/AuthContext";


export const Checkout = ({ useSaveCards }) => {
  const [pi, setPi] = useState(null);
  const [errors, setErrors] = useState([]);
  const { isAuthenticated, customerName, token } = useAuth();

  let query = useQuery();
  let id = query.get("id");
  useSaveCards = useSaveCards ?? query.get("customerCheckout") === "true";

  console.log(`Loading checkout page... PI Id: ${id}, use save cards: ${useSaveCards}`);

  const loadPaymentIntent = async () => {
    console.log("Loading checkout payment intent...");
    const response = await fetch(`Checkout/${id}`, { method: "GET" });
    const pi = await response.json();

    setPi(pi);
    console.log("Checkout call payment intent loaded", pi);
  };
 
  useEffect(() => {
    loadPaymentIntent();
  }, [id]);

  // go back to the previous page
  const onGoBack = useCallback(() => {
    window.location.href = pi?.config?.cancelUrl;
  }, [pi]);

  function paymentComplete() {

    const url = `${pi?.config?.redirectUrl}?id=${id}`;

    console.log(`Redirecting to ${url}`);
    window.location.href = url;
  }

  async function refreshClientSessionSecret() {
    console.log("Refreshing client session for pi...", pi);

    const updateClientSession = async () => {
      const response = await fetch(`Checkout/refresh-client-session/${pi.id}`, {
        method: "POST",
      });
      const updatedPi = await response.json();
      console.log("Refresh client session PI", updatedPi);
      setPi(updatedPi);
    };

    await updateClientSession(pi);
  }

  console.log("Checkout page", pi);
  return (
    <>
      <Layout>
        <div className="item">
          <div className="checkout-details">
            <div>
              <span className="tiny">
                Built-in payment page. To get the list of test cards 💳 go{" "}
                <a
                  target="blank"
                  href="https://docs.dojo.tech/development-resources/testing"
                >
                  here
                </a>
                .
              </span>
            </div>
            {(useSaveCards && isAuthenticated) ? <div className="item">🔒 Hello, {customerName}! <LogOutButtonComponent/></div>: null}
            <div>
              <WalletComponent paymentIntent={pi} onPaymentSuccess={paymentComplete} onPaymentError={setErrors} /> 
              <hr />
                <CardComponent
                  paymentIntent={pi} 
                  token={token}
                  onPaymentSuccess={paymentComplete} 
                  onPaymentError={setErrors}
                  onRefreshPaymentIntent={refreshClientSessionSecret} allowSaveCard={useSaveCards} />
              <hr />    
              <RecurringPaymentComponent
                paymentIntent={pi} 
                token={token}
                onPaymentSuccess={paymentComplete} 
                onPaymentError={setErrors}
                onRefreshPaymentIntent={refreshClientSessionSecret} /> 
            </div>
          
            <div id="errors" className="errors">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>

            <div>
              <>
                <button id="goBack" className="back" onClick={onGoBack}>
                  Back
                </button>
              </>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
