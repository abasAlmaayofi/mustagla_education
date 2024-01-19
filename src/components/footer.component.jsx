import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`w-full py-2 bg-trasparent  ${
        location.pathname == "/contact"
          ? "absolute md:top-[1060px] top-[1410px]"
          : "absolute md:top-[860px] top-[910px]"
      }  to-[#dfd7c9]/50 border-t border-black backdrop-blur-sm`}
    >
      <div className="text-gray-900">
        {/* <div className="flex justify-end items-center gap-4 px-4 pb-3 border-b border-black/80">
          <Facebook size={32} strokeWidth={1.5} />
          <Twitter size={32} strokeWidth={1.5} />
          <Instagram size={32} strokeWidth={1.5} />
        </div> */}
        <h2 className="text-center mt-1  text-sm font-light">
          {" "}
          مستقلة | 2024 &copy; جميع حقوق النشر محفوظة
        </h2>
      </div>
    </div>
  );
};

export default Footer;
