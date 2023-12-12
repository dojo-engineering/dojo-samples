import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import DefaultStyles from "../styles/DefaultStyles";
import PayButtonComponent from "./PayButtonComponent";
import { cleanUpContainer } from "../utils/html";

const CardComponent = ({paymentIntent, onPaymentSuccess, onPaymentError, onRefreshPaymentIntent, allowSaveCard}) => {
    const [loading, setLoading] = useState(true);
    const [card, setCard] = useState(null);
    const [paymentInProgress, setPaymentInProgress] = useState(false);
    const [formComplete, setFormComplete] = useState(false);
    const [saveCard, setSaveCard] = useState(false);

    const containerId = "demo-payment";

    console.log("Rendering card component...", paymentIntent);

    useEffect(() => {
        if (paymentIntent != null) {
            console.log("Rendering card payment form iframe...", paymentIntent);
            
            // We need to do this in case or rerendering of the component
            // for example when error happened and client token was re-freshed.
            cleanUpContainer(containerId);
            setLoading(true);

            const config = {
              paymentDetails: {
                paymentToken: paymentIntent.clientSessionSecret,
              },
              containerId: containerId,
              fontCss: ["https://fonts.googleapis.com/css?family=Do+Hyeon"],
              styles: { ...DefaultStyles },
              onIframeLoaded: onCardPaymentFormLoaded,
              onIframeLoadFailed: onCardPaymentFormLoadFailed,
              callbacks: {
                onFormComplete: onFormComplete
              }
            };
        
            setCard(new window.Dojo.Payment(config, onDisplayErrors));
        };
    }, [paymentIntent]);

    function onPay() {
        
        console.log(`Payment request. Save payment method: ${saveCard}`);

        setPaymentInProgress(true);
        
        card
            .executePayment((allowSaveCard && saveCard) ? { savePaymentMethod: true } : null)
            .then(function (data) {
                console.log("Payment request result", data);
                // Check if success. Complete list of result codes: https://docs.dojo.tech/payments/accept-payments/components/configuration#status-code
                if (data && data.statusCode === 0) {
                    onPaymentSuccess();
                } else {
                    onPaymentError([
                        "Payment failed. Please try again.", 
                         `Error: ${data.message}`]);
                    onRefreshPaymentIntent();
                }
            })
            .catch(function (response) {
                console.log(
                    "Payment request failed due to client side error: ",
                    response
                );
                onPaymentError([response.message]);
            })
            .then(function () {
                setPaymentInProgress(false);
            });
    }

    function onCardPaymentFormLoaded() {
        setLoading(false);
    }
    
    function onCardPaymentFormLoadFailed() {
        setLoading(false);
        onPaymentError(["Failed to load card payment form. Please try again."]);
    }

    function onDisplayErrors(errors) {
        console.log("Card payment error callback", errors);
        setFormComplete(false);
        const errorList = errors.map((error) => error.message);
        onPaymentError(errorList);
    }

    function onFormComplete() {
        console.log("Form complete");
        setFormComplete(true);
    }

    return (
        <>
            {loading ? <ClipLoader color="black" /> : null}
            <div id={containerId} className="item" />

            {!loading && allowSaveCard ? 
            <>
                <div className="item">
                  <div className="item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={(e) => setSaveCard(e.target.checked)}
                      />
                      Save card for later
                    </label>
                  </div>
                </div>
            </> : null}

            <PayButtonComponent 
                amountInMinorUnit={paymentIntent?.amount?.value} 
                ready={!loading && !paymentInProgress}   
                enabled={formComplete} 
                onClick={onPay} />
        </>);
  };

  export default CardComponent;