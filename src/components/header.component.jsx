import React, { useState } from "react";
import { Button, Menu } from "antd";
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
      <div className="fixed  w-full z-10">
        <div
          className={`w-full px-4 py-2 flex md:flex-row-reverse bg-[#F5F5F5]/50 border-b border-[#125273]/30 backdrop-blur-sm justify-between items-center`}
        >
          <div className="md:hidden text-[#125273]">
            <Button
              size="lg"
              type="ghost"
              shape="circle"
              className="shadow-none text-[#125273]"
              icon={<AlignLeft />}
              onClick={() => setShowSidebar(true)}
            />
          </div>
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
            <Button
              size="lg"
              type="ghost"
              shape="circle"
              className="shadow-none text-[#125273]"
              icon={<Search />}
              onClick={() => setShowSidebar(true)}
            />
            {/* <span className="md:text-2xl text-xl text-[#1b7bad] font-bold uppercase">
              MostaqillaEDU
            </span> */}
          </div>
          {/* <div className="flex gap-2 items-center">
            <h2 className="font-bold tracking-widest text-xl text-[#1e89c1] uppercase">
              Mostaqilla
            </h2>
          </div> */}
          {/* <div className="md:hidden text-black">
            <Button
              size="lg"
              type="ghost"
              shape="circle"
              icon={<AlignRight />}
              onClick={() => setShowSidebar(true)}
            />
          </div> */}
          <div className="md:flex flex-row-reverse gap-6 relative hidden w-fit">
            <Link
              to="/home"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center  text-[#125273] ${
                page == "mainpage" ? "" : "font-light"
              } py-2   `}
              name="mainpage"
            >
              الصفحة الرئيسية
            </Link>
            <Link
              to="/"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center  text-[#125273] ${
                page == "coverpage" ? "" : "font-light"
              } py-2 `}
              name="coverpage"
            >
              بوابة الدخول
            </Link>
            <Link
              to="/majors"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center  text-[#125273] ${
                page == "departmentspage" ? "" : "font-light"
              } py-2 `}
              name="departmentspage"
            >
              التخصصات
            </Link>
            <Link
              to="/contact"
              onClick={(e) => setPage(e.target.name)}
              className={`text-lg tracking-wide text-center text-[#125273] ${
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
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            exit={{ x: -1000 }}
            className={`inset-0 fixed md:hidden z-20 bg-[#F5F5F5] shadow-md shadow shadow-gray-500/50 z-40`}
          >
            <div className=" flex justify-end">
              <Button
                className="border-0 shadow-none text-[#125273] font-bold  m-2"
                icon={<X size={28} />}
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="mt-8  flex flex-col justify-center items-center gap-3 relative bg-[#F5F5F5]">
              <Link
                to="/home"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <h1
                  // level={2}
                  // style={{ color: "#125273", fontSize: "20px" }}
                  // type="link"
                  className="text-right mr-2 text-4xl text-[#125273] mt-4"
                >
                  الصفحة الرئيسية
                </h1>
              </Link>
              <Link
                to="/"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <h1
                  // level={2}
                  // style={{ color: "#125273", fontSize: "20px" }}
                  // type="link"
                  className="text-right mr-2 text-4xl text-[#125273] mt-4"
                >
                  بوابة الدخول
                </h1>
              </Link>
              <Link
                to="/majors"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <h1
                  // level={2}
                  // style={{ color: "#125273", fontSize: "20px" }}
                  // type="link"
                  className="text-right mr-2 text-4xl text-[#125273] mt-4"
                >
                  التخصصات
                </h1>
              </Link>
              <Link
                to="/home#contact"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <h1
                  // level={3}
                  // style={{ color: "#125273", fontSize: "20px" }}
                  // type="link"
                  className="text-right mr-2 text-4xl text-[#125273] mt-4"
                >
                  تواصل{" "}
                </h1>
              </Link>
            </div>
            <div className="mt-auto border-t border-[#125273]/10 absolute bottom-0 w-full">
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
