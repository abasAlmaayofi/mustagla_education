import React, { useRef, useState } from "react";
import ContactImage from "../assets/Contact.png";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="w-full h-auto absolute top-[350px] flex  gap-8 w-full justify-center items-center flex flex-col ">
        <img src={ContactImage} alt="Contact" width={400} height={150} />
        {/* <h2 className="py-4 text-3xl bg-[#f8e167]/80 text-black font-bold tracking-wide text-center p-4">
              تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
            </h2> */}
      </div>
      <div className="w-full h-auto pt-8 pb-20  bg-gradient-to-b to-[#efebe4] from-[#dfd7c9] flex flex-col md:flex-row px-8 gap-8 justify-center items-center ">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-2/3 px-8"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="w-full flex justify-end text-xl text-black"
            >
              الموضوع
            </label>
            <input
              name="subject"
              required
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              className="bg-[#efebe4] w-full h-12 border-[0.7px] border-[#c8c1b4] outline-none text-right text-lg rounded-md"
              placeholder=""
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label
              htmlFor="email"
              className="w-full flex justify-end text-xl text-black"
            >
              البريد الإلكتروني{" "}
            </label>
            <input
              name="email"
              required
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="bg-[#efebe4] w-full h-12 border-[0.7px] border-[#c8c1b4] outline-none text-right text-lg rounded-md"
              placeholder=""
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label
              htmlFor="message"
              className="w-full flex justify-end text-xl text-black"
            >
              الرسالة{" "}
            </label>
            <textarea
              name="message"
              required
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="bg-[#efebe4] w-full h-32 border-[0.7px] border-[#c8c1b4] outline-none text-right text-lg rounded-md"
              placeholder=""
            />
          </div>
          <div className="w-full text-right">
            <button
              type="submit"
              className="bg-[#1e89c1] text-2xl text-white mt-6 px-12 py-3 "
            >
              إرسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
