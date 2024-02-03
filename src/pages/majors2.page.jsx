import React, { useEffect, useState } from "react";
import Header from "../components/header.component";
import Footer3 from "../components/Footer3.component";
import VideoBackground from "../components/video.component";
import ArabicImg from "../assets/Arabic.jpg";
import EnglishImg from "../assets/english.jpg";
import IslamicImg from "../assets/islamic.jpg";
import mathImg from "../assets/math.jpg";
import philosophyImg from "../assets/philosophy.jpg";
import geologyImg from "../assets/geology.jpg";
import psychologyImg from "../assets/psychology.jpg";
import physicsImg from "../assets/physics.jpg";
import scienceImg from "../assets/science.jpg";
import historyImg from "../assets/history.jpg";
import kindergartenImg from "../assets/kindergarten.jpg";
import biologyImg from "../assets/biology.jpg";
import chemistryImg from "../assets/chemistry.jpg";
import socialstudiesImg from "../assets/socialstudies.jpg";
import geographyImg from "../assets/geography.jpg";

import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Major from "../components/major.component";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../libs/firebase";
import { Link } from "react-router-dom";

const Majors2 = () => {
  // const [arabic, setArabic] = useState(false);
  // const [english, setEnglish] = useState(false);
  // const [islamic, setIslamic] = useState(false);
  // const [math, setMath] = useState(false);
  // const [philosophy, setPhilosophy] = useState(false);
  // const [geology, setGeology] = useState(false);
  // const [psychology, setPsychology] = useState(false);
  // const [physics, setPhysics] = useState(false);
  // const [science, setScience] = useState(false);
  // const [history, setHistory] = useState(false);
  // const [kindergarten, setKindergarten] = useState(false);
  // const [biology, setBiology] = useState(false);
  // const [chemistry, setChemistry] = useState(false);
  // const [socialstudies, setSocialstudies] = useState(false);
  // const [geography, setGeography] = useState(false);

  // const [arabicLink, setArabicLink] = useState(null);
  // const [englishLink, setEnglishLink] = useState(null);
  // const [islamicLink, setIslamicLink] = useState(null);
  // const [mathLink, setMathLink] = useState(null);
  // const [philosophyLink, setPhilosophyLink] = useState(null);
  // const [geologyLink, setGeologyLink] = useState(null);
  // const [psychologyLink, setPsychologyLink] = useState(null);
  // const [physicsLink, setPhysicsLink] = useState(null);
  // const [scienceLink, setScienceLink] = useState(null);
  // const [historyLink, setHistoryLink] = useState(null);
  // const [kindergartenLink, setKindergartenLink] = useState(null);
  // const [biologyLink, setBiologyLink] = useState(null);
  // const [chemistryLink, setChemistryLink] = useState(null);
  // const [socialstudiesLink, setSocialstudiesLink] = useState(null);
  // const [geographyLink, setGeographyLink] = useState(null);
  // const fetchUrl = (path, setLink) => {
  //   getDownloadURL(ref(storage, path))
  //     .then((url) => {
  //       setLink(url);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const fetchUrl = (path, setLink) => {
  //   getDownloadURL(ref(storage, path))
  //     .then((url) => {
  //       setLink(url);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchUrl("arabic.pdf", setArabicLink);
  //   fetchUrl("english.pdf", setEnglishLink);
  //   fetchUrl("islamic.pdf", setIslamicLink);
  //   fetchUrl("math.pdf", setMathLink);
  //   fetchUrl("philosophy.pdf", setPhilosophyLink);
  //   fetchUrl("geology.pdf", setGeologyLink);
  //   fetchUrl("psychology.pdf", setPsychologyLink);
  //   fetchUrl("physics.pdf", setPhysicsLink);
  //   fetchUrl("science.pdf", setScienceLink);
  //   fetchUrl("history.pdf", setHistoryLink);
  //   fetchUrl("kindergarten.pdf", setKindergartenLink);
  //   fetchUrl("biology.pdf", setBiologyLink);
  //   fetchUrl("chemistry.pdf", setChemistryLink);
  //   fetchUrl("socialstudies.pdf", setSocialstudiesLink);
  //   fetchUrl("geography.pdf", setGeographyLink);
  //   console.log("set");
  // }, []);

  return (
    <div className="">
      <div className="w-screen bg-WelcomeBackground bg-cover bg-center ">
        <Header />
        <div className="w-full md:h-[calc(60vh)] h-[calc(34vh)] bg-[#F5F5F5]/70 flex flex-col gap-8 justify-center items-center">
          <div className="relative flex flex-col justify-center items-center gap-2 mt-20">
            <div className="bg-ScreenLogo bg-center bg-contain w-28 h-28 bg-no-repeat"></div>
            <h1 className="text-3xl text-[#125273] bg-white/80 shadow-md shadow-[#125273]/10 backdrop-blur-md p-2 rounded-lg relative -top-8 ">
              تخصصات كلية التربية
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-start items-center mt-4">
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/kindergarten.pdf?t=2024-02-03T05%3A39%3A52.992Z">
          <Major
            title="رياض الأطفال"
            description="تخصص رياض الأطفال يدرس علم النفس للطفل وكيفية التعامل مع الأطفال بشخصياتهم المختلفة وكيفية إدارة المعلمة والتعامل معاهم. ويتحدث التخصص عن الصحة النفسية للطفل ويتحدث عن أسرته والبيئة المحيطة به الذي ينعكس على أداء الطفل داخل الفصل ومدىتفاعله مع زملائه، والتخصص كذلك يساعد المعلمة في معرفة طريقة دمج الأطفال مع بعضهم ومعرفة التعزيز السليم واتخاذ العقابالإيجابي مع مختلف الحالات"
            img={kindergartenImg}
            // val={kindergarten}
            // setVal={setKindergarten}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/arabic.pdf?t=2024-02-03T05%3A31%3A41.447Z">
          <Major
            title="اللغة العربية"
            description="تخصص اللغة العربية تخصص يتعمق بأساسيات النحو ويدرس الأزمنة المختلفة للشعر من زمن الجاهلية إلى الزمن الحديث ويتعرف علىمداخل ومخارج الحروف في مقرر مدخل علم اللغة ومن ناحية المرحلة الابتدائية يدرس فيها الطالب مواد الأدب مثل أدب شعبي وأدب الخليجوالجزيرة والمرحلة الثانوية يدرس فيها الطالب النثر الحديث واشتقاق الكلمات في مادة الصرف"
            img={ArabicImg}
            // val={arabic}
            // setVal={setArabic}
            // link={arabicLink}
          />
        </Link>

        {/* END */}
        {/* ENGLISH */}
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/english.pdf?t=2024-02-03T05%3A41%3A03.373Z">
          <Major
            title="اللغة الانجليزية"
            description="هو تخصص يتعمق في دراسة علم اللغة من جميع نواحيها وطريقة تكوين الكلمات واشتقاقها ويتعمق كذلك في قواعد اللغة الإنجليزية وكيفية اكتساب اللغة وتطبيق ذلك في الحياة الواقعية، من ناحية المرحلة الابتدائية يتعلم الطالب كيفية اكتساب اللغة بالنسبة لعمر الطفولة أماتخصص اللغة الإنجليزية في المرحلة الثانوية يدرس الطالب الترجمة وأساسياتها و يتضمن في جميع المراحل الجانب الفني والأدبي أي إنالطالب يتعلم فيه الفن القصصي و الدرامي"
            img={EnglishImg}
            // val={english}
            // setVal={setEnglish}
            // link={englishLink}
          />
        </Link>

        {/* END */}

        {/* ISLAMIC */}
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/islamic.pdf?t=2024-02-03T05%3A41%3A34.450Z">
          <Major
            title="الدراسات الإسلامية"
            description="يحتوي على ٤ مقررات تجويد تتطلب حفظ أجزاء من القرآن وتلاوة، كما يدرس الطالب في التخصص أقسام أخرىمن الشريعة الإسلامية مثل مقررات التفسير ومقررات الفقه ومقررات العقيدة ومقررات السيرة التي تتحدث عن السيرة النبوية وسيرة الخلفاءالراشدين والحروب والحكم في عهدهم "
            img={IslamicImg}
            // val={islamic}
            // setVal={setIslamic}
            // link={islamicLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/socialstudies.pdf">
          <Major
            title="الاجتماعيات"
            description="تخصص الاجتماعيات يدرس بعض من أقسام العلوم الاجتماعية أي الجغرافيا و مواد هذا القسم مثل مداخل الجغرافيا الطبيعية والبشرية ويدرس كذلك بعض من مقررات التاريخ على سبيل المثال مقرر تاريخ العرب الحديث كما يختص بدراسة كيفية التعامل مع عمر الطفولة والإدارة الصفية كما يتحدث في مقرر التربية للمواطنة عن دور المواطن اتجاه الدولة و ما هي حقوقه و في مقرر التربية الحياتية محتوى المقررعن التعاون و كيفية حل المشاكل التي قد تواجه الطلبة "
            img={socialstudiesImg}
            // val={socialstudies}
            // setVal={setSocialstudies}
            // link={socialstudiesLink}
          />
        </Link>

        {/* END */}

        {/* END */}

        {/* history */}
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/history.pdf?t=2024-02-03T05%3A42%3A49.818Z">
          <Major
            title="التاريخ"
            description="تخصص التاريخ يدرس بداية ظهور الإسلام ونشر الدعوة الإسلامية كما يدرس الزمن وتفاصيل الدول التي قامت بعد عهد الرسول صلى الله عليه وسلم بشكل تفصيلي مثل الدولة الأموية والعباسية و لا يقف التخصص عند التاريخ في عهد الرسول وما بعد حياته بل يمتد إلى دراسة تاريخ أوروبا والخليج والعصر الحالي والحديث، ومن خلال دراسة كل دولة وتاريخها يدرس الطالب جغرافية كل دولة الذي أدى وساهم في ازدهار وتطور الدول"
            img={historyImg}
            // val={history}
            // setVal={setHistory}
            // link={historyLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/geography.pdf?t=2024-02-03T05%3A43%3A40.198Z">
          <Major
            title="جغرافيا"
            description="تخصص الجغرافيا يدرس الظواهر المكانية سواء كانت طبيعية أو بشرية، مثل فصول منهج المرحلة الدراسيةللصف الحادي عشر والثاني عشر لكن تكون هذه الفصول على هيئة مواد مفصلة ومتعمقة. على سبيل المثال مقرر جغرافيا طبيعية يدرس الظواهرالطبيعية مثل المناخ التعرية، والمدخل الثاني هو مدخل جغرافيا بشرية الذي يدرس المصانع وتأثيرها على الأماكن والدول وتدرس التحضر والمدن"
            img={geographyImg}
            // val={geography}
            // setVal={setGeography}
            // link={geographyLink}
          />
        </Link>

        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/philosophy.pdf?t=2024-02-03T05%3A44%3A01.234Z">
          <Major
            title="فلسفة"
            description="الفلسفة تخصص يتحدث عن أنواع مختلفة من الفلسفات على سبيل المثال الفلسفة الإسلامية والفلسفة اليونانية ونظرية المعرفة ويتحدث عنأهم وأشهر رواد النظرية، وهو تخصص فيه 1 مواد تابعه لقسم الفلسفة ، ويدرس الطالب باقي المواد من قسم التاريخ والجغرافيا"
            img={philosophyImg}
            // val={philosophy}
            // setVal={setPhilosophy}
            // link={philosophyLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/psychology.pdf?t=2024-02-03T05%3A44%3A21.671Z">
          <Major
            title="علم النفس"
            description="علم النفس علم يدرس سلوك الإنسان، ومن أهم مقررات التخصص هو مدخل علم النفس الذي يعتبر مسبق لجميع مقررات هذا التخصص ويتحدث عن مختلف جوانب علم النفس على سبيل المثال من مقررات التخصص مقرر علم نفس اجتماعي الذي يدرس سلوك الفرد ودراسةالإنسان ككائن اجتماعي، ومقرر علم نفس فسيولوجي يدرس علاقة السلوك بالأعضاء الأعصاب، والغدد بمعنى الظاهرة النفسية وأساسهاالفسيولوجي، ومقرر علم نفس معرفي يدرس وظائف المخ مثل التفكير والإدراك والتذكر"
            img={psychologyImg}
            // val={psychology}
            // setVal={setPsychology}
            // link={psychologyLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/geology.pdf">
          <Major
            title="جيولوجيا"
            description="تخصص يتحدث عن دراسة كل ما يتعلق بطبقات الأرض و عمر الأرض والجبال والبحار وغيرها، ويتحدث كذلك عن تاريخ الأرض ويهتم بالكشف عن الأمور المتعلقة بتطوير الأرض من موارد طبيعية مثل النفط والمعادن والصخور. ويساعد الطالب على معرفة حقائق مشوقة عنالأرض. ويتطلب إجراء دراسات في المختير"
            img={geologyImg}
            // val={geology}
            // setVal={setGeology}
            // link={geologyLink}
          />
        </Link>

        {/* MATH */}
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/math.pdf?t=2024-02-03T05%3A45%3A04.577Z">
          <Major
            title="الرياضيات"
            description="تخصص الرياضيات يدرس بشكل تفصيلي علم الرياضيات و أساسياته و شتى أقسامه حيث يختص بحل المسائل و الأرقام و الرياضيات التطبيقية كما يتحدث عن كيفية إثبات النظريات و الاشتقاق والتكامل بالإضافة إلى المعادلات التفاضلية الاعتيادية و علم الجبر والإحصاء وبالنسبة للمرحلة الثانوية يدرس فيها الطالب الرياضيات التحليلية و الهندسة"
            img={mathImg}
            // val={math}
            // setVal={setMath}
            // link={mathLink}
          />
        </Link>

        {/* GEOLOGY */}
        {/* <Major
          title="جيولوجيا"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In est illo
            nesciunt molestias cum repellat voluptatem impedit nulla, neque
            repellendus iure recusandae sed odit nisi. Officiis iste deleniti
            velit excepturi!"
          img={geologyImg}
          val={geology}
          setVal={setGeology}
        /> */}
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/biology.pdf?t=2024-02-03T05%3A45%3A33.146Z">
          <Major
            title="الاحياء"
            description="تخصص علمي يتطرق لدراسة العلوم النباتية والحيوانية يشمل بذلك التعرف على أنواع النباتات وطبيعة تكاثرها ونموها واختلافاتها من الناحية التركيبية والوظيفية ويشمل أيضًا دراسة الحيوانات وطرق تكاثرها وأنواع الأجهزة في جسم الإنسان والحيوان ويتطرق بعض الشيء لكيمياء لأرتباط المركبات الكيميائية بالهرمونات في جسم الإنسان، وتخصص مليء بالتجارب الكيميائية والبيولوجية كالتشريح وغيره"
            img={biologyImg}
            // val={biology}
            // setVal={setBiology}
            // link={biologyLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/science.pdf?t=2024-02-03T05%3A47%3A10.070Z">
          <Major
            title="علوم"
            description="تخصص العلوم يدرس من بعض أقسام العلوم وبعض من مقررات هذه الأقسام، فيدرس على سبيل المثال مقرر من قسم الكيمياء وآخر من الرياضيات وغيرهم من الأقسام، والتخصص يدرس باللغة الإنجليزية باستثناء بعض المقررات يتم طرحها باللغة الإنجليزية أو باللغة العربية"
            img={scienceImg}
            // val={science}
            // setVal={setScience}
            // link={scienceLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/physics.pdf">
          <Major
            title="الفيزياء"
            description="تخصص الفيزياء يتعمق بدراسة علم الفيزياء أي المتجهات و تحليلها بالإضافة إلى الكميات و أنواعها كما يدرس الإلكترونيات وغيرها كذلك يدرس مقررات من بعض أقسام العلوم حيث يوجد 4 مقررات من قسم الرياضيات و البعض من الجيولوجيا و الكيمياء و البيولوجيا"
            img={physicsImg}
            // val={physics}
            // setVal={setPhysics}
            // link={physicsLink}
          />
        </Link>
        <Link to="https://sownkobchurdcuzqaoiu.supabase.co/storage/v1/object/public/main_mostaqillaedu/chemistry.pdf?t=2024-02-03T05%3A48%3A18.843Z">
          <Major
            title="كيمياء"
            description="تخصص الكيمياء تخصص يدرس بشكل تفصيلي عن المركبات الكيميائية وخصائصها بالإضافة إلى ذلك يدرس كيفية تكوين الروابط الكيميائية وذلك يشمل خصائصها الكيميائية و الفيزيائية و حساباتها ويدرس مقررات من بعض أقسام العلوم مثل قسم الرياضيات والفيزياء "
            img={chemistryImg}
            // val={chemistry}
            // setVal={setChemistry}
            // link={chemistryLink}
          />
        </Link>

        {/* END */}

        {/* psychology */}

        {/* END */}

        {/* geography */}

        {/* END */}
      </div>
      <Footer3 />
    </div>
  );
};

export default Majors2;
