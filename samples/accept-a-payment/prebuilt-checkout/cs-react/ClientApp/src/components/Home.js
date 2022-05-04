import React, { useState, useMemo, useCallback } from 'react';

export const Home = () => {
    const [count, setCount] = useState(1);
    const value = useMemo(()=> count * 3.00, [count]);

    const onCheckout = useCallback(()=>{
        fetch('checkout',
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
                <div className="product-details">
                    <h2>Basket</h2>
                    <div className="image-placeholder"/>
                </div>
                <div className="checkout-details">
                    <h2>Details</h2>
                    <p>Croissant: £3</p>
                    <h6>Quantity:</h6>
                    <button onClick={onRemove}>-</button>
                    <input value={count} type="number" onChange={(e)=>setCount(e.target.value)}/>
                    <button onClick={onAdd}>+</button>
                    <hr/>
                    <div className="value">Total amount: £{value}</div>
                    <div className='footer'><button className="checkout" onClick={onCheckout}>Checkout £{value}</button></div>
                </div>
            </div>
        </div>
    );
}
