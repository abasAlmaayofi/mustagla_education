import React from "react";
import ScreenImg from "../assets/Screen2.png";
import { Button } from "antd";
import MajorsAndContact from "./majorsAndContact.component";
import { useLocation } from "react-router-dom";
import MajorsImg from "../assets/majors.png";
// bg-[#e9ebec]  via-[#e6e6e5] to-[#eaebec] bg-gradient-to-b
const Screen2 = () => {
  const location = useLocation();
  return (
    <div className="w-full relative flex justify-center flex-col items-center">
      <div
        className={`w-full bg-background-kuwait-university  bg-center bg-cover md:h-[400px] h-[630px]`}
      >
        <div className="w-full h-full  bg-[#e2d2b5]/30 backdrop-blur-md  relative">
          <div className="w-full h-auto absolute top-36 flex md:flex-row flex-col w-full justify-between items-center gap-4">
            <div className="w-[350px] h-44 bg-center bg-cover bg-mostaqilla z-20 md:ml-32 ml-0"></div>
            <div className="text-3xl  font-bold text-gray-800 text-right md:w-1/2 w-[90%] md:mr-12 w-full bg-black/20 backdrop-blur-sm leading-relaxed tracking-wide text-[#F4DA5E] rounded-md p-4 ">
              تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية من المستندات
              اللازمة لمساعدتكم في دراساتكم الجامعية
            </div>

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

export default Screen2;
