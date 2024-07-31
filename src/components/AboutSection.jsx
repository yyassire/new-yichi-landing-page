import React, { useEffect, useRef, useState } from "react";
import "@/css/aboutSection.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Expectation from "./Expectation";
function AboutSection() {
  const container = useRef(null);

  useGSAP(() => {}, { scope: container });

  return (
    <div ref={container} className="z-50 relative ">
      <div className="">
        <div
          // <div
          className=" bg-[#004D43] overflow-hidden rounded-t-2xl pb-16"
        >
          <div className="w-full bg-white/80 h-[2px] translate-y-[25px] md:translate-y-[130px]" />
          <div className="text-[150px] md:text-[330px] font-extrabold no_wrap_text marquee-content">
            <span> WE ARE YOCHI</span>
            <span> WE ARE YOCHI</span>
            <span> WE ARE YOCHI</span>
          </div>
          <div className="w-full bg-white/80 h-[2px]" />
        </div>
        <Expectation />
      </div>
    </div>
  );
}

export default AboutSection;
