import React from "react";
import ScreenImg from "../assets/Screen2.png";
import { Button } from "antd";
import MajorsAndContact from "./majorsAndContact.component";
// bg-[#e9ebec]  via-[#e6e6e5] to-[#eaebec] bg-gradient-to-b
const Screen = () => {
  return (
    <div className="w-full relative flex justify-center flex-col items-center">
      <div className="w-full bg-background-kuwait-university  bg-center bg-cover h-[500px]">
        <div className="w-full h-full bg-gradient-to-b to-[#dfd7c9] from-transparent  backdrop-blur-sm  bg-opacity-20 relative">
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
