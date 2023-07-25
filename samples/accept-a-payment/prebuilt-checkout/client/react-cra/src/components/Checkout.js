import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import DefaultStyles from '../styles/DefaultStyles';
import Layout from './Layout';
import ClipLoader from "react-spinners/ClipLoader";

import '../iframe.threeds.css'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Checkout = () => {
    const [pi, setPi] = useState(null);
    const [card, setCard] = useState(null);
    const [wallet, setWallet] = useState(null);
    const [cardPaymentFormLoading, setCardPaymentFormLoading] = useState(true);
    const [walletLoading, setWalletLoading] = useState(true);
    const [paymentInProgress, setPaymentInProgress] = useState(false);
    const [errors, setErrors] = useState([]);

    let query = useQuery();
    let id = query.get("id");

    const loadPaymentIntent = async () => {
        const response = await fetch(`Checkout/${id}`, { method: 'GET' });
        const pi = await response.json();
        
        setPi(pi);
        console.log("Checkout call payment intent", pi);
    }

    const renderWalletForm = async () => {

        console.log("Rendering wallet iframe...", pi);

        setWalletLoading(true);
        
        const containerId = "demo-payment-wallet";
        const myNode = document.getElementById(containerId);
        myNode.innerHTML = '';

        const config = {
            paymentDetails: {
                paymentToken: pi.clientSessionSecret,
            },
            containerId: containerId,
            onIframeLoaded: onWalletLoaded,
        }
       
        setWallet(new window.Dojo.WalletPayment(config, displayCardPaymentErrorsCallback, walletPaymentComplete));
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
        myNode.innerHTML = '';

        const config = {
            paymentDetails: {
                paymentToken: pi.clientSessionSecret,
            },
            containerId: containerId,
            fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
            styles: { ...DefaultStyles },
            onIframeLoaded: onCardPaymentFormLoaded,
            onIframeLoadFailed: onCardPaymentFormLoadFailed,
        }
       
        setCard(new window.Dojo.Payment(config, displayCardPaymentErrorsCallback));
    };

    useEffect(() => {
        loadPaymentIntent();
    }, [id]);

    useEffect(() => {
        if (pi === null) return;

        console.log("Payment intent retrieved", pi);

        renderCardPaymentForm();
        renderWalletForm();
    }, [pi]);

    function onCardPaymentFormLoaded() {
        setCardPaymentFormLoading(false);
    }

    function onCardPaymentFormLoadFailed() {
        setCardPaymentFormLoading(false);
        setErrors(["Failed to load card payment form. Please try again."]);
    }

    function displayCardPaymentErrorsCallback(errors) {
        const errorList = errors.map(error => error.message);
        setErrors(errorList);
    }

    const onPayWithCard = useCallback(() => {
        setPaymentInProgress(true);
        
        card.executePayment()
            .then(function (data) {
                console.log("Payment request result", data);

                // Check if success. Complete list of result codes: https://docs.dojo.tech/payments/accept-payments/components/configuration#status-code
                if (data && data.statusCode === 0) {
                    const url = `${pi?.config?.redirectUrl}?id=${id}`;
                    window.location.href = url;
                }
                else 
                {
                    setErrors(["Payment failed. Please try again."]);
                    refreshClientSessionSecret();
                }

            }).catch(function (errors) {
                console.log('Payment request failed due to client side error: ', errors);
                setErrors(errors.map(error => error.message));
            }).then(function () {
                setPaymentInProgress(false);
            });
    });

    async function refreshClientSessionSecret() {
        const updateClientSession = async () => {
            const response = await fetch(`Checkout/refresh-client-session/${id}`, { method: 'POST' });
            const pi = await response.json();
            console.log("Refresh client session PI", pi);
            setPi(pi);
        };
        await updateClientSession();
        await renderCardPaymentForm();
    }

    // go back to the previous page
    const onGoBack = useCallback(() => {
        window.location.href = pi?.config?.cancelUrl;
    }, [pi]);

    return <>
        <Layout>
            <div className="item">
                <div className="checkout-details">
                <div>
                    <span className="tiny">
                        Built-in payment page. 
                        To get the list of test cards 💳 go <a target="blank" href="https://docs.dojo.tech/payments/development-resources/testing">here</a>.
                    </span>
                </div>
                <br/>
                <br/>

                {walletLoading ? <ClipLoader color="black" /> : null}
                <div id="demo-payment-wallet" />
                
                <hr />
                
                {cardPaymentFormLoading ? <ClipLoader color="black" /> : null}
                <div id="demo-payment" className="item" />
                    
                <div id="errors" className="errors">
                    {
                        errors.map((error, index) => 
                            <div key={index}>
                                {error}
                            </div>)
                    }
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
                    { paymentInProgress ? 
                    <ClipLoader color="black" /> : 
                    <>
                        <button id="goBack" className="back" onClick={onGoBack}>Back</button>
                        <button className="checkout" id="testPay" onClick={onPayWithCard}>
                            Pay £{pi?.amount?.value / 100}
                        </button>
                    </> 
                    }
                </div>
             </div>
            </div>
        </Layout>
    </>
}