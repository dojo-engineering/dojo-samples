import React, { useEffect, useState, useCallback } from "react";
import DefaultStyles from "../styles/DefaultStyles";
import RecurringPaymentsStyles from "../styles/RecurringPaymentsStyles";
import Layout from "./Layout";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../context/AuthContext";
import useQuery from "../utils/query";
import { useNavigate } from "react-router-dom";

import "../iframe.threeds.css";
import CardDropdown from "./CardDropdown";

export const Checkout = ({ useSaveCards }) => {
  const [pi, setPi] = useState(null);
  const [card, setCard] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [cardPaymentFormLoading, setCardPaymentFormLoading] = useState(true);
  const [saveCardPaymentFormLoading, setSaveCardPaymentFormLoading] =
    useState(true);
  const [walletLoading, setWalletLoading] = useState(true);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [errors, setErrors] = useState([]);
  const { isAuthenticated, customerName, token } = useAuth();
  const [customerPaymentMethods, setCustomerPaymentMethods] = useState(null); // [{id: 1, name: "Visa", last4: "1234"}
  const navigate = useNavigate();
  const [savePaymentMethod, setSavePaymentMethod] = useState(false);
  const [payWithSaveCard, setPayWithSaveCard] = useState(false);
  const [selectedSavedCardId, setSelectedSavedCardId] = useState(); // [{id: 1, name: "Visa", last4: "1234"}

  let query = useQuery();
  let id = query.get("id");
  useSaveCards = useSaveCards ?? query.get("customerCheckout") === "true";

  useEffect(() => {
    if (useSaveCards) {
      if (!isAuthenticated) {
        const redirectTo = `${window.location.pathname}?id=${id}&customerCheckout=true`;
        navigate(`/login?redirectTo=${redirectTo}`);
      } else {
        fetch(`checkout/customer/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: useSaveCards ? `Bearer ${token}` : null,
          },
        })
          .then((data) => data.json())
          .then((data) => {
            setCustomerPaymentMethods(data.customerPaymentMethods);
            console.log(
              "Customer payment methods",
              data.customerPaymentMethods
            );
          });
      }
    }
  }, [id, isAuthenticated, navigate, token, useSaveCards]);

  const loadPaymentIntent = async () => {
    const response = await fetch(`Checkout/${id}`, { method: "GET" });
    const pi = await response.json();

    setPi(pi);
    console.log("Checkout call payment intent", pi);
  };

  const renderWalletForm = async () => {
    console.log("Rendering wallet iframe...", pi);

    setWalletLoading(true);

    const containerId = "demo-payment-wallet";
    const myNode = document.getElementById(containerId);
    myNode.innerHTML = "";

    const config = {
      paymentDetails: {
        paymentToken: pi.clientSessionSecret,
      },
      containerId: containerId,
      onIframeLoaded: onWalletLoaded,
    };

    setWallet(
      new window.Dojo.WalletPayment(
        config,
        displayCardPaymentErrorsCallback,
        walletPaymentComplete
      )
    );
  };

  function onWalletLoaded() {
    setWalletLoading(false);
  }

  function walletPaymentComplete(response) {
    console.log("Wallet payment request result", response);
    const url = `${pi?.config?.redirectUrl}?id=${id}`;

    console.log(`Redirecting to ${url}`);
    window.location.href = url;
  }

  const renderCardPaymentForm = async () => {
    console.log("Rendering card payment form iframe...", pi);
    setCardPaymentFormLoading(true);

    const containerId = "demo-payment";
    const myNode = document.getElementById(containerId);
    myNode.innerHTML = "";

    const config = {
      paymentDetails: {
        paymentToken: pi.clientSessionSecret,
      },
      containerId: containerId,
      fontCss: ["https://fonts.googleapis.com/css?family=Do+Hyeon"],
      styles: { ...DefaultStyles },
      onIframeLoaded: onCardPaymentFormLoaded,
      onIframeLoadFailed: onCardPaymentFormLoadFailed,
    };

    setCard(new window.Dojo.Payment(config, displayCardPaymentErrorsCallback));
  };

  const renderSaveCardPaymentForm = async () => {
    console.log("Rendering save card payment form iframe...", pi);
    setSaveCardPaymentFormLoading(true);

    const containerId = "demo-saved-card-payment";
    const myNode = document.getElementById(containerId);
    myNode.innerHTML = "";

    const config = {
      paymentDetails: {
        paymentToken: pi.clientSessionSecret,
      },
      containerId: containerId,
      fontCss: ["https://fonts.googleapis.com/css?family=Do+Hyeon"],
      styles: { ...RecurringPaymentsStyles },
      onIframeLoaded: onSaveCardPaymentFormLoaded,
      onIframeLoadFailed: onSaveCardPaymentFormLoadFailed,
    };

    setCard(
      new window.Dojo.RecurringPayment(config, displayCardPaymentErrorsCallback)
    );
  };

  useEffect(() => {
    loadPaymentIntent();
  }, [id]);

  useEffect(() => {
    if (pi === null) return;

    console.log("Payment intent retrieved", pi);

    renderCardPaymentForm();
    if (payWithSaveCard) renderSaveCardPaymentForm();

    renderWalletForm();
  }, [pi]);

  useEffect(() => {
    if (payWithSaveCard) {
      renderSaveCardPaymentForm();
    }
  }, [payWithSaveCard]);

  function onCardPaymentFormLoaded() {
    setCardPaymentFormLoading(false);
  }

  function onCardPaymentFormLoadFailed() {
    setCardPaymentFormLoading(false);
    setErrors(["Failed to load card payment form. Please try again."]);
  }

  function onSaveCardPaymentFormLoaded() {
    setSaveCardPaymentFormLoading(false);
  }

  function onSaveCardPaymentFormLoadFailed() {
    setSaveCardPaymentFormLoading(false);
    setErrors(["Failed to load save card payment form. Please try again."]);
  }

  function displayCardPaymentErrorsCallback(errors) {
    const errorList = errors.map((error) => error.message);
    setErrors(errorList);
  }

  const onPayWithCard = () => {
    setPaymentInProgress(true);

    card
      .executePayment({
        savePaymentMethod: savePaymentMethod,
      })
      .then(function (data) {
        console.log("Payment request result", data);

        // Check if success. Complete list of result codes: https://docs.dojo.tech/payments/accept-payments/components/configuration#status-code
        if (data && data.statusCode === 0) {
          const url = `${pi?.config?.redirectUrl}?id=${id}`;
          window.location.href = url;
        } else {
          setErrors(["Payment failed. Please try again."]);
          refreshClientSessionSecret();
        }
      })
      .catch(function (errors) {
        console.log(
          "Payment request failed due to client side error: ",
          errors
        );
        setErrors(errors.map((error) => error.message));
      })
      .then(function () {
        setPaymentInProgress(false);
      });
  };

  const onPayWithSavedCard = () => {
    setPaymentInProgress(true);

    console.log("Pay with card id", selectedSavedCardId);
    card
      .executePayment({
        paymentMethodId: selectedSavedCardId,
      })
      .then(function (data) {
        console.log("Payment request result", data);

        // Check if success. Complete list of result codes: https://docs.dojo.tech/payments/accept-payments/components/configuration#status-code
        if (data && data.statusCode === 0) {
          const url = `${pi?.config?.redirectUrl}?id=${id}`;
          window.location.href = url;
        } else {
          setErrors(["Payment failed. Please try again."]);
          refreshClientSessionSecret();
        }
      })
      .catch(function (errors) {
        console.log(
          "Payment request failed due to client side error: ",
          errors
        );
        setErrors([errors.message]);
      })
      .then(function () {
        setPaymentInProgress(false);
      });
  };

  async function refreshClientSessionSecret() {
    const updateClientSession = async () => {
      const response = await fetch(`Checkout/refresh-client-session/${id}`, {
        method: "POST",
      });
      const pi = await response.json();
      console.log("Refresh client session PI", pi);
      setPi(pi);
    };
    await updateClientSession();
    await renderCardPaymentForm();

    if (payWithSaveCard) await renderSaveCardPaymentForm();
  }

  // go back to the previous page
  const onGoBack = useCallback(() => {
    window.location.href = pi?.config?.cancelUrl;
  }, [pi]);

  return (
    <>
      <Layout>
        <div className="item">
          <div className="checkout-details">
            {useSaveCards && <div className="item">Hello {customerName}</div>}
            <div>
              <span className="tiny">
                Built-in payment page. To get the list of test cards 💳 go{" "}
                <a
                  target="blank"
                  href="https://docs.dojo.tech/payments/development-resources/testing"
                >
                  here
                </a>
                .
              </span>
            </div>
            <br />
            <br />

            <div className={`${payWithSaveCard ? " hidden" : ""}`}>
              {walletLoading ? <ClipLoader color="black" /> : null}
              <div id="demo-payment-wallet" />
              <hr />
            </div>

            <div className={`${payWithSaveCard ? " hidden" : ""}`}>
              {cardPaymentFormLoading ? <ClipLoader color="black" /> : null}
              <div id="demo-payment" className="item" />
              {useSaveCards && (
                <div className="item">
                  <div className="item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={(e) => setSavePaymentMethod(e.target.checked)}
                      />
                      Save card for later
                    </label>
                  </div>
                </div>
              )}
              <hr />
            </div>

            {useSaveCards &&
              customerPaymentMethods?.savedPaymentMethods?.length > 0 && (
                <div className="container">
                  <div className="item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setPayWithSaveCard(e.target.checked);
                        }}
                      />
                      Use save card?
                    </label>
                  </div>
                  {payWithSaveCard && (
                    <>
                      <CardDropdown
                        savedPaymentMethods={
                          customerPaymentMethods.savedPaymentMethods
                        }
                        onCardSelected={(id) => {
                          console.log("Selected card id", id);
                          setSelectedSavedCardId(id);
                        }}
                      />
                    </>
                  )}
                </div>
              )}

            {payWithSaveCard ? (
              <>
                {saveCardPaymentFormLoading && <ClipLoader color="black" />}
                <div
                  id="demo-saved-card-payment"
                  className={`item${payWithSaveCard} ? "" : "hidden"`}
                />
              </>
            ) : null}

            <div id="errors" className="errors">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
            <div id="demo-result" hidden>
              <h5>Payment Complete</h5>
              <dl>
                <dt>Status Code</dt>
                <dd id="status-code"></dd>
                <dt>Auth Code</dt>
                <dd id="auth-code"></dd>
              </dl>
            </div>

            <div>
              {paymentInProgress ? (
                <ClipLoader color="black" />
              ) : (
                <>
                  <button id="goBack" className="back" onClick={onGoBack}>
                    Back
                  </button>
                  <button
                    className="checkout"
                    id="testPay"
                    onClick={
                      payWithSaveCard ? onPayWithSavedCard : onPayWithCard
                    }
                  >
                    Pay £{pi?.amount?.value / 100}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
