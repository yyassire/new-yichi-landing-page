import { useGSAP } from "@gsap/react";
import FeatureCard from "./FeatureCard";
import "@/css/features.scss";
import { useRef } from "react";
import gsap from "gsap";

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
];
function Features() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".g_feature_header", {
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".g_feature_headers",
          start: "top 70%",
        },
      });
      gsap.from(".g_feature_box", {
        opacity: 0,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".g_feature_boxes",
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      className="bg-white pt-[40px] md:pt-[150px] rounded-t-2xl relative  "
      ref={container}
    >
      <div className="px-5 md:px-[80px] text-[20px] md:text-[45px] font-semibold g_feature_headers">
        {"Featured projects".split(" ").map((w) => {
          return (
            <span className="g_feature_header" key={w}>
              {w}{" "}
            </span>
          );
        })}
      </div>
      <div className="w-full h-[1px] bg-black/40 mt-[40px]" />
      <div className="mt-[45px] px-5 md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden g_feature_boxes">
        {features.map((feature, index) => {
          return <FeatureCard feature={feature} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Features;
