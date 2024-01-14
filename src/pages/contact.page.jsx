import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Layout from "../components/layout.component";
import ContactForm from "../components/contactForm.component";

const Contact = () => {
  return (
    <AnimatePresence>
      {location.pathname == "/contact" ? (
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
        >
          <Layout>
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
