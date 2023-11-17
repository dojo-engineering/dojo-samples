import React, { useState, useMemo, useCallback, useEffect } from "react";
import Layout from "./Layout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../context/BasketContext";
import useQuery from "../utils/query";

const checkout = (
  units,
  useHostedCheckout,
  product,
  useSaveCards,
  customer
) => {
  const totalAmount = units * product.Price * 100;
  const fetchUrl = useSaveCards ? `checkout/customer` : `checkout`;

  fetch(fetchUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: useSaveCards ? `Bearer ${customer?.Token}` : null,
    },
    body: JSON.stringify({
      amount: totalAmount,
      description: `${product.Name} (x${units})`,
      cancelUrl: window.location.href,
      redirectUrl: window.location.origin + "/order-result",
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      if (useSaveCards) {
        window.location.href = `${window.location.origin}/customer-checkout?id=${data.paymentIntentId}`;
      } else {
        window.location.href = useHostedCheckout
          ? `http://pay.dojo.tech/checkout/${data}`
          : `${window.location.origin}/checkout?id=${data}`;
      }
    });
};

export const Home = () => {
  const [useHostedCheckout, setUseHostedCheckout] = useState(false);
  const [useSaveCards, setUseSaveCards] = useState(false);
  const { isAuthenticated, token, customerId } = useAuth();
  const { updateBasket, items } = useBasket();
  const navigate = useNavigate();
  const products = {
    Croissant: {
      Id: 1,
      Name: "Croissant",
      Price: 0.1,
    },
  };

  let query = useQuery();
  let shouldDoCustomerCheckout = query.get("customerCheckout") === "true";

  const quantity = useMemo(() => {
    const count = items.find((i) => i.Id === products.Croissant.Id)?.quantity;
    return count;
  }, [items, products.Croissant]);

  const amount = useMemo(() => {
    return (quantity * (products.Croissant.Price * 100)) / 100;
  }, [quantity, products.Croissant]);

  useEffect(() => {
    if (!items || items.length === 0) {
      updateBasket(products.Croissant, 1);
    }

    if (shouldDoCustomerCheckout) {
      checkout(quantity, useHostedCheckout, products.Croissant, true, {
        Id: customerId,
        Token: token,
      });
    }
  }, [
    items,
    customerId,
    products.Croissant,
    shouldDoCustomerCheckout,
    token,
    useHostedCheckout,
    updateBasket,
    quantity,
  ]);

  const onCheckout = useCallback(() => {
    if (useSaveCards) {
      if (!isAuthenticated) {
        const redirectTo = `${window.location.pathname}?customerCheckout=true`;
        navigate(`/login?redirectTo=${redirectTo}`);
      } else {
        checkout(quantity, useHostedCheckout, products.Croissant, true, {
          Id: customerId,
          Token: token,
        });
      }
    } else {
      checkout(quantity, useHostedCheckout, products.Croissant, false);
    }
  }, [
    useSaveCards,
    isAuthenticated,
    navigate,
    quantity,
    useHostedCheckout,
    products.Croissant,
    customerId,
    token,
  ]);

  const useHostedCheckoutChange = useCallback(() => {
    setUseHostedCheckout(!useHostedCheckout);
  }, [useHostedCheckout]);

  const onOrderUpdate = (e) => {
    updateBasket(products.Croissant, Number.parseInt(e.target.value));
  };

  return (
    <Layout>
      <div className="item">
        <h2 className="order-summary">Order summary</h2>
        <div className="order-details">
          <div className="image-placeholder" />
          <div>
            <h4>{products.Croissant.Name}</h4>
            <p>Price: £{products.Croissant.Price}</p>
            <label htmlFor="number">Quantity</label>
            <select
              name="number"
              id="number"
              value={quantity}
              defaultValue={1}
              onChange={onOrderUpdate}
            >
              <option key="1" value={1}>
                1
              </option>
              <option key="2" value={2}>
                2
              </option>
              <option key="3" value={3}>
                3
              </option>
              <option key="4" value={4}>
                4
              </option>
            </select>
          </div>
        </div>
        <div className="totals">
          <div className="subtotal">
            <span>Subtotal</span> <span>£{amount}</span>
          </div>
          <hr />
          <div className="total">
            <span>Total</span> <span>£{amount}</span>
          </div>
        </div>

        <br />

        <label>
          <input
            type="checkbox"
            value={useHostedCheckout}
            onChange={useHostedCheckoutChange}
          />
          Use hosted checkout page
        </label>

        <label>
          <input
            type="checkbox"
            value={useSaveCards}
            onChange={setUseSaveCards}
          />
          Use save cards
        </label>

        <div className="footer">
          <button className="checkout" onClick={onCheckout}>
            Checkout £{amount}
          </button>
        </div>
      </div>
    </Layout>
  );
};
