import React, { useEffect, useState } from "react";
import Header from "../components/header.component";
import Screen from "../components/screen.component";
import Footer from "../components/footer.component";
import { AnimatePresence, delay, motion } from "framer-motion";
import Layout from "../components/layout.component";
import { Link, useLocation } from "react-router-dom";
import MajorsAndContact from "../components/majorsAndContact.component";
import Footer3 from "../components/Footer3.component";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../libs/firebase";

const Home2 = () => {
  const location = useLocation();
  const [link, setLink] = useState(null);
  const fetchUrl = (path) => {
    getDownloadURL(ref(storage, path))
      .then((url) => {
        setLink(url);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchUrl("تصريح الزيارة الميدانية.pdf");
  }, []);
  return (
    <AnimatePresence>
      {location.pathname == "/home" ? (
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ type: "string", stiffness: 40 }}
          className="relative"
        >
          <div className="w-screen bg-WelcomeBackground bg-center bg-contain">
            <div className="w-full bg-[#F5F5F5]/70 flex flex-col gap-8 justify-center items-center">
              <div className="w-full h-[calc(35vh)] bg-background-kuwait-university bg-cover bg-center">
                <Header />
                <div className="w-full h-full bg-[#F5F5F5]/30 flex flex-col gap-8 justify-center items-center">
                  <div className="mt-12 py-2 rounded-md bg-white/50 backdrop-blur-lg mx-6">
                    <h2 className="text-center text-3xl px-2 text-[#125273]">
                      تقدم لكم رابطة المستقلة، كل ما يخص طلبة كلية التربية
                    </h2>
                  </div>
                </div>
              </div>
              <Link to="/majors">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  اذهب إلى تخصصات كلية التربية
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  توصيف مقررات كلية التربية{" "}
                </button>
              </Link>
              <Link to="/transfer">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  شروط التحويل الداخلي والخارجي{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  شنو نظام الدكاترة؟{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  حسابات أعضاء هيئة التدريس - تيمز{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  PDF كتب{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  معلومات جامعية{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  تلاخيص وإختبارات سابقة{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  خريطة كلية التربية - الجنوبي{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  أرقام المقررات للنسخ السريع{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  نموذج زيارة ميدانية{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  نموذج طبي - كلية التربية{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  طريقة تسجيل المواد للمستجدين{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  التقويم الجامعي{" "}
                </button>
              </Link>

              <Footer3 />

              {/* <div className="w-screen h-44 bg-background-kuwait-university bg-cover bg-center"></div> */}
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Home2;
