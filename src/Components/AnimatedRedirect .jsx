import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AnimatedRedirect = ({ to, delay = 3700, animationDuration = 100 }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        navigate(to); // Redirect after animation
      }, animationDuration);
    }, delay);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [to, delay, animationDuration, navigate]);

  return (
    <div
      className={`transition-opacity duration-${animationDuration} ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-sans police-texture text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center p-16">
          <div className="text-center flex items-center flex-col justify-center">
            <img
              className="w-30 h-30 roundedw-32 rounded-full"
              src="/logo.jpg"
              alt="logo"
            />
            <h1 className="text-5xl font-bold mb-4">Welcome To Our Website</h1>
            <div class="loader">
              <div class="loading-bar-background">
                <div class="loading-bar">
                  <div class="white-bars-container">
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimatedRedirect;
