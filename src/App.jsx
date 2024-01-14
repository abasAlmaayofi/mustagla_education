import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome.page";
import Home from "./pages/home.page";
import Layout from "./components/layout.component";
import AnimatePresenceProvider from "./components/AnimatePresenceProvider";
import Contact from "./pages/contact.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresenceProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresenceProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
