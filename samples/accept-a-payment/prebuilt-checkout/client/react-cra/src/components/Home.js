import React, { useState, useMemo, useCallback } from 'react';
import Layout from './Layout';

export const Home = () => {
    const [count, setCount] = useState(1);
    const value = useMemo(() => count * 3.00, [count]);
    const [useHostedCheckout, setUseHostedCheckout] = useState(false);

    const onCheckout = useCallback(() => {
        fetch('Checkout',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: value * 100,
                    description: `Croissant (x${count})`,
                    cancelUrl: window.location.href,
                    redirectUrl: window.location.href + 'order-result',
                })
            }
        )
        .then(data => data.json())
        .then(data => {
            window.location.href = useHostedCheckout ? `http://pay.dojo.tech/checkout/${data}` : `${window.location.origin}/checkout?id=${data}`;
        })
    }, [value, count, useHostedCheckout]);

    const useHostedCheckoutChange = useCallback(() => {
        setUseHostedCheckout(!useHostedCheckout);
      }, [useHostedCheckout]);

    return (
        <Layout>
            <div className="item">
                <h2 className="order-summary">Order summary</h2>
                    <div className='order-details'>
                        <div className="image-placeholder"/>
                        <div>
                            <h4>Croissant</h4>
                            <p>Price: £3</p>
                            <label htmlFor="number">Quantity</label>
                            <select name="number" id="number" onChange={(e)=>setCount(Number.parseInt(e.target.value))}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="totals">
                        <div className="subtotal"><span>Subtotal</span> <span>£{value}</span></div>
                        <hr/>
                        <div className="total"><span>Total</span> <span>£{value}</span></div>
                    </div>

                    <br/>
                    
                    <label>
                        <input type="checkbox" value={useHostedCheckout} onChange={useHostedCheckoutChange} />
                        Use hosted checkout page
                    </label>

                    <div className='footer'><button className="checkout" onClick={onCheckout}>Checkout £{value}</button></div>
            </div>
        </Layout>
    );
}