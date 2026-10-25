// Marquee.jsx
import React from "react";
import "../styles/marquee.css";

function Marquee({ children, speed = 20 }) {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export default Marquee;