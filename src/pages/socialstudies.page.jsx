import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/header.component";
import { File } from "lucide-react";
import { Link } from "react-router-dom";
import ViewPDF from "../components/viewPDF.component";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../libs/firebase";
import Footer3 from "../components/Footer3.component";

const Socialstudies = () => {
  // const [arabicSummary, setarabicSummary] = useState(null);
  // const [arabicPrevCourses, setarabicPrevCourses] = useState(null);
  // const [arabicCoursGraduate, setarabicCoursGraduate] = useState(null);
  // const [arabicBestPrs, setarabicBestPrs] = useState(null);
  // const [arabicCoursesDescription, setarabicCoursesDescription] =
  //   useState(null);
  // const [arabic2BestPrs, setarabic2BestPrs] = useState(null);
  // const [arabic2PrevCourses, setarabic2PrevCourses] = useState(null);
  // const [arabic2CourseGraduate, setarabic2CourseGraduate] = useState(null);
  // const [arabic2CoursesDescription, setarabic2CoursesDescription] =
  //   useState(null);

  // const fetchUrl = (path, setLink) => {
  //   getDownloadURL(ref(storage, path))
  //     .then((url) => {
  //       setLink(url);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   fetchUrl("arabicSummary.png", setarabicSummary);
  //   fetchUrl("arabicPrevCourses.png", setarabicPrevCourses);
  //   fetchUrl("arabicCoursGraduate.png", setarabicCoursGraduate);
  //   fetchUrl("arabicBestPrs.pdf", setarabicBestPrs);
  //   fetchUrl("arabicCoursesDescription.pdf", setarabicCoursesDescription);
  //   fetchUrl("arabic2BestPrs.pdf", setarabic2BestPrs);
  //   fetchUrl("arabic2PrevCourses.png", setarabic2PrevCourses);
  //   fetchUrl("arabic2CourseGraduate.png", setarabic2CourseGraduate);
  //   fetchUrl("arabic2CoursesDescription.png", setarabic2CoursesDescription);
  // }, []);
  return (
    <div className="w-screen min-h-screen bg-WelcomeBackground bg-cover bg-center">
      <Header />

      <div className="w-full min-h-screen pb-4 bg-[#F5F5F5]/70 flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold text-[#125273] mt-28">
            تخصص الاجتماعيات
          </h1>
          <h2 className="text-xl underline">برنامج الابتدائي </h2>
          <div className="flex flex-col flex-col-reverse gap-8">
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/socialstudiesMajorSummary.pdf?t=2024-02-04T17%3A58%3A30.890Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن التخصص{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/socialstudiesCoursesSummary.pdf?t=2024-02-03T21%3A40%3A20.494Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن المقررات{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/socialstudiesBestPrs.pdf?t=2024-02-03T21%3A40%3A02.834Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> أفضل الدكاترة{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/socialstudiesPrev.pdf?t=2024-02-04T17%3A44%3A39.649Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> مسبقات المواد{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/socialstudiesMajorSheet.pdf?t=2024-02-04T17%3A25%3A43.393Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> صحيفة التخرج{" "}
              </button>
            </Link>
          </div>

          {/* <h2 className="text-xl underline">برنامج المتوسط والثانوي</h2>
          <div className="flex flex-col flex-col-reverse gap-8">
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/arabicMajorSummaryMH.pdf?t=2024-02-03T20%3A43%3A53.282Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن التخصص{" "}~
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/arabicCoursesSummaryMH.pdf?t=2024-02-03T20%3A44%3A10.621Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> نبذة تعريفية عن المقررات{" "}
              </button>
            </Link>
            <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/arabicBestPrsMH.pdf?t=2024-02-03T20%3A44%3A24.370Z">
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> أفضل الدكاترة{" "}
              </button>
            </Link> */}
          {/* <Link to={arabic2PrevCourses}>
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> مسبقات المواد{" "}
              </button>
            </Link>
            <Link to={arabic2CourseGraduate}>
              <button className="rounded-none w-52 bg-[#F5F5F5] border-2 text-[#125273] font-semibold border-[#125273] py-2 flex gap-2 items-center justify-center hover:bg-[#125273] hover:text-white">
                <File /> صحيفة التخرج{" "}
              </button>
            </Link> */}
          {/* </div> */}
        </div>
        <Footer3 />
      </div>
    </div>
  );
};

export default Socialstudies;
