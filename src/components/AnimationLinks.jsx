// import { useAnimation } from "@/store/Anim";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// function MyLink({ to, link }) {
//   const { animation } = useAnimation();
//   const [i, setI] = useState(null);
//   //   const { contextSafe } = useGSAP(
//   //     () => {}
//   //     // { scope: container }
//   //   );
//   const { contextSafe } = useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         paused: true,
//         onComplete: () => {
//           container.current.classList.add("hidden");
//         },
//       });
//       tl.to(".g_router-panel", {
//         height: "100%",
//         stagger: 0.08,
//         ease: "none",

//         onComplete: () => {
//           //   interRef.current.classList.add("invisible");
//         },
//       }).to(".g_router-panel", {
//         height: "0%",
//         stagger: 0.08,
//         ease: "none",
//         // delay: 2,
//       });
//       setI(tl);
//     }
//     // { scope: container }
//   );
//   const navigate = useNavigate();

//   const handleClick = contextSafe((event) => {
//     event.preventDefault(); // Prevent default link behavior

//     // Your custom logic here
//     console.log("Doing something before navigation");
//     i.play();
//     // console.log(animation);

//     // Navigate to the desired path
//     navigate(to);
//   });

//   return (
//     <button onClick={handleClick}>
//       <NavLink to={link.path} className="header-link active:opacity-30">
//         {link.title}
//       </NavLink>
//     </button>
//   );
// }

// export default MyLink;
import React from "react";

function AnimationLinks() {
  return <div>AnimationLinks</div>;
}

export default AnimationLinks;
