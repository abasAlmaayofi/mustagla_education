import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout.component";
import Screen from "../components/screen.component";
import Majors from "../components/majors.component";

const MajorsPage = () => {
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
              <Majors />
            </div>
          </Layout>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default MajorsPage;
