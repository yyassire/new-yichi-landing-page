import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "@/css/header.scss";
import NavLinks from "./NavLinks";
import { CiMenuFries } from "react-icons/ci";
import MobileNarLinks from "./MobileNarLinks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header() {
  const [direction, setDirection] = useState("");
  const [mobile, setMobile] = useState(false);
  const container = useRef(null);
  const handleWheel = (event) => {
    setDirection(event.deltaY > 0 ? "down" : "up");
  };
  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const { contextSafe } = useGSAP(() => {}, { scope: container });
  const onShowNavbar = contextSafe(() => {
    gsap.to(".g_mobile", { top: 0, duration: 0.2 });
    gsap.from(".g_link", {
      opacity: 0,
      stagger: 0.4,
      delay: 0.8,
    });
  });
  const onHideNavbar = contextSafe(() => {
    gsap.to(".g_mobile", { top: "-100vh", duration: 0.1 });
  });

  return (
    <div ref={container}>
      <div
        style={{ transition: "all 0.3s" }}
        className={`bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg fixed w-full top-0 z-[999] ${
          direction === "down" ? "top-[-100vh]" : "top-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-[80px] h-[70px]">
          <Link
            to={"/"}
            className="text-[30px] font-bold"
            style={{ fontFamily: "Playwrite HR Lijeva" }}
          >
            Yochi
          </Link>
          <NavLinks />
          <Link to={"/"} className="hidden md:block header-link">
            Contact Us
          </Link>
          <CiMenuFries
            className="cursor-pointer block md:hidden"
            onClick={() => {
              setMobile(true), onShowNavbar();
            }}
          />
          {/* mobile menu */}
        </div>
      </div>
      <MobileNarLinks
        setMobile={setMobile}
        mobile={mobile}
        onHideNavbar={onHideNavbar}
      />
    </div>
  );
}

export default Header;
