import React from "react";
import Header from "../components/header.component";
import Screen from "../components/screen.component";
import Footer from "../components/footer.component";
import { AnimatePresence, delay, motion } from "framer-motion";
import Layout from "../components/layout.component";
import { useLocation } from "react-router-dom";
import MajorsAndContact from "../components/majorsAndContact.component";

const Home = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      {location.pathname == "/home" ? (
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
          className="relative"
        >
          <Layout>
            <div className="w-full relative">
              <Screen />
              <MajorsAndContact />
            </div>
          </Layout>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Home;
