import React from "react";
import Header from "../components/header.component";
import Screen from "../components/screen.component";
import Footer from "../components/footer.component";
import { AnimatePresence, delay, motion } from "framer-motion";
import Layout from "../components/layout.component";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      {location.pathname == "/home" ? (
        <motion.div
          className="bg-bottom bg-contain bg-background-pattern"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
        >
          <Layout>
            <Screen />
          </Layout>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Home;
