import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ emoji, title, desc, borderColor, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      className="report-card"
      style={{ border: `2px solid ${borderColor}` }}
      role="button"
    >
      <div className="report-emoji">{emoji}</div>
      <div className="report-card-title font-bold">{title}</div>
      <div className="report-card-desc text-xs">{desc}</div>
    </div>
  );
};

export default Card;
