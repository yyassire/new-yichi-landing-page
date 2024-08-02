import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import TransitionLoader from "./components/TransitionLoader";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

function App() {
  return (
    <ReactLenis root>
      <div className="">
        <TransitionLoader />
        <Header />
        <main className="pt-[80px] bg-[#f1f1f1]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
