import React from "react";
import ScreenImg from "../assets/Screen2.png";
import { Button, Layout, Typography } from "antd";
import MajorsAndContact from "./majorsAndContact.component";
import { Link, useLocation } from "react-router-dom";
import Head2 from "./head2.components";
import ScreenLogo from "../assets/ScreenLogo.png";
import { Content, Footer } from "antd/es/layout/layout";
import Contact from "./Contact.component";

// bg-[#e9ebec]  via-[#e6e6e5] to-[#eaebec] bg-gradient-to-b
const Screen = () => {
  const { Title } = Typography;
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head2 />
      <Content className="pb-32 md:pb-12">
        <div className="w-screen mt-8 flex justify-center items-center md:h-2/3 ">
          <div className="md:h-full h-[600px] flex md:flex-row flex-col gap-6 items-center justify-between md:mx-20">
            {/* <div className="bg-mostaqilla bg-cover bg-no-repeat bg-center w-72 h-44"></div> */}
            <img
              src={ScreenLogo}
              alt="Logo"
              className="rounded-full border-4 border-double border-[#125273] p-3"
              width={400}
              height={400}
            />
            <div className="flex flex-col md:items-end items-center gap-16">
              <h1 className="tracking-wide text-[#125273]/80 text-5xl w-full font-bold md:text-right text-center rounded-lg md:w-2/3">
                تقدم لكم قائمة المستقلة، كل ما يخص طلبة كلية التربية
              </h1>
              <div className="flex justify-center items-center relative -left-[70px] md:-left-0 md:-top-0 -top-8">
                <iframe
                  src="https://giphy.com/embed/vseiydvo5W9LX3b4tA"
                  frameBorder="0"
                  className="w-32 h-8 relative -top-2 -right-8 -rotate-12"
                ></iframe>
                <Link to="/majors">
                  <button className="text-[#125273] border border-[#125273]/70 rounded-md p-3 text-2xl hover:bg-[#125273] hover:text-white">
                    اذهب إلى التخصصات
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <div id="contact">
        <Contact />
      </div>
      <Footer style={{ textAlign: "center" }} className="text-[#125273]">
        <div>مستقلة | 2024 &copy; جميع حقوق النشر محفوظة </div>
      </Footer>
    </Layout>
    // <div className="w-full relative flex justify-center flex-col items-center">
    //   <div
    //     className={`w-full bg-background-kuwait-university  bg-center bg-cover  ${
    //       location.pathname !== "/contact"
    //         ? "md:h-[900px] h-[950px]"
    //         : "md:h-[1100px] h-[1450px]"
    //     }`}
    //   >
    //     <div className="w-full h-full bg-[#e2d2b5]/30  backdrop-blur-md  bg-opacity-0 relative">
    //       <div className="w-[300px] h-44 absolute top-48 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
    //         <div className="w-[350px] h-44 bg-center bg-cover bg-mostaqilla absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
    //         {/* <div className="absolute w-fit  -bottom-[80px] left-1/2 transform -translate-x-1/2  rounded-2xl p-4">
    //           <h2 className=" w-fit text-2xl font-bold  text-[#1e89c1] tracking-wide underline">
    //             الصفحة الرئيسية
    //           </h2>
    //         </div> */}
    //       </div>
    //     </div>
    //     {/* <h2 className="py-4 text-3xl bg-gradient-to-b from-[#f8e167] via-[#f8e167]/60 to-[#f8e167]/20 text-[#2e7eb0] font-bold tracking-widest text-center">
    //       تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
    //     </h2> */}
    //     {/* <img
    //       src={ScreenImg}
    //       alt="Screen"
    //       className="object-cover object-fill md:h-[400px]" bg-gradient-to-b from-[#f8e167] via-[#f8e167]/60 to-[#f8e167]/20
    //     /> */}
    //   </div>
    // </div>
  );
};

export default Screen;
