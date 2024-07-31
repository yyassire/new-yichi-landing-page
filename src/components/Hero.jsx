import "@/css/hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useRef } from "react";

function Hero() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".g_croll", {
        opacity: 0,
        y: -30,
        duration: 2,
        // delay: 0.5,
        delay: 4.5,
        repeat: -1,
        ease: "power2.inOut",
      });
      gsap.from(".g_img", {
        delay: 4.5,
        width: 0,
        duration: 2,
        ease: CustomEase.create(
          "custom",
          "M0,0 C-0.072,0.149 0.365,0.531 0.44,0.822 0.505,1.076 0.818,1.001 1,1 "
        ),
      });
      gsap.from(".g_text", {
        delay: 6.2,
        stagger: 0.3,
        opacity: 0,
      });
      // parallax effect
      gsap.to(container.current, {
        y: "+=300",
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "-=80 top",
          end: "bottom top",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      className="h-[calc(100vh-80px)] mt-[30px] md:mt-[50px] "
      style={{ fontFamily: "FounderGrotesk sans-serif" }}
      ref={container}
    >
      <div className="g_top flex flex-col px-5 md:px-[80px]">
        <div className="text-[30px]  md:text-[130px] font-extrabold letters">
          We create
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[30px] md:w-[150px] h-[70px] md:h-[90px] rounded-2xl img g_img overflow-hidden">
            <img
              src="images/agency.jpg"
              className=" h-full w-full object-fit: contain;"
              alt=""
            />
          </div>

          <span className="text-[30px] md:text-[130px]  font-extrabold ">
            eye-opening
          </span>
        </div>
        <div className="text-[30px] md:text-[130px]  font-extrabold c-letter2 translate-y-0 md:translate-y-[-70px] mt-5 md:mt-0">
          presentations
        </div>
      </div>
      <div className="g_bottom mt-[150px] md:mt-0">
        <div className="bg-black/20 w-full h-[1px]" />
        <div className="px-5 md:px-[80px] flex flex-col md:flex-row items-center justify-between mt-4">
          <span className="g_text">For public and private companies</span>
          <span className="g_text">From the first pitch to IPO</span>
          <span className="g_text">Joose Us The future of your companies</span>
        </div>
        <div className="mt-6 text-center g_croll opacity-50">Scroll down</div>
      </div>
    </div>
  );
}

export default Hero;
