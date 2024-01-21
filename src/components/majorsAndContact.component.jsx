import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import SloganImg from "../assets/Slogan.png";
const MajorsAndContact = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-auto absolute top-[300px] flex  gap-8 w-full justify-center items-center flex flex-col ">
        {/* <img src={SloganImg} alt="slogan" width={400} height={150} /> */}
        {/* <h2 className="py-4 text-3xl bg-[#f8e167]/80 text-black font-bold tracking-wide text-center p-4">
              تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
            </h2> */}
      </div>
      <div className="absolute top-[450px] w-full h-[280px] pt-24 pb-20  bg-transparent  flex flex-col md:flex-row px-8 gap-8 justify-center items-center ">
        <Link to="/majors" className="w-full md:w-1/3 h-20 md:h-12">
          <div className="w-full h-20 rounded-lg bg-[#1e89c1] text-white text-3xl flex justify-center items-center">
            التخصصات
          </div>
        </Link>
        <Link to="/contact" className="w-full md:w-1/3 h-20 md:h-12">
          <div className="w-full h-20 rounded-lg bg-[#1e89c1] text-white text-3xl flex justify-center items-center">
            تواصل
          </div>
        </Link>
      </div>
    </>
  );
};

export default MajorsAndContact;
