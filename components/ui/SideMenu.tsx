"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SiFacebook, SiGoogle, SiInstagram } from "react-icons/si";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from "@/Constants/data";
import Logo from "./Logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => setIsMounted(true), []);

  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) handleClose();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setOpenIndex(null);
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/RookiesBedford",
      icon: <SiFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.google.com",
      icon: <SiGoogle />,
      name: "Google Reviews",
    },
    {
      href: "https://www.instagram.com/",
      icon: <SiInstagram />,
      name: "Instagram",
    },
  ];

  if (!isMounted) return null;

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-72 z-50 shadow-xl flex flex-col justify-between rounded-r-3xl bg-white"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Logo */}
        <div className="flex justify-center items-center p-6 border-b border-gray-200">
          <Logo  />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 px-4 mt-4 overflow-y-auto">
          {headerData.map((item, idx) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isActive = pathName === item.href;

            return (
              <div key={item.title} className="w-full">
                {/* Main item */}
                <div
                  className={`flex justify-between items-center w-full px-5 py-4 text-lg font-semibold rounded-2xl cursor-pointer transition-colors duration-200
                    ${isActive ? "bg-red-600 text-white" : "text-gray-800"}
                    hover:bg-red-600 hover:text-white`}
                  onClick={() =>
                    hasSubmenu ? toggleSubmenu(idx) : handleClose()
                  }
                >
                  {hasSubmenu ? (
                    <span>{item.title}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="w-full"
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>
                  )}
                  {hasSubmenu && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openIndex === idx || isActive
                          ? "rotate-180 text-white"
                          : "text-gray-800"
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                <AnimatePresence>
                  {hasSubmenu && openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col ml-4 mt-2 gap-2"
                    >
                      {item.submenu.map((sub) => {
                        const isSubActive = pathName === sub.href;
                        return (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={handleClose}
                            className={`px-4 py-2 rounded-xl text-base font-medium transition-colors duration-200
                              ${
                                isSubActive
                                  ? "bg-red-600 text-white"
                                  : "text-gray-800"
                              }
                              hover:bg-red-600 hover:text-white`}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 p-4">
          {socialLinks.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 hover:scale-105 transition transform duration-200"
              >
                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideMenu;
