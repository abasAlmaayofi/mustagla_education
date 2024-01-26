import { Film, Video } from "lucide-react";
import React from "react";

const VideoBackground = ({ text }) => {
  return (
    <div className="relative w-44 h-32 rounded-xl border-2 bg-[#125273]/70  flex justify-center items-center">
      <Film size={90} color="#7097AB" />
      <h1 className="absolute font-bold text-white text-2xl tracking-wide">
        {text}
      </h1>
    </div>
  );
};

export default VideoBackground;
