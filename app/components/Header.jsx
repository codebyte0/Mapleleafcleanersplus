"use client";
import Navbar from "../components/Navbar";
import cleaner from "../assets/cleaner2-removebg.png";
import Image from "next/image";
import ring from "../assets/ring.png";
import { BiPlayCircle } from "react-icons/bi";
import { CountUp } from "countup.js";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { DrawerDemo } from "./Drawer";

const Header = () => {
  const count_up_ref_1 = useRef(null);
  const count_up_ref_2 = useRef(null);

  useEffect(() => {
    const count_up_1 = new CountUp(count_up_ref_1.current, 1200, {
      duration: 2, // 2 seconds
    });
    const count_up_2 = new CountUp(count_up_ref_2.current, 11, {
      duration: 1.5, // 2 seconds
    });
    if (!count_up_1.error && !count_up_2.error) {
      count_up_1.start();
      count_up_2.start();
    } else {
      console.error(count_up_1.error, count_up_2.error);
    }
  }, []);

  return (
    <div className="w-full bg-[#fdf7f3" id="home">
      <div className="max-w-6xl mx-auto container px-[2rem] md:px-[1rem]">
        <Navbar />
        <section className="mt-[2rem] flex flex-col items-center lg:flex-row md:gap-y-0 gap-y-[2.2rem]">
          <div className="relative text-part overflow-hidden -z-0 flex-1 flex flex-col justify-center items-start space-y-8 md:space-y-5">
            <h1 className="text-5xl font-semibold">
              <span className="text-blue-700 font-extrabold">Professional</span>{" "}
              Cleaning service for your home
            </h1>
            <p className="text-lg">
              Get your house cleaned with Maple Leaf Cleaners plus. We can clean
              your entire house at once. Our professional cleaners are trained
              to clean your house with ease.
            </p>
            <div className="flex gap-5 mb-8 items-center ">
              <Link href={"#booknow"}>
                <button className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2">
                  Get a Quote
                  <FaLocationArrow />
                </button>
              </Link>
              <Link href={"#testimonials"}>
                <button className="flex items-center gap-2">
                  <BiPlayCircle className="text-3xl text-slate-800" />{" "}
                  Testimonials
                </button>
              </Link>
            </div>

            <div className="flex">
              <div className="border-r border-gray-400 pr-12">
                <span className="text-4xl text-blue-800" ref={count_up_ref_1}>
                  0
                </span>
                <span className="text-4xl text-blue-800">+</span>
                <p className="text-base">Happy Customers</p>
              </div>
              <div className="pl-11">
                <span className="text-4xl text-blue-800" ref={count_up_ref_2}>
                  0
                </span>
                <span className="text-4xl text-blue-800">+</span>
                <p className="text-base">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="img-part flex-1 relative">
            {/* Ring Image */}
            <div className="absolute inset-0 flex justify-center items-center -z-0 w-full h-full">
              <Image
                src={ring}
                className="z-10 w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] bgring"
                alt="Ring"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Cleaner Image */}

            <Image
              className="relative z-10"
              src={cleaner}
              width={600}
              height={600}
              alt="Cleaner"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
