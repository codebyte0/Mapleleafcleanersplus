"use client";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {FloatingNav} from "./ui/MobileNav";

const NavLinks = [
  { id: 2, name: "About", url: "#about" },
  { id: 3, name: "Services", url: "#services" },
  { id: 4, name: "testimonials", url: "#testimonials" },
  { id: 5, name: "Book now", url: "#booknow" },
];


const Navbar = () => {
  return (
    <div className="relative lg:mb-1 z-10 md:mb-14 mb-16">
      <div className="container py-2 md:py-0">
        <div className="flex justify-start items-center gap-[2rem] sm:gap-[11rem] md:gap-[4rem] lg:gap-[20rem] xl:gap-[23rem]">
          {/* logo section */}
          <div className="flex item-center -translate-y-2 h-full">
            <Image
              src={logo}
              alt="logo"
              className="h-[5rem] w-[5rem] top-0 absolute -translate-y-[7px]  mt-2"
              height={250}
              width={200}
            />
            <Link href={"/"} className="text-lg mt-6 ml-16">
              Maple leaf Cleaners plus
            </Link>
          </div>
          {/* desktop menu section  */}
          <div>
            <nav className="md:block hidden">
              <ul className="flex items-center gap-8 md:mt-2 lg:mt-0">
                {NavLinks.map(({ id, url, name }) => {
                  return (
                    <li key={id} className="py-4">
                      <a
                        className="text-[#3a3939] text-base font-medium hover:text-primary hover:border-b-2 hover:border-blue-500 transition-colors duration-500 py-2 "
                        href={url}
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* Mobile View Sidebar  */}
            <div className="">
                <FloatingNav/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
