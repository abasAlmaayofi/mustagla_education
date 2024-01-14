import React from "react";
import MostaqillaText from "../assets/WelcomeText.png";
const ContactForm = () => {
  return (
    <div className="flex relative justify-center w-full py-28 bg-gray-200/40">
      <img
        src={MostaqillaText}
        alt="mostaqilla"
        width={200}
        className="absolute -top-28 left-1/2 transform -translate-x-1/2 z-0 "
      />
      <form className="w-full px-8 py-6 flex flex-col justify-end bg-[#e0e0e0]/40  rounded-md mx-4 z-10 ">
        <div className="md:w-full md:bg-gradient-to-b md:from-[#eaebec] md:via-[#e6e6e5] md:to-[#fbfbfb]">
          <h2 className="py-4 text-3xl bg-gradient-to-b from-[#f8e167] via-[#f8e167]/60 to-[#f8e167]/20 text-[#2e7eb0] font-bold tracking-wide text-center">
            تواصل
          </h2>
          {/* <img
          src={ScreenImg}
          alt="Screen"
          className="object-cover object-fill md:h-[400px]"
        /> */}
        </div>
        <div className="w-full flex flex-col justify-end p-4">
          <label
            htmlFor="subject"
            className="tracking-wide text-[#1e89c1] text-2xl text-end w-full pb-2 text-end"
          >
            موضوع
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="text-2xl w-full outline-none border border-[#1e89c1] h-12 text-right"
          />
        </div>
        <div className="w-full flex flex-col justify-end p-4">
          <label
            htmlFor="email"
            className="tracking-wide text-[#1e89c1] text-2xl text-end w-full pb-2 text-end"
          >
            بريد إلكتروني
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="text-2xl w-full outline-none border border-[#1e89c1] h-12 text-right"
          />
        </div>
        <div className="w-full flex flex-col justify-end p-4">
          <label
            htmlFor="message"
            className="tracking-wide text-[#1e89c1] text-2xl text-end w-full pb-2 text-end"
          >
            رسالة
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="text-2xl w-full outline-none border border-[#1e89c1] h-40 text-right"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
