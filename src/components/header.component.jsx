import React, { useState } from "react";
import { Button, Menu } from "antd";
import WelcomeText from "../assets/WelcomeText.png";
import { AlignRight, Dot, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// bg-[#dce0e8]
const Header = () => {
  const loaction = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [page, setPage] = useState("mainpage");

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
      <div className="relative z-10">
        <div className="w-full p-4 flex justify-between items-center bg-[#e9ebec]  border-black/50 bg-opacity-50 ">
          <div className="flex gap-2 items-center">
            <div class="w-4 h-4 bg-black rounded-full"></div>
            <h2 className="font-bold tracking-widest text-xl text-[#1e89c1]">
              MOSTAQILLA
            </h2>
          </div>
          <div>
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
            transition={{ type: "spring", stiffness: 40 }}
            exit={{ x: 1000 }}
            className={`inset-0 fixed md:ml-[60%] ml-[30%] z-20 backdrop-blur-md bg-white/30 z-40`}
          >
            <div className="border-b-2 border-white/60 ">
              <Button
                className="border-0  text-[#1e89c1] m-2"
                icon={<X size={28} />}
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-3 relative">
              <Link
                to="/home"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-widest text-center text-[#1e89c1] ${
                  page == "mainpage" ? "font-bold " : ""
                } py-2 mx-8 rounded-md`}
                name="mainpage"
              >
                الصفحة الرئيسية
              </Link>
              <Link
                to="/"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-widest text-center text-[#1e89c1] ${
                  page == "coverpage" ? "font-bold " : ""
                } py-2 mx-8 rounded-md`}
                name="coverpage"
              >
                بوابة الدخول
              </Link>
              <Link
                to="/majors"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-widest text-center text-[#1e89c1] ${
                  page == "departmentspage" ? "font-bold " : ""
                } py-2 mx-8 rounded-md`}
                name="departmentspage"
              >
                التخصصات
              </Link>
              <Link
                to="/contact"
                onClick={(e) => setPage(e.target.name)}
                className={`text-2xl tracking-widest text-center text-[#1e89c1] ${
                  page == "contactpage" ? "font-bold " : ""
                } py-2 mx-8 rounded-md`}
                name="contactpage"
              >
                تواصل
              </Link>
            </div>
            <div className="mt-auto border-t-2 border-white/30 absolute bottom-0 w-full">
              <h2 className="text-center mt-2 text-[#1e89c1]/70 text-sm">
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
