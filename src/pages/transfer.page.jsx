import React from "react";
import Header from "../components/header.component";
import Footer3 from "../components/Footer3.component";
import VideoBackground from "../components/video.component";

const Transfer = () => {
  return (
    <div className="w-screen bg-WelcomeBackground bg-cover bg-center">
      <Header />
      <div className="w-full h-screen bg-[#F5F5F5]/70 flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold text-[#125273] mt-28">
            شروط التحويل
          </h1>
          <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] text-[125273] py-2 ">
            داخلي - 2021 وما بعد
          </button>
          <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] text-[125273] py-2 ">
            خارجي - 2021 وما بعد
          </button>
          <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] text-[125273] py-2 ">
            داخلي - 2020 وما قبل
          </button>
          <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] text-[125273] py-2 ">
            خارجي - 2020 وما قبل
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4 justify-center items-center">
          <VideoBackground text="شلون أحول؟" />
          <div className="w-full flex justify-center flex-col items-center mt-6 gap-2">
            <div className="w-[200px] h-20 bg-contain bg-center bg-no-repeat bg-mostaqilla-stripped z-20 md:ml-32 ml-0"></div>

            <h2 className="text-center mt-1 text-[#125273]  text-sm font-light">
              {" "}
              مستقلة | 2024 &copy; جميع حقوق النشر محفوظة
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
