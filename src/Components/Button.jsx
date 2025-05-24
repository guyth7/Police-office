import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  // تحديد نوع الزر حسب النص
  const type = text.toLowerCase().includes("خروج")
    ? "logout"
    : text.toLowerCase().includes("تسجيل")
    ? "auth"
    : "default";

  return (
    <Link to={to} className={`report-btn report-btn-${type}`}>
      {text}
    </Link>
  );
};

export default Button;
