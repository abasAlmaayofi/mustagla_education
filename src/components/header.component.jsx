import React, { useState } from "react";
import { Button, Menu } from "antd";
import WelcomeText from "../assets/WelcomeText.png";
import { AlignLeft, AlignRight, Dot, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// bg-[#dce0e8]
const Header = () => {
  const loaction = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [page, setPage] = useState("mainpage");
  const location = useLocation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  return (
    <>
      <div className="absolute w-full z-10">
        <div
          className={`w-full px-4 py-4 flex bg-[#eff1f7] justify-between items-center bg-opacity-0 border-b border-black `}
        >
          <div>
            {/* <div
              className="text-black bg-transparent p-3 flex gap-2 cursor-pointer font-light"
              onClick={() => setShowSearch((val) => !val)}
            >
              <Search size={23} />
            </div>
            <div
              className={`transition-all duration-150 transform flex items-end ${
                showSearch ? "block" : "hidden"
              }`}
            >
              <input
                type="text"
                className="bg-transparent border-b rounded-none outline-none mb-3 border-gray-500 mr-4 text-right text-white/70"
              />
            </div> */}
            <span className="md:text-2xl text-xl text-[#1b7bad] font-bold uppercase">
              MostaqillaEDU
            </span>
          </div>
          {/* <div className="flex gap-2 items-center">
            <h2 className="font-bold tracking-widest text-xl text-[#1e89c1] uppercase">
              Mostaqilla
            </h2>
          </div> */}
          <div className="md:hidden text-black">
            <Button
              size="lg"
              type="ghost"
              shape="circle"
              icon={<AlignRight />}
              onClick={() => setShowSidebar(true)}
            />
          </div>
          <div className="md:flex flex-row-reverse gap-6 relative ml-auto hidden">
            <Link
              to="/home"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center  text-black ${
                page == "mainpage" ? "" : "font-light"
              } py-2   `}
              name="mainpage"
            >
              الصفحة الرئيسية
            </Link>
            <Link
              to="/"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center  text-black ${
                page == "coverpage" ? "" : "font-light"
              } py-2 `}
              name="coverpage"
            >
              بوابة الدخول
            </Link>
            <Link
              to="/majors"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center  text-black ${
                page == "departmentspage" ? "" : "font-light"
              } py-2 `}
              name="departmentspage"
            >
              التخصصات
            </Link>
            <Link
              to="/contact"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center text-black ${
                page == "contactpage" ? "" : "font-light"
              } py-2 `}
              name="contactpage"
            >
              تواصل
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSidebar ? (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            exit={{ x: 1000 }}
            className={`inset-0 fixed md:hidden md:ml-[60%] ml-[30%] z-20 backdrop-blur-md  bg-gradient-to-r to-[#1e89c1]/40 from-[#1e89c1]/40  z-40`}
          >
            <div className="border-b border-[#125273]/70">
              <Button
                className="border-0  text-black/70 m-2"
                icon={<X size={28} />}
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="mt-8  flex flex-col gap-3 relative">
              <Link
                to="/home"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-end pr-2  text-[#125273] ${
                  page == "mainpage" ? "font-bold " : ""
                } py-2   `}
                name="mainpage"
              >
                الصفحة الرئيسية
              </Link>
              <Link
                to="/"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-end pr-2  text-[#125273] ${
                  page == "coverpage" ? "font-bold " : ""
                } py-2 `}
                name="coverpage"
              >
                بوابة الدخول
              </Link>
              <Link
                to="/majors"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-end pr-2  text-[#125273] ${
                  page == "departmentspage" ? "font-bold " : ""
                } py-2 `}
                name="departmentspage"
              >
                التخصصات
              </Link>
              <Link
                to="/contact"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                  page == "contactpage" ? "font-bold " : ""
                } py-2 `}
                name="contactpage"
              >
                تواصل
              </Link>
            </div>
            <div className="mt-auto border-t border-[#125273]/70 absolute bottom-0 w-full">
              <h2 className="text-center mt-2 text-[#125273] text-sm">
                {" "}
                مستقلة | 2024 &copy; جميع حقوق النشر محفوظة
              </h2>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
