import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignupPage from "./components/SignupPage";

const App = () => {
  return (
    <div className="App h-screen w-full font-[Poppins]">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
