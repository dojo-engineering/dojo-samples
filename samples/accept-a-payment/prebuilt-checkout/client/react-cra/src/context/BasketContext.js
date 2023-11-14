import React, { createContext, useContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const basketData = localStorage.getItem("basket");
    if (basketData) {
      setItems(JSON.parse(basketData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBasket = (product) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item, quantity: 1 };
        }
      })
    );
  };

  const removeFromBasket = (product) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === product.id) {
            if (item.quantity === 1) {
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item !== null)
    );
  };

  const updateBasket = (product, quantity) => {
    setItems([{ ...product, quantity }]);
  };

  const clearBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider
      value={{
        items,
        addToBasket,
        removeFromBasket,
        clearBasket,
        updateBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
