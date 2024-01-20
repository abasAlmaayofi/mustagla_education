import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  FontColorsOutlined,
  PoundCircleOutlined,
  UsergroupAddOutlined,
  CalculatorOutlined,
  ItalicOutlined,
  LeftOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  FilePdfOutlined,
  FolderViewOutlined,
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
import ArabicImg from "../assets/elementry/arabic.png";
import EnlgishImg from "../assets/elementry/english.png";
import IslamicImg from "../assets/elementry/islamic.png";
import SocialImg from "../assets/elementry/social.png";
import MathImg from "../assets/elementry/math.png";
import ScienceImg from "../assets/elementry/science.png";
import { BookA, Users, Moon, Calculator, AlignRight, X } from "lucide-react";
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
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Layout style={{ minHeight: "100vh" }}>
          <Head2 />
          <Layout>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              className="pt-6 h-min-screen"
            >
              <Menu
                theme="dark"
                color=""
                className="relative z-20 flex flex-col justify-center"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
            </Sider>

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
                >
                  <Breadcrumb.Item>User</Breadcrumb.Item>
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
                      <DownloadOutlined />,
                      <ShareAltOutlined />,
                      <FolderViewOutlined />,
                    ]}
                  >
                    برنامج الأبتدائي
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
                      <DownloadOutlined />,
                      <ShareAltOutlined />,
                      <FolderViewOutlined />,
                    ]}
                  >
                    برنامج الأبتدائي{" "}
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
                      <DownloadOutlined />,
                      <ShareAltOutlined />,
                      <FolderViewOutlined />,
                    ]}
                  >
                    برنامج الأبتدائي{" "}
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

                      <ShareAltOutlined />,
                      <div onClick={() => setClosePDFViewer(true)}>
                        <FolderViewOutlined />
                      </div>,
                    ]}
                  >
                    برنامج الأبتدائي{" "}
                  </Card>
                </div>
              </div>
              <Footer style={{ textAlign: "center" }}>
                مستقلة | 2024 &copy; جميع حقوق النشر محفوظة{" "}
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
    </>
  );
};

export default Majors;
