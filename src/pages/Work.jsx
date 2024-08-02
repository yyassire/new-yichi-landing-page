import FeatureCard from "@/components/FeatureCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
const features = [
  {
    img: "/images/img1.png",
    name: "Fyde",
    details: ["Audit", "Copywriting", "Sales Deck", "Slides Design"],
  },
  {
    img: "/images/img2.jpg",
    name: "Vise",
    details: ["Agency", "Company Presentation"],
  },
  {
    img: "/images/img3.jpg",
    name: "Trawa",
    details: ["Brand Identity", "Design Research", "Investor Deck"],
  },
  {
    img: "/images/img4.png",
    name: "Premium Blend",
    details: ["Branded Template"],
  },
  {
    img: "/images/img5.jpg",
    name: "Black Book",
    details: ["Branded Template"],
  },
  {
    img: "/images/img6.jpg",
    name: "Premium Blend",
    details: ["Branded Template"],
  },
  {
    img: "/images/img7.jpg",
    name: "Premium Blend",
    details: ["Branded Template"],
  },
  {
    img: "/images/img8.jpg",
    name: "Premium Blend",
    details: ["Branded Template"],
  },
  {
    img: "/images/img9.png",
    name: "Premium Blend",
    details: ["Branded Template"],
  },
];
function Work() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".g_header", {
        opacity: 0,
        yPercent: 10,
        duration: 1,
      });
      gsap.to(".g_top_bg", {
        scrollTrigger: {
          trigger: ".g_top_bg",
          scrub: true,
          pin: true,
          pinSpacing: false,
          start: "top-=80px",
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div className="bg-[#CDEA68] g_top_bg">
        <div className="h-[40vh] md:h-[60vh]">
          <div className="text-[40px]  md:text-[110px] font-bold px-5 md:px-[80px] md:pt-10 tracking-tighter g_header">
            Work
          </div>
        </div>
        <div className="">
          <div className="bg-[#b5cd5c] w-[80%] h-11 m-auto rounded-t-2xl " />
          <div className="bg-[#a0b652] w-[90%] h-11 m-auto rounded-t-2xl" />
        </div>
      </div>
      <div className="relative rounded-t-2xl  px-5 md:px-[80px] pt-5 md:pt-[80px] bg-[#e8e8e8] flex flex-col gap-5 md:gap-24 pb-10">
        <div className="text-[25px]  md:text-[48px] px-5 leading-tight md:max-w-[80%]">
          Purpose driven, strategy-led presentations that people care about.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden g_feature_boxe">
          {features.map((feature, index) => {
            return <FeatureCard feature={feature} key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
