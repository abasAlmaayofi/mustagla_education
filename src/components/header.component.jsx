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
          className={`w-full px-4 py-2 flex bg-[#eff1f7] justify-between items-center bg-opacity-0 border-b ${
            location.pathname == "home"
              ? "border-white/30"
              : "border-gray-300/30"
          }`}
        >
          <div className="bg-black/10 backdrop-blur-md bg-opacity-30 rounded-full text-black/80 p-3 flex gap-2">
            <Search />
          </div>
          {/* <div className="flex gap-2 items-center">
            <h2 className="font-bold tracking-widest text-xl text-[#1e89c1] uppercase">
              Mostaqilla
            </h2>
          </div> */}
          <div className="md:hidden">
            <Button
              size="lg"
              type="ghost"
              shape="circle"
              icon={<AlignRight />}
              onClick={() => setShowSidebar(true)}
            />
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
            className={`inset-0 fixed md:hidden md:ml-[60%] ml-[30%] z-20  bg-gradient-to-r to-[#f2efe9] from-[#dfd7c9]  z-40`}
          >
            <div className="border-b border-[#b2aca0]/70">
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
                className={`text-2xl tracking-wide text-center text-[#1e89c1] ${
                  page == "mainpage" ? "font-bold " : ""
                } py-2 text-center  `}
                name="mainpage"
              >
                الصفحة الرئيسية
              </Link>
              <Link
                to="/"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-center text-[#1e89c1] ${
                  page == "coverpage" ? "font-bold " : ""
                } py-2 mx-8 `}
                name="coverpage"
              >
                بوابة الدخول
              </Link>
              <Link
                to="/majors"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-center text-[#1e89c1] ${
                  page == "departmentspage" ? "font-bold " : ""
                } py-2 mx-8 `}
                name="departmentspage"
              >
                التخصصات
              </Link>
              <Link
                to="/contact"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-wide text-center text-[#1e89c1] ${
                  page == "contactpage" ? "font-bold " : ""
                } py-2 mx-8 `}
                name="contactpage"
              >
                تواصل
              </Link>
            </div>
            <div className="mt-auto border-t border-[#b2aca0]/70 absolute bottom-0 w-full">
              <h2 className="text-center mt-2 text-gray-500 text-sm">
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
