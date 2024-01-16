import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`w-full pt-3 bg-gradient-to-b from-[#efebe4]  to-[#dfd7c9] border-t border-white/80 backdrop-blur-md`}
    >
      <div>
        <h2 className="text-2xl tracking-wide text-black text-end p-4">
          تابعنا
        </h2>
        <div className="flex justify-end items-center gap-4 px-4 pb-3 border-b border-black/80 text-black">
          <Facebook size={32} strokeWidth={1.5} />
          <Twitter size={32} strokeWidth={1.5} />
          <Instagram size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-center mt-2 text-black/70 text-sm">
          {" "}
          مستقلة | 2024 &copy; جميع حقوق النشر محفوظة
        </h2>
      </div>
    </div>
  );
};

export default Footer;
