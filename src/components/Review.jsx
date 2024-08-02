import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
gsap;
function Review() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "25% top",
          pin: true,
          scrub: true,
          end: "bottom top",
          pinSpacing: false,
        },
      });
      tl.from(container.current, {});
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="lg:h-[calc(100vh+400px)] h-screen bg-[#CDEA68] py-[20px] md:py-[100px] flex items-center justify-center flex-col gap-7"
    >
      <div className="text-[50px] md:text-[100px] lg:text-[150px]  font-extrabold tex-center flex flex-col items-center justify-center g_text">
        <span className="md:translate-y-[70px]"> Ready </span>{" "}
        <span className="">To start</span>{" "}
        <span className="md:translate-y-[-70px] lg:translate-y-[-100px]">
          the project?
        </span>
      </div>

      <button className="bg-black text-white min-w-[300px] flex gap-5 px-5 py-4 rounded-full items-center relative group active:opacity-50 text-[25px]">
        <div className="text-center flex-1 font-semibold text-[#CDEA68]">
          Start
        </div>
        <div className="w-[10px] h-[10px] bg-white  rounded-full flex items-center justify-center absolute right-2 group-hover:h-[40px] group-hover:w-[40px] transition-all duration-150">
          <GoArrowUpRight className="text-black text-[20px] opacity-0 group-hover:opacity-100" />
        </div>
      </button>
    </div>
  );
}

export default Review;
