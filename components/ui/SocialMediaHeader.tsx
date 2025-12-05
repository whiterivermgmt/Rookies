"use client";

import React from "react";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";

const SocialMediaHeader = () => {
  const socials = [
    {
      icon: <SiFacebook size={18} />,
      href: "https://www.facebook.com/profile.php?id=100063690004065",
      label: "Facebook",
    },
    {
      icon: <SiGoogle size={18} />,
      href: "https://www.google.com/search?sca_esv=9c3862cfc17cffc5&sxsrf=AE3TifMa8xb2_CI0uYt4QcGNRTgJk6Omcg:1764946093391&q=johnny+junctions&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8szS_kfyWLZmGKDiOKotrhr4CC9dguth3_WrJZHOzfJkwNnzpR653fN5y7hM9zwprjrTitFENJKxqX-22jO1jymUOATWA&sa=X&sqi=2&ved=2ahUKEwiZ2MbH2KaRAxUvATQIHYHhG_wQrrQLegQIHRAA&biw=1920&bih=919&dpr=1",
      label: "Google Reviews",
    },
  
  ];

  return (
    <div className="w-full z-50 backdrop-blur-md">
      <div className="w-full bg-[#57b0c7] shadow-md">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 px-6 py-2 text-white">
          
          {/* Left Side: Schedule + Phone */}
          <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 font-semibold text-left">
            <span>Order Ahead!</span>
            <a
              href="tel:+18122770436"
              className="font-bold underline hover:text-gray-200 transition-colors duration-200"
            >
               (812)-277-0436
            </a>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-3 items-center">
            {socials.map((social, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors cursor-pointer p-1 rounded-full"
                >
                  {social.icon}
                </a>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
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
