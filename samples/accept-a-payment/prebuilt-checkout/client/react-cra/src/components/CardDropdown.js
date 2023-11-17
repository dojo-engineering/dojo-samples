import React from "react";
import { useState } from "react";

import "./CardDropdown.css";

const CardDropdown = ({ savedPaymentMethods, onCardSelected }) => {
  const [selectedCard, setSelectedCard] = useState();

  // Function to select the icon based on the card scheme
  const getCardIcon = (scheme) => {
    switch (scheme) {
      case "VISA":
        return "/icons/visa-straight-128px.png";
      case "MASTERCARD":
        return "/icons/mastercard-straight-128px.png";
      case "MAESTRO":
        return "/icons/maestro-straight-128px.png";
      case "AMEX":
        return "/icons/american-express-straight-128px.png";
      default:
        return null; // or a default icon
    }
  };

  const handleSelect = (id) => {
    setSelectedCard(id);
    onCardSelected(id);
    console.log("Selected card: ", id);
  };

  return (
    <div className="container">
      {savedPaymentMethods.map((method) => {
        const { pan, scheme } = method.cardDetails;
        const lastFourDigits = pan.slice(-4);
        const cardIcon = getCardIcon(scheme);
        const isSelected = selectedCard === method.id;

        return (
          <label
            key={method.id}
            className={`card-radio ${isSelected ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="card"
              value={method.id}
              checked={isSelected}
              onChange={() => handleSelect(method.id)}
            />
            {cardIcon && (
              <img src={cardIcon} alt={scheme} className="card-icon" />
            )}
            <div>
              <h4>{scheme}</h4>
              <span>****{lastFourDigits}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default CardDropdown;
