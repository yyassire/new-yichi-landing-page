// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";

// function RouterTransition() {
//   const container = useRef(null);

//   //  useEffect()
//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         onComplete: () => {
//           container.current.classList.add("hidden");
//         },
//       });
//       tl.from(".g_router-panel", {
//         height: "0%",
//         stagger: 0.08,
//         ease: "none",
//         paused: true,
//         onComplete: () => {
//           //   interRef.current.classList.add("invisible");
//         },
//       }).to(".g_router-panel", {
//         height: "0%",
//         stagger: 0.08,
//         ease: "none",
//         // delay: 2,
//       });
//     },
//     { scope: container }
//   );
//   return (
//     <div ref={container}>
//       <div className="inter grid grid-cols-8 fixed top-0 left-0 z-[1999] w-screen h-screen">
//         <div className="bg-black g_router-panel " />
//         <div className="bg-black g_router-panel" />
//         <div className="bg-black g_router-panel" />
//         <div className="bg-black g_router-panel" />
//         <div className="bg-black g_router-panel" />
//         <div className="bg-black g_router-panel" />
//         <div className="bg-black g_router-panel" />
//         <div className="bg-black g_router-panel" />
//       </div>
//     </div>
//   );
// }

// export default RouterTransition;
import React from "react";

function RouterTransition() {
  return <div>RouterTransition</div>;
}

export default RouterTransition;
