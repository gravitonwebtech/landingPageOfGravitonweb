import React from "react";
import whatsappIcon from "./images/whatsp.png";
const WhatsAppButton = () => {
    const phoneNumber = "+919415174046";
  
    const handleClick = () => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, "_blank");
    };
  
    return (
      <button
        className="fixed left-4 bottom-4 z-50 p-2 text-white focus:outline-none"
        onClick={handleClick}
        style={{ backgroundImage: `url(${whatsappIcon})`, backgroundSize: "100% 100%"  ,width: "40px", 
        height: "40px", }}
      ></button>
    );
  };
  export default WhatsAppButton;