import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarLoader from "./BarLoader";

const AnimatedRedirect = ({ to, delay = 5700, animationDuration = 100 }) => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate(to);
      }, animationDuration);
    }, delay);

    return () => clearTimeout(timer);
  }, [to, delay, animationDuration, navigate]);

  return (
    <div
      className={`transition-opacity duration-${animationDuration} ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* خلفية الفيديو */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/public/Bb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="font-sans text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center p-16 bg-black/50">
          <div className="text-center flex items-center flex-col justify-center">
            <img
              className="w-30 h-30 rounded-full mb-3"
              src="/logo.jpg"
              alt="logo"
            />
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              مرحبًا بكم في الموقع الرسمي لقيادة الشرطة
            </h1>
            <div className="mt-8">
              <BarLoader />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimatedRedirect;
