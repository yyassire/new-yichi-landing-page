import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Shero() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".g_header", {
        opacity: 0,
        duration: 1,
        yPercent: 10,
      });
      gsap.from(".g_text1", {
        opacity: 0,
        duration: 0.2,
        yPercent: 10,
      });

      gsap.from(".g_text_c", {
        opacity: 0,
        stagger: 0.2,
      });
      gsap.from(".g_holistic", {
        opacity: 0,
        yPercent: 10,
        scrollTrigger: {
          trigger: ".g_holistic",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div className="text-[40px]  md:text-[110px] font-bold px-5 md:px-[80px] py-5 md:py-[40px] tracking-tight g_header">
        Services
      </div>
      <div className="bg-black/20 w-full h-[1px]" />
      <div className="text-[25px]  md:text-[48px] px-5 md:px-[80px] leading-tight mt-8 g_text1">
        We create eye-catching and eye-opening presentations that educate,
        inspire and influence action.
      </div>
      <div className="bg-black/20 w-full h-[1px] mt-12" />
      <div className="px-5 md:px-[80px] flex flex-col md:flex-row gap-10 md:gap-20 mt-6">
        <div className="flex-1 g_text_c">
          We do this by following <br className="hidden md:block" /> simple
          approach:
        </div>
        <div className="w-full md:w-1/4 flex flex-col gap-7 g_text_c">
          <div className="flex flex-col gap-2">
            <span className="underline">Goal defines it all</span>
            <div className="">
              What do you want to achieve? Understanding the purpose of your
              presentation allows us to tailor it to ensure it hits the mark and
              drives results.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="underline">Audience is the hero</span>
            <div className="">
              Who is it for? What do they want? Why does it matter to them? We
              need to know your audience well enough to deliver a personalized
              presentation that they truly care about.
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col gap-2 g_text_c">
          <span className="underline">Context makes a difference</span>
          <div className="">
            When do you present? Online or live? At a sales meeting, at a
            conference, or just sending a cold email? We knit the context
            together to decide the style of the presentation.
          </div>
        </div>
      </div>
      <div className="text-[20px]  md:text-[48px] px-5 md:px-[80px] g_holistic">
        Holistic process
      </div>
    </div>
  );
}

export default Shero;
