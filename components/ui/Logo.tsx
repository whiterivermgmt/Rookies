"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link href="/" className="block select-none relative z-30 perspective-1000">
      <motion.div
        initial={{ rotateX: 30, rotate: -20, y: -60, scale: 0.8, opacity: 0 }}
        animate={{
          rotateX: [30, -10, 5, 0],
          rotate: [-20, 10, -5, 0],
          y: [-60, 15, -5, 0],
          scale: [0.8, 1.05, 0.95, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          flex items-center justify-center w-fit origin-top 
          hover:scale-105 transition-transform duration-300
          mt-4 sm:mt-6 md:mt-8 lg:mt-10
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
  src="/johnny/rookie1.png"
  alt="Johnny Junxion"
  width={600}
  height={180}
  className="
    w-[230px]      /* mobile */
    sm:w-[250px]
    md:w-[270px]
    lg:w-[290px]
    xl:w-[310px]
    h-auto
    mt-2           /* move down slightly */
    md:mt-4        /* move down more on desktop */
  "
  priority
/>

      </motion.div>
    </Link>
  );
};

export default Logo;
