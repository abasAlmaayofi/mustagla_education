import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Welcome from "../assets/Welcome.png";
import { FaTiktok, FaYoutube } from "react-icons/fa";

import { Button, FloatButton } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Instagram, LayoutGrid, Twitter } from "lucide-react";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  UnorderedListOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import ScreenLogo from "../assets/ScreenLogo.png";

const WelcomePage = () => {
  const location = useLocation();
  const [showMedia, setShowMedia] = useState(false);
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
          <div className="w-screen h-[calc(100vh_-_53px)] relative flex flex-col justify-center items-center bg-cover bg-background-welcome bg-center">
            <div
              className="fixed top-5 right-5 z-20 bg-gray-300/90 text-gray-400 rounded-full flex justify-center items-center gap-4 transition transform ease-in-out"
              onClick={() => setShowMedia((val) => !val)}
            >
              {/* <FloatButton.Group
                trigger="click"
                type="outlined"
                style={{ right: 0, top: 0 }}
                icon={<UnorderedListOutlined />}
              >
                <FloatButton icon={<InstagramOutlined />} />
                <FloatButton icon={<TwitterOutlined />} />
              </FloatButton.Group> */}
              {/* <AnimatePresence>
                {showMedia ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="pl-3"
                    >
                      <a href="">
                        <Twitter size={18} />
                      </a>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      transition={{ delay: 0.3 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                    >
                      <a href="">
                        <Instagram size={18} />
                      </a>
                    </motion.div>
                  </>
                ) : (
                  ""
                )}
              </AnimatePresence> */}
              {/* <div
                className={`${
                  showMedia ? "bg-white/30" : ""
                } p-3 rounded-full text-gray-500/80`}
              >
                <LayoutGrid size={18} />
              </div> */}
            </div>
            <div className="flex jusitfy-center gap-8  items-center flex-col z-10 w-screen">
              {/* <img
                src={Logo}
                alt="Mustagla Education"
                className="w-[400px] h-[400px] md:block hidden rounded-full relative -top-20"
              /> */}
              <img
                src={ScreenLogo}
                alt="Logo"
                className="rounded-full border-4 border-double border-[#125273] p-3 relative -top-20 md:block hidden"
                width={400}
                height={400}
              />
              {/* <img
                src={Welcome}
                alt="Mustagla Education"
                className="absolute top-0 z-0 w-screen h-screen object-cover md:hidden block"
              /> */}
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 40 }}
                onClick={OnClick}
                className="rounded-full text-3xl w-12 h-12 tracking-widest bg-[#1e89c1] hover:bg-gray-500/30  absolute z-10 top-[518px] text-white/80 flex justify-center items-center shadow-md shadow-gray-500/50"
              >
                <ChevronRight size={38} className="" />
                {/* <h1 className="text-3xl tracking-wide text-[#1e89c1] md:block hidden">
                  دخول
                </h1> */}
              </motion.div>
            </div>
            <div className="absolute bottom-0 mb-8 flex gap-4 right-4">
              <Link to="https://www.tiktok.com/@mostaqillaedu">
                <button className="border border-gray-500 backdrop-blur-md p-1 flex items-center text-gray-500 rounded-lg text-xs">
                  <FaTiktok />{" "}
                </button>
              </Link>
              <Link to="https://twitter.com/mostaqillaedu?lang=en">
                <button className="border border-gray-500 backdrop-blur-md p-1 flex items-center text-gray-500 rounded-lg text-xs">
                  <TwitterOutlined />
                </button>
              </Link>
              <Link to="https://www.youtube.com/channel/UCbfivDRsmeNktkaWSRU-N7g">
                <button className="border border-gray-500 backdrop-blur-md p-1 flex items-center text-gray-500 rounded-lg text-xs">
                  <FaYoutube />
                </button>
              </Link>
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
