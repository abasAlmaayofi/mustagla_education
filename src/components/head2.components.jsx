import { Button, Menu, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { AnimatePresence, motion } from "framer-motion";
import { AlignRight, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Head2 = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { Title } = Typography;
  const [page, setPage] = useState("mainpage");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        backgroundColor: "#F5F5F5",
        paddingLeft: "10px",
        height: "60px",
        // borderBottom: "2px solid black",
      }}
    >
      <AnimatePresence>
        {showSidebar ? (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            exit={{ x: 1000 }}
            className={`inset-0 fixed md:hidden z-20 bg-[#125273] shadow-md shadow shadow-gray-500/50 z-40`}
          >
            <div className="border-b-2 border-[#125273]">
              <Button
                className="border-0 font-bold  text-white m-2"
                icon={<X size={28} />}
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="mt-8  flex flex-col justify-center items-center gap-3 relative bg-[#125273]">
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
                  className="text-right mr-2 text-4xl text-white mt-4"
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
                  className="text-right mr-2 text-4xl text-white mt-4"
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
                  className="text-right mr-2 text-4xl text-white mt-4"
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
                  className="text-right mr-2 text-4xl text-white mt-4"
                >
                  تواصل{" "}
                </h1>
              </Link>
            </div>
            <div className="mt-auto border-t border-[#125273]/10 absolute bottom-0 w-full">
              <h2 className="text-center mt-2 text-white text-sm">
                {" "}
                مستقلة | 2024 &copy; جميع حقوق النشر محفوظة
              </h2>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      {/* <span className="md:text-xl text-xl min-w-0 text-[#1b7bad] font-bold uppercase"></span>{" "} */}
      {/* <Title
        level={2}
        type="link"
        style={{ color: "#125273" }}
        className="text-[#125273]"
      >
        MostaqillaEDU
      </Title> */}
      <div className="bg-mostaqilla-stripped bg-contain relative right-4 bg-no-repeat bg-center w-52 h-44"></div>

      <div className="justify-start ml-auto gap-4 md:flex hidden flex-row-reverse items-center bg-[#F5F5F5]">
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
            className="text-right mr-2 text-xl text-[#125273] mt-4"
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
            className="text-right mr-2 text-xl text-[#125273] mt-4"
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
            className="text-right mr-2 text-xl text-[#125273] mt-4"
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
            className="text-right mr-2 text-xl text-[#125273] mt-4"
          >
            تواصل{" "}
          </h1>
        </Link>
      </div>

      {/* <MenuItem> */}
      <Button
        size="lg"
        type="ghost"
        shape="circle"
        className="ml-auto mr-2 md:hidden block"
        icon={<AlignRight />}
        onClick={() => setShowSidebar(true)}
      />
      {/* </MenuItem> */}
    </div>
  );
};

export default Head2;
