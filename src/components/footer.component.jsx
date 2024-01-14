import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`w-full pt-8  ${
        location.pathname == "home"
          ? "from-[#fbfbfb]/10 via-[#e6e6e5]/40 to-[#eaebec] bg-gradient-to-b"
          : "bg-gray-200/40"
      }`}
    >
      <div>
        <h2 className="text-2xl tracking-wide text-[#1e89c1] text-end p-4">
          تابعنا
        </h2>
        <div className="flex justify-end items-center gap-4 px-4 pb-3 border-b border-[#1e89c1]/80 text-[#1e89c1]">
          <Facebook size={32} strokeWidth={1.5} />
          <Twitter size={32} strokeWidth={1.5} />
          <Instagram size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-center mt-2 text-[#1e89c1]/50 text-sm">
          {" "}
          مستقلة | 2024 &copy; جميع حقوق النشر محفوظة
        </h2>
      </div>
    </div>
  );
};

export default Footer;
