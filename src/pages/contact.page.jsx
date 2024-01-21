import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Layout from "../components/layout.component";
import ContactForm from "../components/contactForm.component";
import Screen from "../components/screen.component";

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
          <Layout>
            <Screen />
            <ContactForm />
          </Layout>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Contact;