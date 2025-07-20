import React from "react";
import LogoutButton from "../Components/LogoutButton";
import SearchBar from "../Components/SearchBar";

const InquiryPage = () => {
  const handleLogout = () => {
    console.log("تم تسجيل الخروج");
    // هنا يمكن حذف التوكن، إعادة التوجيه، إلخ
  };

  const handleSearch = (query) => {
    console.log("تم البحث عن:", query);
    // أضف هنا فلترة أو API call
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
          <h1 className="text-6xl font-bold mb-6">ادخل رقم المركبة</h1>
        </div>
        <div className="flex justify-center mt-4">
          <div className="p-10">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>
      <div className="flex gap-2 flex-col "></div>
    </section>
  );
};

export default InquiryPage;
