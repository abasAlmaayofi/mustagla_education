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
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        backgroundColor: "white",
        paddingLeft: "10px",
        height: "60px",
      }}
    >
      <AnimatePresence>
        {showSidebar ? (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            exit={{ x: 1000 }}
            className={`inset-0 fixed md:hidden md:ml-[60%] ml-[30%] z-20 bg-white shadow-md shadow shadow-gray-500/50 z-40`}
          >
            <div className="border-b-2 border-[#125273]">
              <Button
                className="border-0 font-bold  text-[#125273] m-2"
                icon={<X size={28} />}
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="mt-8  flex flex-col gap-3 relative">
              <Link
                to="/home"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <Title
                  level={2}
                  style={{ color: "#125273", fontSize: "23px" }}
                  type="link"
                  className="text-right mr-2"
                >
                  الصفحة الرئيسية
                </Title>
              </Link>
              <Link
                to="/"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <Title
                  level={2}
                  style={{ color: "#125273", fontSize: "23px" }}
                  type="link"
                  className="text-right mr-2"
                >
                  بوابة الدخول
                </Title>
              </Link>
              <Link
                to="/majors"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <Title
                  level={2}
                  style={{ color: "#125273", fontSize: "23px" }}
                  type="link"
                  className="text-right mr-2"
                >
                  التخصصات
                </Title>
              </Link>
              <Link
                to="/contact"
                onClick={(e) => setPage(e.target.name)}
                // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
                //   page == "contactpage" ? "font-bold " : ""
                // } py-2 `}
                // name="contactpage"
              >
                <Title
                  level={2}
                  style={{ color: "#125273", fontSize: "23px" }}
                  type="link"
                  className="text-right mr-2"
                >
                  تواصل{" "}
                </Title>
              </Link>
            </div>
            <div className="mt-auto border-t-2 border-[#125273] absolute bottom-0 w-full">
              <h2 className="text-center mt-2 text-[#125273] font-bold text-xs">
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
      <Title
        level={2}
        type="link"
        style={{ color: "#125273" }}
        className="text-[#125273]"
      >
        MostaqillaEDU
      </Title>
      <div className="justify-start ml-auto gap-4 md:flex hidden flex-row-reverse">
        <Link
          to="/home"
          onClick={(e) => setPage(e.target.name)}
          // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
          //   page == "contactpage" ? "font-bold " : ""
          // } py-2 `}
          // name="contactpage"
        >
          <Title
            level={2}
            style={{ color: "#125273", fontSize: "23px" }}
            type="link"
            className="text-right mr-2"
          >
            الصفحة الرئيسية
          </Title>
        </Link>
        <Link
          to="/"
          onClick={(e) => setPage(e.target.name)}
          // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
          //   page == "contactpage" ? "font-bold " : ""
          // } py-2 `}
          // name="contactpage"
        >
          <Title
            level={2}
            style={{ color: "#125273", fontSize: "23px" }}
            type="link"
            className="text-right mr-2"
          >
            بوابة الدخول
          </Title>
        </Link>
        <Link
          to="/majors"
          onClick={(e) => setPage(e.target.name)}
          // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
          //   page == "contactpage" ? "font-bold " : ""
          // } py-2 `}
          // name="contactpage"
        >
          <Title
            level={2}
            style={{ color: "#125273", fontSize: "23px" }}
            type="link"
            className="text-right mr-2"
          >
            التخصصات
          </Title>
        </Link>
        <Link
          to="/contact"
          onClick={(e) => setPage(e.target.name)}
          // className={`text-2xl tracking-wide text-end pr-2 text-[#125273] ${
          //   page == "contactpage" ? "font-bold " : ""
          // } py-2 `}
          // name="contactpage"
        >
          <Title
            level={2}
            style={{ color: "#125273", fontSize: "23px" }}
            type="link"
            className="text-right mr-2"
          >
            تواصل{" "}
          </Title>
        </Link>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        className="flex justify-end border-none md:hidden block"
        style={{ flex: 1, minWidth: 0 }}
      >
        {/* <MenuItem> */}
        <Button
          size="lg"
          type="ghost"
          shape="circle"
          className="relative left-8"
          icon={<AlignRight />}
          onClick={() => setShowSidebar(true)}
        />
        {/* </MenuItem> */}
      </Menu>
    </Header>
  );
};

export default Head2;
