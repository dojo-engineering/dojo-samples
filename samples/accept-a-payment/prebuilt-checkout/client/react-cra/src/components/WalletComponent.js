import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { cleanUpContainer } from "../utils/html";
import "./WalletComponent.css";

const WalletComponent = ({paymentIntent, onPaymentSuccess, onPaymentError}) => {
    const [loading, setLoading] = useState(true);
    const [paymentInProgress, setPaymentInProgress] = useState(false);

    const containerId = "demo-payment-wallet";

    console.log("Rendering wallet component...", paymentIntent);
    
    useEffect(() => {
        console.log("Loading dojo wallet component...", paymentIntent);

        if (paymentIntent != null) {
            // We need to do this in case or rerendering of the component
            // for example when error happened and client token was re-freshed.
            cleanUpContainer(containerId);

            const config = {
                paymentDetails: {
                    paymentToken: paymentIntent.clientSessionSecret,
                },
                containerId: containerId,
                onIframeLoaded: onWalletLoaded,
                callbacks: {
                    onPaymentInitiated: onWalletPaymentInitiated,
                    onPaymentCancelled: onWalletPaymentCancelled
                }
            };

            new window.Dojo.WalletPayment(
                config,
                displayErrorsCallback,
                walletPaymentComplete);
    };
    }, [paymentIntent]);

    function onWalletPaymentInitiated() {
        console.log("Wallet payment iframe component initiated...");
        setPaymentInProgress(true);
    }

    function onWalletPaymentCancelled() {
        console.log("Wallet payment cancelled");
        setPaymentInProgress(false);
    }
    
    function onWalletLoaded() {
        console.log("Wallet iframe loaded");
        setLoading(false);
    }

    function walletPaymentComplete(response) {
        console.log("Wallet payment request result", response);
        setPaymentInProgress(false);

        if (response.statusCode === 0) {
            onPaymentSuccess();
        }
        else {
            onPaymentError([response.message]);
        }
    }

    function displayErrorsCallback(errors) {
        console.log("Wallet payment error callback", errors);
        setPaymentInProgress(false);

        const errorList = errors.map((error) => error.message);

        console.log("Calling error callback with the list", errorList);
        onPaymentError(errorList);
    }

    // Several things going on below:
    // 1. We ensure that spinner is shown when wallet component is being loaded
    // 2. While we ensure the 1. point, we also want UI not to flicker, thus we do the absolute positionings
    // 3. We want to show spinner when payment is in progress
    return (
        <>
            <div className="demo-payment-wallet-container">
                {loading ? <div className="demo-payment-wallet-spinner"><ClipLoader color="black" /></div> : null}
                <div id={containerId} className="demo-payment-wallet-holder" />
                {paymentInProgress ? <div className="demo-payment-wallet-payment-spinner"><ClipLoader color="black" /></div> : null}
            </div>
        </>);
  };

  export default WalletComponent;