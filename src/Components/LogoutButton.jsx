import React, { useState } from "react";

const LogoutButton = ({ text = "تسجيل الخروج", onConfirm }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleLogout = () => {
    setShowDialog(false);
    if (onConfirm) onConfirm();
  };

  return (
    <>
      <button
        className="report-btn report-btn-logout cursor-pointer"
        onClick={() => setShowDialog(true)}
      >
        {text}
      </button>

      {showDialog && (
        <div className="logout-dialog-overlay">
          <div className="logout-dialog-box">
            <p>هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
            <div className="logout-dialog-actions">
              <button onClick={() => setShowDialog(false)}>إلغاء</button>
              <button onClick={handleLogout}>تأكيد</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
