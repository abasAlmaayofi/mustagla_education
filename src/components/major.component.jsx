import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Major = ({ title, description, img, val, setVal, link }) => {
  return (
    <>
      {/* PHILOSOPHY */}
      <div className="w-[400px] h-[200px] rounded-xl flex justify-center relative">
        <h1 className="absolute text-xl text-white bg-[#125273] rounded-md px-6 tracking-wide mt-4">
          {title}{" "}
        </h1>
        <img
          src={img}
          alt={title}
          width={400}
          height={150}
          className="rounded-xl shadow-md shadow-black/20"
        />
        <div className="absolute top-0 w-[400px] h-[200px] rounded-xl bg-[#125273]/30 mix-blend-color"></div>
        <div className="absolute top-0 w-[400px] h-[200px] rounded-xl bg-[#F5F5F5]/20 "></div>
        <div className="absolute bottom-0 ">
          <button
            name={title}
            onClick={() => setVal((val) => !val)}
            className="rounded-full bg-[#125273]/90 p-3 mb-1 text-white"
          >
            {val ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      <div
        className={`${
          val ? "h-64" : "h-0"
        } w-[400px] overflow-hidden transition ease-in-out delay-150 text-right text-[#125273] mx-4`}
      >
        <p>{description}</p>
        <div className="w-full flex mt-2 justify-center">
          <Link to={link}>
            <button className="py-2 px-16 rounded-xl text-xl tracking-wide bg-gray-700/90 hover:bg-gray-900/90 text-white">
              اطلع
            </button>
          </Link>
        </div>
      </div>
      {/* END */}
    </>
  );
};

export default Major;
