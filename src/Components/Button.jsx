import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Button = ({ text, to, onLogout }) => {
  const isLogout = text.toLowerCase().includes("خروج");
  const type = isLogout
    ? "logout"
    : text.toLowerCase().includes("تسجيل")
    ? "auth"
    : "default";

  if (isLogout) {
    return <LogoutButton text={text} onConfirm={onLogout} />;
  }

  return (
    <Link to={to} className={`report-btn report-btn-${type}`}>
      {text}
    </Link>
  );
};

export default Button;
