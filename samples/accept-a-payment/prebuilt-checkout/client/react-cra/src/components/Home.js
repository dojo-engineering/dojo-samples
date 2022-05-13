import React, { useState, useMemo, useCallback } from 'react';

export const Home = () => {
    const [count, setCount] = useState(1);
    const value = useMemo(()=> count * 3.00, [count]);

    const onCheckout = useCallback(()=>{
        fetch('Checkout',
            {
                method:'POST',
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
            .then(data=>data.json())
            .then(data=>{
                window.location.href = "http://pay.dojo.tech/checkout/" + data;
            })
    }, [value, count]);

    const onRemove = useCallback(()=>{
        let newCount = count-1;
        if (newCount > 0) {
            setCount(newCount);
        }
    }, [count]);


    const onAdd = useCallback(()=>{
        setCount(count+1);
    }, [count]);

    return (
        <div className="App">
            <header className="App-header">
                <img src="./dojo.svg" width={146} height={32} />
                <span>Sample app</span>
            </header>
            <div className="App-Container">
                <div className="checkout-details">
                <h2 className="order-summary">Order summary</h2>
                    <div className='order-details'>
                        <div className="image-placeholder"/>
                        <div className="summary">
                            <h4>Croissant</h4>
                            <p>Price: £3</p>
                            <label for="number">Quantity</label>
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

                    <div className='footer'><button className="checkout" onClick={onCheckout}>Checkout £{value}</button></div>
                </div>
            </div>
        </div>
    );
}
