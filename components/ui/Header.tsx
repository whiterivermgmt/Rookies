"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SideMenu from "./SideMenu";
import { AlignLeft } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Snowflake data
  const snowFlakes = Array.from({ length: 25 }).map((_, i) => {
    const sizeOptions = [2, 3, 4, 5];
    const size = sizeOptions[i % sizeOptions.length];
    const left = Math.floor((i * 4) + Math.random() * 3); // percent
    const duration = 8 + (i % 5) * 1.5; // 8s–14s
    const delay = Math.random() * 3; // random delay
    const opacity = 0.6 + Math.random() * 0.4; // 0.6–1
    return { size, left, duration, delay, opacity };
  });

  return (
    <>
      <header className="
        relative
        w-full sticky top-0 z-50
        h-[130px]
        bg-[url('/logo/tree.png')]
        bg-no-repeat bg-bottom bg-cover
        backdrop-blur-md
      ">
        {/* Soft overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-b
          from-white/90
          via-white/70
          to-white/0
          pointer-events-none
        "></div>

        {/* Snow layer */}
        <div className="snow absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
  {snowFlakes.map((flake, index) => (
    <div
      key={index}
      className="snow-flake"
      style={{
        width: `${flake.size}px`,
        height: `${flake.size}px`,
        left: `${flake.left}%`,
        top: `${-flake.size * 2}px`,
        animationDuration: `${flake.duration}s`,
        animationDelay: `${flake.delay}s`,
        opacity: flake.opacity,
      }}
    />
  ))}
</div>




        <Container fullWidth className="relative z-10 flex items-center justify-between h-full px-6 lg:px-16">
          {/* LOGO */}
          <div className="flex items-center shrink-0 h-full">
            <Logo />
          </div>

          {/* DESKTOP MENU */}
          {!isMobileMenu && <HeaderMenu />}

          {/* MOBILE HAMBURGER */}
          {isMobileMenu && (
            <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer z-50" onClick={() => setIsSidebarOpen(true)}>
              <AlignLeft className="w-7 h-7 text-gray-800" />
            </div>
          )}

          {/* LIVE RADIO BUTTON */}
          <div
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg cursor-pointer hover:bg-red-700 transition-all duration-200 whitespace-nowrap"
            onClick={() => (window.location.href = '/live-radio')}
          >
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            LIVE RADIO
          </div>
        </Container>
      </header>

      <SideMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
