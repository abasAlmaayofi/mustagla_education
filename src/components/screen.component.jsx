import React from "react";
import ScreenImg from "../assets/Screen2.png";
import { Button } from "antd";

// bg-[#e9ebec]  via-[#e6e6e5] to-[#eaebec] bg-gradient-to-b
const Screen = () => {
  return (
    <div className="w-full relative flex justify-center flex-col items-center">
      <div className="md:w-full md:bg-gradient-to-b md:from-[#eaebec] md:via-[#e6e6e5] md:to-[#fbfbfb]">
        <h2 className="py-4 text-3xl bg-gradient-to-b from-[#f8e167] via-[#f8e167]/60 to-[#f8e167]/20 text-[#2e7eb0] font-bold tracking-widest text-center">
          تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
        </h2>
        {/* <img
          src={ScreenImg}
          alt="Screen"
          className="object-cover object-fill md:h-[400px]"
        /> */}
      </div>
      <div className="flex  gap-8 w-full justify-center items-center p-4 pt-4 pb-52 bg-[#fbfbfb]/10">
        <Button
          type="ghost"
          href="/contact"
          className="w-1/2 h-[60px]  flex justify-center items-center rounded-sm  rounded-sm rounde-sm bg-[#f8e167]/80"
        >
          <h2 className="text-3xl text-[#1e89c1]">تواصل</h2>
        </Button>
        <Button
          type="ghost"
          href="/majors"
          className="w-1/2 h-[60px]  flex justify-center items-center rounded-sm rounde-sm bg-[#f8e167]/80"
        >
          <h2 className="text-3xl text-[#1e89c1]">التخصصات</h2>
        </Button>
      </div>
      <div className="h-[200px]"></div>
    </div>
  );
};

export default Screen;
