import React, { useState } from "react";
import LogoutButton from "../Components/LogoutButton";
import SearchBar from "../Components/SearchBar";
import OptionsGrid from "../Components/OptionsGrid";
import DialogBox from "../Components/DialogBox";

const InquiryPage = () => {
  const [query, setQuery] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const checkQuery = () => {
    if (/^\d{6}$/.test(query)) {
      setValid(true);
      setError("");
    } else {
      setValid(false);
      setError("⚠️ يجب إدخال 6 أرقام بالضبط");
    }
  };

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const handleLogout = () => {
    console.log("تم تسجيل الخروج");
  };

  return (
    <section className=" font-sans welcome-bg text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-6 flex items-center justify-between bg-black/40">
        <div className="flex items-center">
          <div className="w-12 h-12 mr-4 rounded-full border-2 border-white overflow-hidden">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <LogoutButton text="تسجيل الخروج" onLogout={handleLogout} />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-6xl font-extrabold mb-6">ابحث عن مركبة</h1>

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={checkQuery}
          error={error}
        />

        {valid && (
          <>
            <OptionsGrid
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            {selectedOptions.length > 0 && (
              <button
                onClick={openDialog}
                className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition font-semibold shadow-lg cursor-pointer"
              >
                متابعة
              </button>
            )}
          </>
        )}

        {showDialog && (
          <DialogBox options={selectedOptions} onClose={closeDialog} />
        )}
      </section>
    </section>
  );
};

export default InquiryPage;
