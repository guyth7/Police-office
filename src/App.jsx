import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import React from "react";
import AnimatedRedirect from "./Components/AnimatedRedirect ";
import LoginForm from "./Pages/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimatedRedirect to="/home-page" />} />
        <Route path="/home-page" element={<Welcome />} />
        <Route path="/home-page/signIn" element={<SignIn />} />
        <Route path="/home-page/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
