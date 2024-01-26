import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Layout from "../components/layout.component";
import ContactForm from "../components/contactForm.component";
import Screen from "../components/screen.component";
import Header from "../components/header.component";
import Footer3 from "../components/Footer3.component";

const Contact = () => {
  return (
    <AnimatePresence>
      {location.pathname == "/contact" ? (
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
        >
          <div className="">
            <div className="w-screen bg-WelcomeBackground bg-cover bg-center ">
              <Header />
              <div className="w-full md:h-[calc(60vh)] h-[calc(34vh)] bg-[#F5F5F5]/70 flex flex-col gap-8 justify-center items-center">
                <div className="relative flex flex-col justify-center items-center gap-2 mt-20">
                  <div className="bg-ScreenLogo bg-center bg-contain w-28 h-28 bg-no-repeat"></div>
                  <h1 className="text-3xl text-[#125273] bg-white/80 shadow-md shadow-[#125273]/10 backdrop-blur-md p-2 rounded-lg relative -top-8 ">
                    تواصل معنا
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-start items-center mt-4">
              <ContactForm />
            </div>
            <Footer3 />
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Contact;
