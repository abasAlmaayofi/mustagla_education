import React from "react";
import ScreenImg from "../assets/Screen2.png";
import { Button } from "antd";
import MajorsAndContact from "./majorsAndContact.component";
import { useLocation } from "react-router-dom";

// bg-[#e9ebec]  via-[#e6e6e5] to-[#eaebec] bg-gradient-to-b
const Screen = () => {
  const location = useLocation();
  return (
    <div className="w-full relative flex justify-center flex-col items-center">
      <div
        className={`w-full bg-background-kuwait-university  bg-center bg-cover  ${
          location.pathname !== "/contact"
            ? "md:h-[900px] h-[950px]"
            : "md:h-[1100px] h-[1450px]"
        }`}
      >
        <div className="w-full h-full bg-[#e2d2b5]/30  backdrop-blur-md  bg-opacity-0 relative">
          <div className="w-[300px] h-44 absolute top-48 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
            <div className="w-[350px] h-44 bg-center bg-cover bg-mostaqilla absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
            {/* <div className="absolute w-fit  -bottom-[80px] left-1/2 transform -translate-x-1/2  rounded-2xl p-4">
              <h2 className=" w-fit text-2xl font-bold  text-[#1e89c1] tracking-wide underline">
                الصفحة الرئيسية
              </h2>
            </div> */}
          </div>
        </div>
        {/* <h2 className="py-4 text-3xl bg-gradient-to-b from-[#f8e167] via-[#f8e167]/60 to-[#f8e167]/20 text-[#2e7eb0] font-bold tracking-widest text-center">
          تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
        </h2> */}
        {/* <img
          src={ScreenImg}
          alt="Screen"
          className="object-cover object-fill md:h-[400px]" bg-gradient-to-b from-[#f8e167] via-[#f8e167]/60 to-[#f8e167]/20
        /> */}
      </div>
    </div>
  );
};

export default Screen;
