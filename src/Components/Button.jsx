import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const GooeyButton = ({ text, to }) => {
  return (
    <Link to={to}>
      {" "}
      {/* Use Link instead of <a> */}
      <button className="c-button c-button--gooey">
        {text}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: 0, width: 0 }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </Link>
  );
};

export default GooeyButton;
