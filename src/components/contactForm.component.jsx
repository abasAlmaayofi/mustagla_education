import React, { useRef, useState } from "react";
// import ContactImage from "../assets/Contact.png";
import emailjs from "@emailjs/browser";
// import SloganImg from "../assets/Slogan.png";
import { Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react";
import { notification } from "antd";

const ContactForm = () => {
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const key = "updatable";
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    // api.open({
    //   key,
    //   message: "Notification Title",
    //   description: "description.",
    // });
    setTimeout(() => {
      api.success({
        key,
        message: "إشعار",
        description: "تم إرسال الرسالة بنجاح",
        // className: "text-right",
      });
    }, 1000);
  };

  const form = useRef();

  const clearInputs = () => {
    setSubject("");
    setEmail("");
    setMessage("");
  };

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
          openNotification();
          clearInputs();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {contextHolder}
      {/* <div className="w-full h-auto absolute top-[300px] flex  gap-8 w-full justify-center items-center flex flex-col ">
        <img src={SloganImg} alt="slogan" width={400} height={150} /> */}
      {/* <h2 className="py-4 text-3xl bg-[#f8e167]/80 text-black font-bold tracking-wide text-center p-4">
              تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية{" "}
            </h2> */}
      {/* </div> */}
      <div className="absolute top-[270px] w-full h-auto pt-12 pb-20 bg-transparent flex flex-col px-8 gap-8 justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-3xl text-[#1e89c1] tracking-wide border-b border-[#1e89c1]">
            تواصل معنا
          </h1>
          <p className="tracking-wide text-gray-900  p-2 rounded-md">
            أي سؤال أو ملاحظة؟ فقط قم بكتابة رسالة لنا
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-[#F4DA5E]/70 p-3 px-4 rounded-lg">
          <div className="w-[370px] p-4">
            <div className="flex flex-col gap-2 justify-end items-end mb-12">
              <h1 className="text-bold text-black text-2xl tracking-wide">
                معلومات التواصل
              </h1>
              <p className="text-black tracking-wide">
                لا تتردد في ارسال رسالة لنا
              </p>
              <hr class="mt-4 w-full h-[0.5px] border-t-0 bg-tranparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100" />
            </div>

            <div className="w-full flex justify-end mb-8 gap-3 text-black">
              <h2>+965 55050050</h2>
              <Phone />
            </div>
            <div className="w-full flex justify-end mb-8 gap-3 text-black">
              {" "}
              <h2>mostaqillaedu@gmail.com</h2>
              <Mail />
            </div>
            <div className="w-full flex justify-end mb-8 gap-3 text-black">
              {" "}
              <h2>جامعة الكويت، كلية التربية</h2>
              <MapPin />
            </div>

            <div className="w-full flex justify-end mb-2 mt-12 gap-3 text-black/80">
              <a
                href=""
                className="p-3 rounded-full bg-black/10 backdrop-blur-md bg-opacity-30"
              >
                <Twitter size={28} strokeWidth={1.5} />
              </a>
              <a
                href=""
                className="p-3 rounded-full bg-black/10 backdrop-blur-md bg-opacity-30"
              >
                <Instagram size={28} strokeWidth={1.5} />
              </a>{" "}
            </div>
          </div>
          <div className="w-[370px] mt-3 h-full border-t md:border-l md:border-t-0 border-black/20">
            <form
              ref={form}
              action=""
              className="w-full h-full"
              onSubmit={sendEmail}
            >
              <div className="flex flex-col gap-2 my-6 text-black font-[30px]">
                <label
                  htmlFor="subject"
                  className="text-xl tracking-wide text-right"
                >
                  الموضوع
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  id="subject"
                  className="border-b border-black rounded-none ml-20 outline-none text-right bg-transparent text-black/70 tracking-wide"
                />
              </div>
              <div className="flex flex-col gap-2 my-6 text-black font-[30px]">
                <label
                  htmlFor="email"
                  className="text-xl tracking-wide text-right"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="border-b border-black rounded-none ml-20 outline-none text-right bg-transparent text-black/70 tracking-wide"
                />
              </div>
              <div className="flex flex-col gap-2 my-6 text-black font-[30px]">
                <label
                  htmlFor="message"
                  className="text-xl tracking-wide text-right"
                >
                  الرسالة
                </label>
                <textarea
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id="message"
                  className="border-b border-black rounded-none ml-20 outline-none text-right bg-transparent text-black/70 tracking-wide h-8"
                />
              </div>
              <div className="w-full text-right mt-16">
                <button
                  type="submit"
                  className="px-16 py-3 text-xl bg-black text-white cursor-pointer hover:bg-black/70 rounded-md"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
