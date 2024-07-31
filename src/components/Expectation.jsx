import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const custom_text =
  "Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.";
function Expectation() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: ".text_container",
        },
      });
      gsap.to(container.current, {
        y: "-=400",
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top bottom",
          end: "bottom-=400 top",
        },
      });
      gsap.from(".g_p_text", {
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".text_container",
        },
      });
      gsap.from(".g_f1", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".text_container",
        },
      });
      gsap.from(".g_f2", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".text_container",
        },
      });
      gsap.from(".g_f3", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".text_container",
        },
      });
      gsap.from(".g_f5", {
        opacity: 0,
        scale: 0,
        ease: "bounce.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".g_f1",
          start: "top-=450 top",
        },
      });
      gsap.from(".g_f4", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".g_f1",
          start: "top-=450 top",
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      className={`bg-[#CDEA68] py-[40px] md:py-[85px] rounded-t-2xl relative mb-[-400px]`}
      ref={container}
    >
      <div className="px-5 md:px-[80px] text-[20px] md:text-[45px] pb-[45px] max-w-full md:max-w-[calc(100%-20vw)] overflow-hidden text_container">
        {custom_text.split(" ").map((w) => {
          return (
            <span className="g_p_text" key={w}>
              {w}{" "}
            </span>
          );
        })}
      </div>
      <div className="bg-black/20 w-full h-[1px]" />
      <div className="flex flex-col md:flex-row px-5 md:px-[80px] mt-5 gap-[40px] md:gap-[80px]">
        <div className="flex-1 g_f1">What you can expect:</div>
        <div className="w-full md:w-1/4 flex flex-col gap-8 g_f2">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex flex-col w-1/5 gap-6 g_f3">
          <p className="font-semibold">S:</p>
          <div className="flex flex-col">
            <Link
              className="underline hover:opacity-80 active:opacity-0"
              to={"/"}
            >
              Instagram
            </Link>
            <Link
              className="underline hover:opacity-80 active:opacity-0"
              to={"/"}
            >
              Behance
            </Link>
            <Link
              className="underline hover:opacity-80 active:opacity-0"
              to={"/"}
            >
              Facebook
            </Link>
            <Link
              className="underline hover:opacity-80 active:opacity-0"
              to={"/"}
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black/20 w-full h-[1px] mt-[50px]" />
      <div className="flex justify-between px-5 md:px-[80px] mt-6 flex-col md:flex-row gap-10 md:gap-0 g_bottom">
        <div className="flex-1 flex flex-col gap-5 g_f4">
          <span className="text-[40px] tracking-tight font-semibold">
            Our approach:
          </span>

          <button className="bg-black text-white max-w-44 flex gap-5 px-5 py-4 rounded-full items-center relative group active:opacity-50">
            <span>Read More</span>
            <div className="w-[10px] h-[10px] bg-white  rounded-full flex items-center justify-center absolute right-2 group-hover:h-[40px] group-hover:w-[40px] transition-all duration-150">
              <GoArrowUpRight className="text-black text-[20px] opacity-0 group-hover:opacity-100" />
            </div>
          </button>
        </div>
        <div className=" overflow-hidden flex-1 h-[300px] md:h-[450px] rounded-3xl g_f5">
          <img src="/images/about.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Expectation;
