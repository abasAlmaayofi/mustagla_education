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
import Geography from "./pages/geography.page";
import Geology from "./pages/geology.page";
import Chemistry from "./pages/chemistry.page";
import Physics from "./pages/physics.page";
import Biology from "./pages/biology.page";
import English from "./pages/english.page";
import Islamic from "./pages/islamic.page";
import Philosophy from "./pages/philosophy.page";
import Science from "./pages/science.page";
import Kindergarten from "./pages/kindergarten.page";
import Psychology from "./pages/psychology.page";
import Math from "./pages/math.page";

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
            <Route path="/majors/geography" element={<Geography />} />
            <Route path="/majors/geology" element={<Geology />} />
            <Route path="/majors/chemistry" element={<Chemistry />} />
            <Route path="/majors/physics" element={<Physics />} />
            <Route path="/majors/biology" element={<Biology />} />
            <Route path="/majors/english" element={<English />} />
            <Route path="/majors/history" element={<History />} />
            <Route path="/majors/islamic" element={<Islamic />} />
            <Route path="/majors/math" element={<Math />} />
            <Route path="/majors/philosophy" element={<Philosophy />} />
            <Route path="/majors/science" element={<Science />} />
            <Route path="/majors/kindergarten" element={<Kindergarten />} />
            <Route path="/majors/psychology" element={<Psychology />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </AnimatePresenceProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
