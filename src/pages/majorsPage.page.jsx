import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Layout from "../components/layout.component";
import ContactForm from "../components/contactForm.component";
import Screen2 from "../components/screen2.component";
import Majors from "../components/majors.component";
import Header from "../components/header.component";
import Footer2 from "../components/footer2.component";

const MajorsPage = () => {
  return (
    <AnimatePresence>
      {location.pathname == "/majors" ? (
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
        >
          <Header />
          <Screen2 />
          <Majors />
          <Footer2 />
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default MajorsPage;
