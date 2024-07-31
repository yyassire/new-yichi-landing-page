import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "@/utils/data";

function MobileNarLinks({ setMobile, mobile, onHideNavbar }) {
  return (
    <div
      className={`fixed  inset-x-0 z-30 top-[-100vh] left-0 bg-black bg-opacity-50 backdrop-blur-lg drop-shadow-lg h-full w-full text-white/90 g_mobile`}
    >
      <div className="py-6">
        <div className="flex items-center justify-between px-6 pb-10">
          <Link
            to={"/"}
            className="text-[30px] font-bold"
            style={{ fontFamily: "Playwrite HR Lijeva" }}
          >
            Yochi
          </Link>
          <IoMdClose
            className="text-[30px] cursor-pointer"
            onClick={() => {
              setMobile(false), onHideNavbar();
            }}
          />
        </div>
        <div className="width-full h-[1px] bg-white/10" />
        <div className="pt-12 px-5" style={{ fontFamily: "Anton, sans-serif" }}>
          {navLinks.map((link) => {
            return (
              <NavLink
                to={link.path}
                key={link.title}
                className="header-link-mobile text-[35px] font-extrabold g_link"
                onClick={() => {
                  setMobile(false), onHideNavbar();
                }}
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileNarLinks;
