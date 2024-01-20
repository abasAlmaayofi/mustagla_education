import React from "react";
import ScreenImg from "../assets/Screen2.png";
import { Button, Layout, Typography } from "antd";
import MajorsAndContact from "./majorsAndContact.component";
import { useLocation } from "react-router-dom";
import Head2 from "./head2.components";

// bg-[#e9ebec]  via-[#e6e6e5] to-[#eaebec] bg-gradient-to-b
const Screen = () => {
  const { Title } = Typography;
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head2 />
      <div className="w-screen bg-background-kuwait-university  bg-center bg-cover">
        <div className="w-full md:h-[300px] h-[600px] bg-gradient-to-r from-gray-500/40 to-white/20 backdrop-blur-sm flex md:flex-row flex-col items-center justify-center">
          <div className="bg-mostaqilla-stripped bg-contain bg-no-repeat bg-center md:w-1/2 w-4/5 h-44"></div>
          <Title
            level={2}
            style={{ color: "#125273" }}
            type="link"
            className="text-right mr-2 tracking-widest w-4/5 md:w-2/3 bg-yellow-200/70 p-4 text-center rounded-lg"
          >
            تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية من المستندات
            اللازمة لمساعدتكم في دراساتكم الجامعية
          </Title>
        </div>
      </div>
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
