import React from "react";
import Card from "../Components/Card";
import LogoutButton from "../Components/LogoutButton";

const SelectOption = () => {
  const handleLogout = () => {
    console.log("تم تسجيل الخروج");
    // هنا يمكن حذف التوكن، إعادة التوجيه، إلخ
  };

  const cardData = [
    {
      emoji: "🚗",
      title: "البحث عن مركبة",
      desc: "أداة للاستعلام عن حالة المركبة والتحقق من وجود مخالفات، قيود، أو تنبيهات مسجّلة عليها.",
      borderColor: "#00aaff",
      path: "/home-page/select-option/inquiry",
    },
    {
      emoji: "🚨",
      title: "خدمات الطوارئ",
      desc: "واجهة مخصصة للتبليغ عن الحوادث أو طلب المساعدة الفورية، بهدف ضمان استجابة سريعة وفعّالة.",
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
        <LogoutButton text="تسجيل الخروج" onLogout={handleLogout} />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center flex-col justify-center p-16 slide-down">
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
