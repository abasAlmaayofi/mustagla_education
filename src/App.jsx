import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome.page";
import Home from "./pages/home.page";
import AnimatePresenceProvider from "./components/AnimatePresenceProvider";
import Contact from "./pages/contact.page";
import MajorsPage from "./pages/majorsPage.page";
// import Majors from "./pages/majors.page";
import Home2 from "./pages/home2.page";
import Majors2 from "./pages/majors2.page";
import Transfer from "./pages/transfer.page";
import Arabic from "./pages/arabic.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresenceProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home2 />} />
            <Route path="/majors" element={<Majors2 />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/majors/arabic" element={<Arabic />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </AnimatePresenceProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
