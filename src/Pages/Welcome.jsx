import React from "react";
import Button from "../Components/Button";

const Welcome = () => {
  return (
    <div className="font-sans welcome-bg text-white min-h-screen flex flex-col ">
      {/* Header */}
      <header className="p-8 flex items-center justify-between slide-down">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4 rounded-full border-2 border-white overflow-hidden">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          {/* Placeholder for logo */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center flex-col justify-center p-16 slide-down">
        <img
          src="/logo.jpg"
          alt="logo"
          className="rounded-full border-2 border-white w-40 h-40 object-cover"
        />
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">خدمات الطوارئ</h1>
          <p className="text-lg font-semibold mb-8">
            انضموا إلينا في مهمتنا لحماية المجتمع من خلال العمل الشرطي. ضباطنا
            المتفانون هنا لخدمة سكاننا وشفائهم والشراكة معهم.{" "}
          </p>
        </div>
        <div className="flex gap-2 flex-col">
          <Button text="تسجيل الدخول" to="/home-page/logIn" />
          <Button text="إنشاء حساب" to="/home-page/signIn" />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 flex justify-start">
        <a href="#" className="mr-4 hover:text-purple-200">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 8h-3v4h3v8h4v-8h3l1-4h-4v-2q0-1 0.5-1t0.5-1h3v-4h-3q-1 0-1.5 0.5t-0.5 0.5v2h-4z" />
          </svg>
        </a>
        <a href="#" className="mr-4 hover:text-purple-200">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href="#" className="mr-4 hover:text-purple-200">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.205.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.197-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a3.408 3.408 0 100-6.817 3.408 3.408 0 000 6.817zm0 1.44a4.849 4.849 0 110-9.697 4.849 4.849 0 010 9.697zm6.441-2.835a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z" />
          </svg>
        </a>
        <a href="#" className="mr-4 hover:text-purple-200">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12s-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v2z" />
          </svg>
        </a>
      </footer>
    </div>
  );
};

export default Welcome;
