import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/header.component";
import { File } from "lucide-react";
import { Link } from "react-router-dom";
import ViewPDF from "../components/viewPDF.component";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../libs/firebase";
import Footer3 from "../components/Footer3.component";

const Science = () => {
  // const [link, setLink] = useState(null);
  // const fetchUrl = (path) => {
  //   getDownloadURL(ref(storage, path))
  //     .then((url) => {
  //       setLink(url);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   fetchUrl("تصريح الزيارة الميدانية.pdf");
  // }, []);
  return (
    <div className="w-screen min-h-screen bg-WelcomeBackground bg-cover bg-center">
      <Header />

      <div className="w-full min-h-screen pb-4 bg-[#F5F5F5]/70 flex flex-col gap-8 justify-evenly items-center">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold text-[#125273] mt-28">تخصص علوم</h1>
          <h2 className="text-xl underline">برنامج الابتدائي </h2>
          <div className="flex flex-col flex-col-reverse gap-8">
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/scienceMajorSummary.pdf?t=2024-02-04T17%3A58%3A12.254Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن التخصص{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/scienceCoursesSummary.pdf?t=2024-02-03T22%3A24%3A42.786Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن المقررات{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/scienceBestPrsE.pdf?t=2024-02-03T22%3A23%3A42.357Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> أفضل الدكاترة{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/sciencePrev.pdf?t=2024-02-04T17%3A44%3A20.807Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> مسبقات المواد{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/scienceMajorSheet.pdf?t=2024-02-04T17%3A25%3A29.877Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> صحيفة التخرج{" "}
              </button>
            </Link>
          </div>
          {/* <h2 className="text-xl underline">برنامج المتوسط والثانوي</h2>
          <div className="flex flex-col flex-col-reverse gap-8">
            <Link to={link}>
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن المقررات{" "}
              </button>
            </Link>
            <Link to={link}>
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> أفضل الدكاترة{" "}
              </button>
            </Link>
            <Link to={link}>
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> مسبقات المواد{" "}
              </button>
            </Link>
            <Link to={link}>
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> صحيفة التخرج{" "}
              </button>
            </Link>
          </div> */}
        </div>
        <Footer3 />
      </div>
    </div>
  );
};

export default Science;
