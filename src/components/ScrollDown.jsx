import React from "react";
import "./ScrollDown.css"; // Assuming your CSS is in this file

const ScrollDownButton = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by one full viewport height
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button className="scroll-button absolute bottom-0 z-40 right-0" onClick={handleScroll}>
      Scroll Down
      <span className="arrow">&#8595;</span>
    </button>
  );
};

export default ScrollDownButton;
