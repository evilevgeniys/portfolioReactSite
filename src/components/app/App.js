import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import Portfolio from "../portfolio/Portfolio";
import SocialLinks from "../SocialLInks/SocialLinks"; 
import Footer from "../footer/Footer";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppContexts from "../../Сontexts/AppContexts";
import Social from "../Social/Social";

import "./App.scss";

function App() {
  return (
    <AppContexts.Provider value={false}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Social />
        <SocialLinks/>
        <Footer />
      </div>
    </AppContexts.Provider>
  );
}

export default App;

