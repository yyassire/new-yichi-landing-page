import "@/css/transitionLoader.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function TransitionLoader() {
  const container = useRef(null);
  const panelRef = useRef(null);
  const [timePercentage, setTimePercentage] = useState(0);
  useGSAP(
    () => {
      gsap.from(panelRef.current, {
        yPercent: 15,
        duration: 0.5,
        ease: "power1.in",
      });
      const timeTween = gsap.from(panelRef.current, {
        duration: 2.5,
        onUpdate: () => {
          const progress = gsap.utils.clamp(0, 1, timeTween.progress()); // Ensure value is between 0 and 1
          const percentage = progress * 100; // Convert to percentage

          setTimePercentage(Math.ceil(percentage));
        },
      });
      gsap.from(".g_loader_left", {
        left: "-100%",
        duration: 2,
        ease: "power1.in",
      });
      gsap.from(".g_loader_righ", {
        left: "100%",
        duration: 2,
        ease: "power1.in",
      });
      //   take a look and try to make it more smoth
      gsap.to(panelRef.current, {
        delay: 3,
        width: "100%",
        height: "100%",
        ease: "none",
        onComplete: () => {
          container.current.classList.add("hidden");
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="fixed  top-0 left-0 right-0 transform  z-[9999] bg-black  w-screen h-screen flex flex-col items-center justify-center"
    >
      {/* left mastk */}
      <div className="w-[70%] h-[70%] bg-white/20 rounded-3xl absolute  left-[16%] g_loader_left z-30" />
      {/* right mask */}
      <div className="w-[70%] h-[63%] bg-white/10 rounded-3xl absolute  left-[17%] g_loader_righ z-20" />
      <div
        ref={panelRef}
        className=" w-[70%] h-[75%] bg-[#f1f1f1] rounded-3xl py-5 px-8 flex flex-col justify-between z-40 g_loader_panel"
      >
        <div
          className="text-[30px] font-bold"
          style={{ fontFamily: "Playwrite HR Lijeva" }}
        >
          Yochi
        </div>

        <div className="text-[30px]  md:text-[80px] font-extrabold flex flex-col">
          <span>We Create</span>
          <span className=" md:translate-y-[-50px]"> eye-opening</span>
          <span className="md:translate-y-[-90px]">presentations</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-extralight">Loading...</span>
          <span className="text-[30px]  md:text-[80px] ">
            {timePercentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default TransitionLoader;
