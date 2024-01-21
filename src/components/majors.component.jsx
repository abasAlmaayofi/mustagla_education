import React from "react";
// import ArabicImg from "../assets/elementry/arabic.png";
// import EnlgishImg from "../assets/elementry/english.png";
// import IslamicImg from "../assets/elementry/islamic.png";
// import SocialImg from "../assets/elementry/social.png";
// import MathImg from "../assets/elementry/math.png";
// import ScienceImg from "../assets/elementry/science.png";
import { Tag } from "antd";

const Majors = () => {
  return (
    <>
      <div className="w-full h-auto absolute top-[650px] md:top-[420px] flex  gap-8 w-full justify-center items-center flex flex-col ">
        {/* <h2 className="py-4 text-3xl bg-[#f8e167]/80 text-black font-bold tracking-wide text-center p-4">
              تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
            </h2> */}
        <div className="w-full flex flex-col justify-center items-end md:px-12 px-4  pb-2">
          <h2 className=" text-black/80 w-full border-b border-gray-200 text-right pb-2">
            <Tag color="#108ee9">10 عدد الملفات</Tag>
          </h2>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mt-8">
            {/* <img
              src={ArabicImg}
              alt="arabic"
              width={200}
              onClick=""
              height={200}
              className="rounded-lg cursor-pointer hover:shadow-md shadow-black transition-all duration-150"
            />
            <img
              src={EnlgishImg}
              alt="english"
              width={200}
              height={200}
              className="rounded-lg cursor-pointer hover:shadow-md shadow-black transition-all duration-150"
            />
            <img
              src={MathImg}
              alt="math"
              width={200}
              height={200}
              className="rounded-lg cursor-pointer hover:shadow-md shadow-black transition-all duration-150"
            />
            <img
              src={ScienceImg}
              alt="science"
              width={200}
              height={200}
              className="rounded-lg cursor-pointer hover:shadow-md shadow-black transition-all duration-150"
            />
            <img
              src={SocialImg}
              alt="social"
              width={200}
              height={200}
              className="rounded-lg cursor-pointer hover:shadow-md shadow-black transition-all duration-150"
            />
            <img
              src={IslamicImg}
              alt="islamic"
              width={200}
              height={200}
              className="rounded-lg cursor-pointer hover:shadow-md shadow-black transition-all duration-150"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Majors;
