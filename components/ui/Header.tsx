"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SideMenu from "./SideMenu";
import { AlignLeft } from "lucide-react";
import { headerData } from "@/Constants/data";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // split into 3 left, 3 right
  const leftMenu = headerData.slice(0, 3);
  const rightMenu = headerData.slice(3, 6);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
  <Container
    fullWidth
    className="relative z-10 flex items-center h-20 px-6 lg:px-10"
  >
    {/* LEFT SIDE */}
    <div className="flex items-center flex-none lg:w-1/3">
      {!isMobileMenu && <HeaderMenu items={leftMenu} />}

      {isMobileMenu && (
        <div
          className="cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <AlignLeft className="w-7 h-7 text-gray-800" />
        </div>
      )}
    </div>

    {/* CENTER LOGO */}
    <div className="flex grow justify-center items-center pointer-events-none">
      <div className="pointer-events-auto">
        <Logo />
      </div>
    </div>

    {/* RIGHT SIDE */}
<div className="flex items-center justify-end flex-none lg:w-1/3">
  {!isMobileMenu && (
    <a
      href="/pricing" // Update this link to your Party Packages page
      className="whitespace-nowrap px-5 py-2 rounded-full bg-red-600 text-white font-semibold text-lg shadow-md hover:bg-red-700 hover:scale-105 transition transform"
    >
      Party Packages
    </a>
  )}
</div>


  </Container>

  {/* SIDEBAR FOR MOBILE */}
  <SideMenu
    isOpen={isSidebarOpen}
    onClose={() => setIsSidebarOpen(false)}
  />
</header>


      {/** SIDEBAR FOR MOBILE */}
      <SideMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
