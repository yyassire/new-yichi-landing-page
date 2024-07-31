import React from "react";
import { Link } from "react-router-dom";
const footers = [
  {
    letter: "S:",
    details: ["Instagram", "Behance", "Facebook", "Linkedin"],
  },
  {
    letter: "L:",
    details: [
      "202-1965 W 4th Ave Vancouver, Canada",
      "30 Chukarina StLviv, Ukraine",
    ],
  },
  {
    letter: "M:",
    details: [
      "Home",
      "Services",
      "Our work",
      "About us",
      "Insights",
      "Contact us",
    ],
  },
  {
    letter: "E:",
    details: ["hello@ochi.design"],
  },
];

function Footer() {
  return (
    <div className="h-screen bg-white rounded-t-3xl grid grid-cols-1 lg:grid-cols-2 pt-[20px]  pb-[25px] px-[25px] lg:px-[50px] relative">
      <div className="flex flex-col justify-between">
        <div className="text-[50px] md:text-[100px] tracking-tight flex flex-col">
          <span>eye- </span>
          <span className="translate-y-[-20px] md:translate-y-[-80px]">
            opening
          </span>
        </div>
        <div className="font-semibold text-[20px] md:text-[30px]">Yochi</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-[50px] md:text-[100px] tracking-tight">
          presentations
        </div>
        <div className="grid grid-cols-2 gap-6">
          {footers.map((f) => {
            return (
              <div key={f.letter} className="flex gap-2 flex-col">
                <span className="font-semibold">{f.letter}</span>
                <div className="flex flex-col">
                  {f.details.map((detail) => {
                    return (
                      <Link className="underline" key={detail}>
                        {detail}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center text-black/50 text-[13px]">
          <span>© Yochi design 2024. Legal Terms</span>
          <span>Website by YYassire</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
