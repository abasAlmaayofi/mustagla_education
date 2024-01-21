import React, { useState } from "react";
import {
  FontColorsOutlined,
  PoundCircleOutlined,
  UsergroupAddOutlined,
  CalculatorOutlined,
  ItalicOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  FolderViewOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Card,
  Layout,
  Menu,
  theme,
  Button,
  Typography,
} from "antd";

import { AlignRight, X } from "lucide-react";
import MenuItem from "antd/es/menu/MenuItem";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import Head2 from "../components/head2.components";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items = [
  getItem("اللغة العربية", "1", <FontColorsOutlined />, null),
  getItem("اللغة الانجليزية", "2", <PoundCircleOutlined />),
  getItem("الدراسات الإسلامية", "3", <ItalicOutlined />),
  getItem("الدراسات  الإجتماعية", "4", <UsergroupAddOutlined />),
  getItem("الرياضيات", "5", <CalculatorOutlined />),
];

const Majors = () => {
  const [closePDFViewer, setClosePDFViewer] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState("1");
  const [showSidebar, setShowSidebar] = useState(false);
  const { Title } = Typography;
  const [page, setPage] = useState("mainpage");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Layout style={{ minHeight: "100vh" }}>
          {/* <Head2 /> */}
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className="pt-6 h-min-screen bg-[#125273] absolute z-60"
            style={{ backgroundColor: "#125273" }}
          >
            <Menu
              theme="dark"
              className="flex flex-col justify-center"
              defaultSelectedKeys={["1"]}
              mode="inline"
              // items={items}
              style={{ backgroundColor: "#125273" }}
            >
              {/* ARABIC */}
              <MenuItem
                key="1"
                title="اللغة العربية"
                className="text-white"
                icon={
                  <FontColorsOutlined
                    style={{ color: selectedItem == "1" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "1" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("1")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "1"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <FontColorsOutlined
                    style={{ color: selectedItem == "1" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "1" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">اللغة العربية</span>
                </div>
              </MenuItem>
              {/* END OF ARABIC */}

              {/* ENGLISH */}
              <MenuItem
                key="2"
                title="اللغة الانجليزية"
                className="text-white"
                icon={
                  <FontColorsOutlined
                    style={{ color: selectedItem == "2" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "2" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("2")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "2"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <FontColorsOutlined
                    style={{ color: selectedItem == "2" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "2" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">اللغة الانجليزية</span>
                </div>
              </MenuItem>
              {/* END OF ENGLISH */}

              {/* ISLAMIC */}
              <MenuItem
                key="3"
                title="الدراسات الإسلامية"
                className="text-white"
                icon={
                  <ItalicOutlined
                    style={{ color: selectedItem == "3" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "3" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("3")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "3"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <ItalicOutlined
                    style={{ color: selectedItem == "3" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "3" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">الدراسات الإسلامية</span>
                </div>
              </MenuItem>
              {/* END OF ISLAMIC */}

              {/* MATH */}
              <MenuItem
                key="4"
                title="الرياضيات"
                className="text-white"
                icon={
                  <CalculatorOutlined
                    style={{ color: selectedItem == "4" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "4" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("4")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "4"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <CalculatorOutlined
                    style={{ color: selectedItem == "4" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "4" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">الرياضيات</span>
                </div>
              </MenuItem>
              {/* END OF MATH */}

              {/* MATH */}
              {/* <MenuItem
                key="5"
                title="الدراسات  الإجتماعية"
                className="text-white"
                icon={
                  <UsergroupAddOutlined
                    style={{ color: selectedItem == "5" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "5" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("5")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "5"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <UsergroupAddOutlined
                    style={{ color: selectedItem == "5" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "5" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">الدراسات الإجتماعية</span>
                </div>
              </MenuItem> */}
              {/* END OF MATH */}

              {/* GEOGRAPHY */}
              <MenuItem
                key="5"
                title="جغرافية"
                className="text-white"
                icon={
                  <GlobalOutlined
                    style={{ color: selectedItem == "5" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "5" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("5")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "5"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <GlobalOutlined
                    style={{ color: selectedItem == "5" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "5" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">جغرافية</span>
                </div>
              </MenuItem>
              {/* END OF GEOGRAPHY */}

              {/* PHILOSOPHY */}
              <MenuItem
                key="6"
                title="فلسفة"
                className="text-white"
                icon={
                  <BulbOutlined
                    style={{ color: selectedItem == "6" ? "#125273" : "white" }}
                    className={`absolute left-0 pl-[27px] top-0 z-40 w-full h-full  ${
                      selectedItem == "6" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                }
                onClick={() => setSelectedItem("6")}
              >
                <div
                  className={`absolute left-0 pl-4 top-0 z-40 w-full h-full flex justify-start items-center gap-2 ${
                    selectedItem == "6"
                      ? "bg-[#F4DA5E] text-[#125273]"
                      : "bg-[#125273] text-white"
                  }`}
                >
                  <BulbOutlined
                    style={{ color: selectedItem == "6" ? "#125273" : "white" }}
                    className={`pl-2 z-40 ${
                      selectedItem == "6" ? "bg-[#F4DA5E]" : "bg-[#125273]"
                    }`}
                  />
                  <span className="ml-10">فلسفة</span>
                </div>
              </MenuItem>
              {/* END OF PHILOSOPHY */}
            </Menu>
          </Sider>

          <Layout>
            <div className="flex justify-between">
              <Button
                type="text"
                className="text-[#125273] hover:text-[#125273] rounded-tl-none rounded-bl-none"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <div className="bg-mostaqilla-stripped bg-contain bg-no-repeat bg-center md:w-0 w-44 h-16"></div>

              <div className="gap-4 flex-row-reverse md:flex hidden">
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
                  to="/contact"
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
              <div className="md:hidden flex items-center text-[#125273]">
                <Button
                  type="text"
                  className="text-[#125273] hover:text-[#125273] rounded-tl-none rounded-bl-none"
                  icon={<AlignRight />}
                  onClick={() => setShowSidebar(true)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
            </div>
            <Content style={{ margin: "16px 16px" }}>
              <div className="flex justify-end items-center w-full p-0 m-0">
                {/* <Button
              type="default"
              size={20}
              className="flex justify-between items-center"
            >
              <LeftOutlined /> <span className="">رجوع</span>
            </Button> */}
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                  }}
                  la
                >
                  <Breadcrumb.Item>
                    {selectedItem == "1"
                      ? "اللغة العربية"
                      : selectedItem == "2"
                      ? "اللغة الانجليزية"
                      : selectedItem == "3"
                      ? "الدراسات الإسلامية"
                      : selectedItem == "4"
                      ? "الرياضيات"
                      : selectedItem == "5"
                      ? "جغرافية"
                      : selectedItem == "6"
                      ? "فلسفة"
                      : ""}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>التخصصات</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-8">
                  <Card
                    style={{
                      color: "blue",
                      textAlign: "right",
                      color: "black",
                      fontSize: "13px",
                    }}
                    title="صحيفة التخرج"
                    extra={<FilePdfOutlined className="pl-4" />}
                    actions={[
                      <Link to="/files/file1.pdf" target="_blank" download>
                        <DownloadOutlined />
                      </Link>,

                      // <ShareAltOutlined />,
                      <div onClick={() => setClosePDFViewer(true)}>
                        <FolderViewOutlined />
                      </div>,
                    ]}
                  >
                    برنامج المتوسط والثانوي
                  </Card>
                  <Card
                    style={{
                      color: "blue",
                      textAlign: "right",
                      color: "black",
                      fontSize: "13px",
                    }}
                    title="مسبقات المواد"
                    extra={<FilePdfOutlined className="pl-4" />}
                    actions={[
                      <Link to="/files/file1.pdf" target="_blank" download>
                        <DownloadOutlined />
                      </Link>,

                      // <ShareAltOutlined />,
                      <div onClick={() => setClosePDFViewer(true)}>
                        <FolderViewOutlined />
                      </div>,
                    ]}
                  >
                    برنامج المتوسط والثانوي{" "}
                  </Card>
                  <Card
                    style={{
                      color: "blue",
                      textAlign: "right",
                      color: "black",
                      fontSize: "13px",
                    }}
                    title=" أفضل الدكاترة"
                    extra={<FilePdfOutlined className="pl-4" />}
                    actions={[
                      <Link to="/files/file1.pdf" target="_blank" download>
                        <DownloadOutlined />
                      </Link>,

                      // <ShareAltOutlined />,
                      <div onClick={() => setClosePDFViewer(true)}>
                        <FolderViewOutlined />
                      </div>,
                    ]}
                  >
                    برنامج المتوسط والثانوي{" "}
                  </Card>
                  <Card
                    style={{
                      color: "blue",
                      textAlign: "right",
                      color: "black",
                      fontSize: "13px",
                    }}
                    title="نبذة تعريفية عن المقررات"
                    extra={<FilePdfOutlined className="pl-4" />}
                    actions={[
                      <Link to="/files/file1.pdf" target="_blank" download>
                        <DownloadOutlined />
                      </Link>,

                      // <ShareAltOutlined />,
                      <div onClick={() => setClosePDFViewer(true)}>
                        <FolderViewOutlined />
                      </div>,
                    ]}
                  >
                    برنامج المتوسط والثانوي{" "}
                  </Card>
                </div>
              </div>
              <Footer
                style={{ textAlign: "center" }}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-mostaqilla-stripped bg-contain bg-no-repeat bg-center md:w-72 w-56 h-24"></div>
                <div>مستقلة | 2024 &copy; جميع حقوق النشر محفوظة </div>
              </Footer>
            </Content>
          </Layout>
        </Layout>
        <div
          className={`fixed w-screen h-screen inset-0 bg-gray-800  z-40 ${
            closePDFViewer ? "block" : "hidden"
          }`}
        >
          <button
            className="absolute top-0 left-0 z-50 text-white md:m-4 md-0 bg-black/80 backdrop-blur-md shadow-sm shadow-gray-500 rounded-full m-1 mt-4"
            onClick={() => setClosePDFViewer(false)}
          >
            <X size={23} />
          </button>

          <Viewer fileUrl="/files/file1.pdf" />
        </div>
      </Worker>

      {/* right sidebar */}
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

      {/* end of right sidebar */}
    </>
  );
};

export default Majors;
