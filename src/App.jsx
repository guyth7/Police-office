import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import React from "react";
import AnimatedRedirect from "./Components/AnimatedRedirect ";
import LoginForm from "./Pages/LoginForm";
import SelectOption from "./Pages/SelectOption";
import TrafficPage from "./Pages/TrafficPage";
import PolicePage from "./Pages/PolicePage";
import InquiryPage from "./Pages/InquiryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimatedRedirect to="/home-page" />} />
        <Route path="/home-page" element={<Welcome />} />
        <Route path="/home-page/signIn" element={<SignIn />} />
        <Route path="/home-page/login" element={<LoginForm />} />
        <Route path="/home-page/select-option" element={<SelectOption />} />
        <Route
          path="/home-page/select-option/traffic"
          element={<TrafficPage />}
        />
        <Route
          path="/home-page/select-option/inquiry"
          element={<InquiryPage />}
        />
        <Route
          path="/home-page/select-option/police"
          element={<PolicePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
