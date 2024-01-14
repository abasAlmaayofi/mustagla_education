import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WelcomeBackground from "../assets/WelcomeBackground.png";
import Welcome from "../assets/Welcome.png";
import WelcomeText from "../assets/WelcomeText.png";
import Logo from "../assets/Logo-1.png";
import { Button } from "antd";
import { AnimatePresence, motion } from "framer-motion";

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const OnClick = () => {
    navigate("home");
  };

  return (
    <AnimatePresence>
      {location.pathname == "/" ? (
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
        >
          <div className="w-screen h-screen relative flex justify-center items-center">
            <div className="flex jusitfy-center gap-8  items-center flex-col z-10 w-screen">
              <img
                src={Logo}
                alt="Mustagla Education"
                className="w-[400px] h-[400px] md:block hidden rounded-full relative -top-20"
              />
              <img
                src={Welcome}
                alt="Mustagla Education"
                className="absolute top-0 z-0 w-screen h-screen object-cover md:hidden block"
              />
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 40 }}
                onClick={OnClick}
                className="py-1 px-12 rounded-lg text-3xl  tracking-widest text-[#1e89c1] hover:bg-gray-500/30  absolute z-10 top-[550px] underline"
              >
                دخول
              </motion.button>
            </div>
            {/* <img
          src={WelcomeBackground}
          alt="Education Collage"
          className="w-screen h-screen absolute top-0 z-0 object-fill"
        /> */}
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default WelcomePage;
