"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

interface HeaderMenuProps {
  items: any[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathName = usePathname();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="hidden lg:flex items-center justify-center relative z-50 h-20 w-full px-4 overflow-visible">
      <div className="flex items-center gap-12">
        {items.map((item, index) => {
          const isActive = pathName === item.href;
          const hasSubmenu =
            Array.isArray(item.submenu) && item.submenu.length > 0;

          return (
            <div
              key={item.title}
              className="relative group flex items-center gap-1 min-w-0"
              onMouseEnter={() => hasSubmenu && setOpenIndex(index)}
              onMouseLeave={() =>
                hasSubmenu && setOpenIndex(prev => (prev === index ? null : prev))
              }
            >
              {/* MAIN LINK */}
              <Link
                href={item.href}
                className={`
                  font-semibold text-lg uppercase transition-colors duration-200
                  ${isActive ? "text-red-600" : "text-gray-900"}
                  hover:text-red-600
                  flex items-center gap-1 min-w-0
                `}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.title}
                {hasSubmenu && (
                  <span
                    className={`
                      text-red-600 text-sm transform transition-transform duration-200
                      ${openIndex === index ? "rotate-180" : ""}
                    `}
                  >
                    ▼
                  </span>
                )}
              </Link>

              {/* DROPDOWN */}
              {hasSubmenu && (
                <div
                  className={`
                    absolute top-full left-0 z-50 bg-white rounded-lg shadow-xl min-w-[180px]
                    overflow-hidden py-2
                  `}
                  style={{
                    pointerEvents: openIndex === index ? "auto" : "none",
                    opacity: openIndex === index ? 1 : 0,
                    transform:
                      openIndex === index
                        ? "translateY(6px)"
                        : "translateY(-10px)",
                    transition: "opacity 250ms ease, transform 250ms ease",
                  }}
                >
                  <DropdownMenu
                    menuTitle={item.title}
            
                  
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default HeaderMenu;
