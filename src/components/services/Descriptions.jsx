import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

const gridContainer = [
  {
    name: "Raise Funds:",
    details: ["INVESTOR DECK", "STARTUP PITCH"],
  },
  {
    name: "Sell Products:",
    details: [
      "Business Proposal",
      "Company Presentation",
      "Product Presentation",
      "Sales Deck",
      "Service Deck",
    ],
  },
  {
    name: "Hire & Manage People:",
    details: [
      "Big News Deck",
      "Branded Template",
      "Onboarding presentation",
      "Policy Deck & Playbook",
      "Progress Report",
    ],
  },
  {
    name: "Additional:",
    details: ["Agency", "Branding", "Corporate Training", "Redesign", "Review"],
  },
];
function Descriptions() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".g_parallax_bg_inter", {
        y: "-=500",
        scrollTrigger: {
          trigger: ".g_parallax_bg_outer",
          scrub: true,
          start: "top 50%",
          end: "bottom top",
        },
      });
      gsap.from(".g_tt", {
        opacity: 0,
        yPercent: 10,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".g_tt",
          start: "top 80%",
        },
      });
      gsap.from(".g-t2", {
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".g-t2",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );
  return (
    <div className="" ref={container}>
      <div className="bg-[#CDEA68] py-[40px] md:py-[85px] rounded-t-2xl relative   mt-2 md:mt-10">
        <div className="text-[23px]  md:text-[40px] leading-tight px-5 md:px-[80px] g_tt">
          Let’s be honest. There are really no excuses to have a bad
          presentation anymore. No one has time for poorly communicated ideas.
          Focus on what you do best — growing your business, while we do our
          best at making your presentations awesome.
        </div>
        <div className="w-full bg-black/10 h-[1px] mt-10" />

        <div className="px-5 md:px-[80px] flex flex-col md:flex-row gap-10 md:gap-20 mt-6">
          <div className="flex-1">Our Capabilities:</div>
          <div className="grid md:grid-cols-2 w-1/2  gap-7 grid-cols-1 ">
            {gridContainer.map((paragraph, index) => {
              return (
                <div className="flex flex-col gap-2 g-t2" key={index}>
                  <div className="flex gap-3 items-center">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <div className="">{paragraph.name}</div>
                  </div>
                  <div className="mt-5 flex flex-col gap-1">
                    {paragraph.details.map((i, seconIndex) => {
                      return (
                        <div className="flex flex-col" key={seconIndex}>
                          <button className="border-[2px] border-black/30 text-black max-w-40 flex gap-5 px-5 py-1 rounded-full items-center relative group active:opacity-50">
                            <span className="text-[13px]">{i}</span>
                            <div className="w-[10px] h-[10px] bg-[#a4bf41] rounded-full flex items-center justify-center absolute right-0 group-hover:h-[28px] group-hover:w-[28px] transition-all duration-150">
                              <GoArrowUpRight className="text-black/30 text-[20px] opacity-0 group-hover:opacity-100" />
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-20 px-[20px] md:px-[80px] overflow-hidden h-[80vh] g_parallax_bg_outer">
        <img
          src="/images/youchibg.png"
          alt=""
          className="g_parallax_bg_inter w-full"
        />
      </div>
    </div>
  );
}

export default Descriptions;
