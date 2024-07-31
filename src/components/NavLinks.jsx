import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/utils/data";

function NavLinks() {
  return (
    <div className="hidden  md:flex gap-8 ml-0 lg:ml-[400px]">
      {navLinks.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.title}
            className="header-link active:opacity-30"
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
