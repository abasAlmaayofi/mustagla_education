import React from "react";
import MajorsImg from "../assets/Majors.png";
const Majors = () => {
  return (
    <>
      <div className="w-full h-auto absolute top-[400px] flex  gap-8 w-full justify-center items-center flex flex-col ">
        <img src={MajorsImg} alt="slogan" width={400} height={150} />
        {/* <h2 className="py-4 text-3xl bg-[#f8e167]/80 text-black font-bold tracking-wide text-center p-4">
              تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
            </h2> */}
      </div>
    </>
  );
};

export default Majors;
