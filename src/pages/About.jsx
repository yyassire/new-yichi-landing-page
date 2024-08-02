import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import React, { useRef } from "react";

function About() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".g_header", {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });
      gsap.from(".g_img", {
        delay: 1.5,
        width: 0,
        duration: 2,
        ease: CustomEase.create(
          "custom",
          "M0,0 C-0.072,0.149 0.365,0.531 0.44,0.822 0.505,1.076 0.818,1.001 1,1 "
        ),
      });
      gsap.from(".g_detailed", {
        opacity: 0,
        yPercent: 10,
      });
      gsap.from(".g_cont_1", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".g_cont_1",
          start: "top 70%",
        },
      });
      gsap.from(".g_cont_2", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".g_cont_2",
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="g_top flex flex-col px-5 md:px-[80px] g_header">
        <div className="text-[30px]  md:text-[100px] font-extrabold letters">
          We are
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[30px] md:w-[150px] h-[60px] md:h-[80px] rounded-2xl img g_img overflow-hidden">
            <img
              src="images/agency.jpg"
              className=" h-full w-full object-fit:contain"
              alt=""
            />
          </div>

          <span className="text-[30px] md:text-[100px]  font-extrabold translate-y-[20px] ">
            YOCHI design
          </span>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black/10 mt-[25vh]" />
      <div className="px-5 md:px-[80px] mt-7">
        <div className="text-[20px] md:text-[45px] w-full md:max-w-[50vw] leading-tight g_detailed">
          We save businesses from ugly and ineffective presentations.
        </div>
        <div className=" flex flex-col md:flex-row mt-7 md:mt-[80px] g_cont_1">
          <p className="flex-1">We are ochi design:</p>
          <div className="flex-1 flex flex-col gap-5 ">
            <p className="w-full md:max-w-[50%]">
              The team of designers, storytellers, and passionate collaborators,
              who work together to create industry-shifting presentations that
              win people's hearts and minds.
            </p>
            <p className="w-full md:max-w-[50%]">
              And we strive to become one of the most recognizable & influential
              presentation agencies of the time who does that.
            </p>
          </div>
        </div>
        <div className="overflow-hidden h-[80vh] mt-10 md:mt-[200px] mb-20 g_cont_2">
          <img
            src="/images/aboutimg.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
