import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import CardDropdown from "./CardDropdown";
import PayButtonComponent from "./PayButtonComponent";
import RecurringPaymentsStyles from "../styles/RecurringPaymentsStyles";
import { cleanUpContainer } from "../utils/html";

const RecurringPaymentComponent = ({paymentIntent, token, onPaymentSuccess, onPaymentError, onRefreshPaymentIntent}) => {
    const [loading, setLoading] = useState(true);
    const [recurringPayment, setRecurringPayment] = useState(null);
    const [paymentInProgress, setPaymentInProgress] = useState(false);
    const [customerPaymentMethods, setCustomerPaymentMethods] = useState(null);
    const [selectedSavedCardId, setSelectedSavedCardId] = useState();
    const [anySavedCards, setAnySavedCards] = useState();

    const containerId = "demo-recurring-payment";

    console.log("Rendering recurring card component...", paymentIntent);

    useEffect(() => {
        if (paymentIntent != null) {
            console.log("Fetching payment methods for token", token);

            fetch(`checkout/customer/${paymentIntent.id}`, {
                method: "GET",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
            })
            .then((data) => data.json())
            .then((data) => {
                setCustomerPaymentMethods(data.customerPaymentMethods);
                setAnySavedCards(data.customerPaymentMethods.savedPaymentMethods.length > 0);
                console.log("Customer payment methods", data.customerPaymentMethods);
            });
        }
        }, [paymentIntent, token]);

    useEffect(() => {
        if (paymentIntent != null && anySavedCards) {
            console.log("Rendering recurring card payment form iframe...", paymentIntent);
            
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
              styles: { ...RecurringPaymentsStyles },
              onIframeLoaded: onCardPaymentFormLoaded,
              onIframeLoadFailed: onCardPaymentFormLoadFailed
            };
        
            setRecurringPayment(new window.Dojo.RecurringPayment(config, onDisplayErrors));
        };
    }, [paymentIntent, anySavedCards]);

    function onPay() {
        setPaymentInProgress(true);

        console.log(`Recurring payment request. Save payment method:..`);

        recurringPayment
            .executePayment({ paymentMethodId: selectedSavedCardId })
            .then(function (data) {
                console.log("Recurring payment request result", data);
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
            .catch(function (errors) {
                console.log(
                    "Payment request failed due to client side error: ",
                    errors
                );
                onPaymentError(errors.map((error) => error.message));
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
        console.log("Recurring card payment error callback", errors);
        const errorList = errors.map((error) => error.message);
        onPaymentError(errorList);
    }

    return anySavedCards ? (
        <>
            {loading ? <ClipLoader color="black" /> : null}
            <div id={containerId} className="item" />

            {!loading ? 
            <>
                <CardDropdown savedPaymentMethods={customerPaymentMethods.savedPaymentMethods}
                    onCardSelected={(id) => {
                        console.log("Selected card id", id);                    
                        setSelectedSavedCardId(id);
                }}/>
            </> : null}

            <PayButtonComponent 
                amountInMinorUnit={paymentIntent?.amount?.value} 
                ready={!loading && !paymentInProgress}   
                enabled={selectedSavedCardId != null} 
                onClick={onPay} />
        </>) : (<></>);
  };

  export default RecurringPaymentComponent;