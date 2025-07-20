import React from "react";
import LogoutButton from "../Components/LogoutButton";
import { Link } from "react-router-dom";

const TrafficPage = () => {
  const handleLogout = () => {
    console.log("تم تسجيل الخروج");
    // هنا يمكن حذف التوكن، إعادة التوجيه، إلخ
  };

  return (
    <section className="font-sans welcome-bg text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-8 flex items-center justify-between overflow-hidden">
        <div className="flex items-center">
          <div className="w-12 h-12 mr-4 rounded-full border-2 border-white overflow-hidden">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          {/* Placeholder for logo */}
        </div>
        <LogoutButton text="تسجيل الخروج" onLogout={handleLogout} />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center flex-col justify-center p-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">اختر الخدمة المناسبة</h1>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          <Link to="/home-page/select-option/traffic/inquiry">
            <button className="report-btn2 serv-1">استعلام عن مركبة</button>
          </Link>
          <button className="report-btn2 serv-2">تقديم شكوى</button>
        </div>
      </section>
      <div className="flex gap-2 flex-col "></div>
    </section>
  );
};

export default TrafficPage;
