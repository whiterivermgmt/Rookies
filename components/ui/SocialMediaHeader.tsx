"use client";

import React, { useEffect, useState } from "react";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const newsItems = [
  "Now Open Daily • Come Eat With Us!",
  "Fresh Food • Friendly Faces • Local Favorite",
  "Book a Reservation Today!",
];

const socials = [
  {
    icon: <SiFacebook size={16} />,
    href: "https://www.facebook.com/RookiesBedford",
    label: "Facebook",
    bg: "#1877F2",
  },
  {
    icon: <SiGoogle size={16} />,
    href: "https://www.google.com",
    label: "Google",
    bg: "#DB4437",
  },
];

const SocialMediaHeader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full z-50">
      <div className="w-full bg-gradient-to-r from-[#7a0f14] via-[#b92e35] to-[#972b2b] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Left: Reservation */}
          <div className="text-sm font-semibold whitespace-nowrap">
            Book a Reservation:{" "}
            <a
              href="tel:+10000000000"
              className="underline hover:text-white/80 transition"
            >
              (000)-000-000
            </a>
          </div>

          {/* Center: Rotating News (Desktop Only) */}
          <div className="hidden md:flex relative flex-1 justify-center text-sm font-semibold tracking-wide min-h-[1.25rem] px-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {newsItems[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((social, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                  style={{ backgroundColor: social.bg }}
                >
                  {social.icon}
                </a>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {social.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
