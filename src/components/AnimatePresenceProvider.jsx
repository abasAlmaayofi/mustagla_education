import { AnimatePresence } from "framer-motion";
import React from "react";

const AnimatePresenceProvider = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default AnimatePresenceProvider;
