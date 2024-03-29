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
import kuwaitUniversityImg from "/kuwait-university-1.jpg";
import { useStore } from "../store/navbar";

const Home2 = () => {
  const location = useLocation();
  const [collageInformation, setCollageInformation] = useState(null);
  const [gradingSystem, setGradingSystem] = useState(null);
  const [courseSummary, setCourseSummary] = useState(null);
  const [registerationVideo, setRegisterationVideo] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const setActiveNavbarButton = useStore(
    (state) => state.setActiveNavbarButton
  );
  // const fetchUrl = (path, setLink) => {
  //   getDownloadURL(ref(storage, path))
  //     .then((url) => {
  //       setLink(url);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   // fetchUrl("تصريح الزيارة الميدانية.pdf", setCollageInformation);
  //   fetchUrl("معلومات جامعية 💛💙.pdf", setCollageInformation);
  //   fetchUrl("WhatsApp Image 2024-02-02 at 6.20.28 PM.jpeg", setGradingSystem);
  //   fetchUrl("نبذ عن المقررات العامة 💛💙.pdf", setCourseSummary);
  //   fetchUrl(
  //     "WhatsApp Video 2024-02-02 at 7.48.32 PM.mp4",
  //     setRegisterationVideo
  //   );
  //   fetchUrl("calendar.pdf", setCalendar);
  // }, []);
  useEffect(() => {
    setActiveNavbarButton("main");
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
              <div className="w-full h-[calc(35vh)] relative md:bg-background-kuwait-university md:bg-cover md:bg-center">
                <img
                  src={kuwaitUniversityImg}
                  alt="kuwait-university-collage-of-education-img"
                  className="w-full h-full absolute z-0 opacity-70 md:hidden"
                />
                <Header />
                <div className="w-full h-full bg-[#F5F5F5]/30 flex flex-col gap-8 justify-center items-center">
                  <div className="mt-12 py-2 rounded-md bg-white/50 backdrop-blur-lg mx-6">
                    <h2 className="text-center text-3xl px-2 text-[#125273] mb-4">
                      تقدم لكم القائمة المستقلة
                    </h2>
                    <h2 className="text-center text-3xl px-2 text-[#125273]">
                      كل ما يخص طلبة كلية التربية
                    </h2>
                  </div>
                </div>
              </div>
              <Link to="/majors">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  اذهب إلى تخصصات كلية التربية
                </button>
              </Link>

              <Link to="/transfer">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  كل ما يخص التحويل الداخلي والخارجي{" "}
                </button>
              </Link>
              <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/coursesSummary.pdf?t=2024-02-03T05%3A38%3A13.263Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  نبذة تعريفية عن المقررات العامة والإلزامية
                </button>
              </Link>
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  شنو نظام الدكاترة؟{" "}
                </button>
              </Link> */}
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  حسابات أعضاء هيئة التدريس - تيمز{" "}
                </button>
              </Link>
              <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  PDF كتب{" "}
                </button>
              </Link> */}
              <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/collageInformation.pdf?t=2024-02-03T05%3A36%3A48.961Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  معلومات جامعية{" "}
                </button>
              </Link>
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  تلاخيص وإختبارات سابقة{" "}
                </button>
              </Link> */}
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  خريطة كلية التربية - الجنوبي{" "}
                </button>
              </Link> */}
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  أرقام المقررات للنسخ السريع{" "}
                </button>
              </Link> */}
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  نموذج زيارة ميدانية{" "}
                </button>
              </Link> */}
              {/* <Link to={link}>
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  نموذج طبي - كلية التربية{" "}
                </button>
              </Link> */}
              <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/WhatsApp%20Video%202024-02-02%20at%207.48.32%20PM.mp4?t=2024-02-03T05%3A31%3A01.204Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  طريقة تسجيل المواد{" "}
                </button>
              </Link>
              <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/WhatsApp%20Image%202024-02-02%20at%206.20.28%20PM.jpeg?t=2024-02-03T05%3A32%3A27.938Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  سلم الدرجات{" "}
                </button>
              </Link>
              <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/calendar%20(1).pdf?t=2024-02-03T05%3A35%3A04.713Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  التقويم الجامعي{" "}
                </button>
              </Link>
              <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/InternshipClearance.pdf?t=2024-02-04T19%3A58%3A08.613Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  نموذج تصريح الزيارة الميدانية
                </button>
              </Link>
              {/* <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/graduationCeremony.pdf?t=2024-02-06T18%3A39%3A30.579Z">
                <button className="rounded-none w-52 bg-[#125273] text-white py-2 ">
                  حفل التخرج السنوي{" "}
                </button>
              </Link> */}

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
