import React from "react";
import Card from "../Components/Card";
import Button from "../Components/Button";

const SelectOption = () => {
  const cardData = [
    {
      emoji: "🚗",
      title: "خدمات المرور",
      desc: "للتبليغ عن مخالفات السير والحوادث",
      borderColor: "#00aaff",
      path: "/home-page/select-option/traffic",
    },
    {
      emoji: "🚨",
      title: "بلاغات الشرطة",
      desc: "للتبليغ عن الجرائم والحالات الأمنية",
      borderColor: "#ff4444",
      path: "/home-page/select-option/police",
    },
  ];
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
        <Button text="تسجيل الخروج" to="/logout" />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center flex-col justify-center p-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            اختر الجهة المناسبة للتبليغ
          </h1>
          <div className="report-wrapper mt-9">
            <div className="report-card-container">
              {cardData.map((card, i) => (
                <Card key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-2 flex-col "></div>
    </section>
  );
};

export default SelectOption;
