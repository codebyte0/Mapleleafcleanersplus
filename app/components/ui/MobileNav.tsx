"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    url: string;
  }[];
  className?: string;
}) => {
    const NavItems = [
        { id: 2, name: "About", url: "#about" },
        { id: 3, name: "Services", url: "#services" },
        { id: 4, name: "testimonials", url: "#testimonials" },
      ];
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[9000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {NavItems.map((NavItems, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={NavItems.url}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-600 hover:text-neutral-500"
            )}
          >
            <span className="text-sm">{NavItems.name}</span>
          </Link>
        ))}
        <Link href={"#booknow"}>
        <button className="border text-sm font-medium relative border-neutral-200  text-black  px-4 py-2 rounded-full">
          <span>Book now</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px" />
        </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
