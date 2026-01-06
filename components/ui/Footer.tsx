"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { headerData } from "@/Constants/data";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const socialLinks = [
    {
      href: "https://www.facebook.com/RookiesBedford",
      icon: <SiFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.google.com",
      icon: <SiGoogle />,
      name: "Google",
    },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d43038] via-[#943338] to-[#bd1616]" />
      <div  />

      <Container>
        <div className="relative z-10 max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-4 gap-14 text-center">

          {/* Logo + Description */}
          <div className="flex flex-col items-center gap-5">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Image
                  src="/johnny/rookie1.png"
                  alt="Rookies Logo"
                  width={200}
                  height={100}
                  className="object-contain mx-auto"
                />
              </motion.div>
            </Link>

            <p className="text-base leading-relaxed max-w-xs">
              Rookies is your local stop for great food, friendly service,
              and a welcoming atmosphere. Come for the food, stay for the fun.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#7a0f14] hover:bg-[#7a0f14] hover:text-white transition"
                >
                  {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 uppercase border-b-2 border-white/30 inline-block pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base">
              {headerData.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`transition-all ${
                      pathname === link.href
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-xl mb-6 uppercase border-b-2 border-white/30 inline-block pb-2">
              Come Visit Us
            </h3>

            <p className="flex items-center gap-2 font-semibold">
              <MapPin className="w-5 h-5 text-white" />
              Bedford, IN
            </p>

            <p className="text-sm max-w-xs">
              2929 Great Escape Dr<br />
              Bedford, IN, United States
            </p>

            <iframe
              src="https://www.google.com/maps?q=2929+Great+Escape+Dr,+Bedford,+IN&output=embed"
              width="100%"
              height="180"
              className="rounded-lg border-0 mt-2"
              loading="lazy"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-xl mb-6 uppercase border-b-2 border-white/30 inline-block pb-2">
              Contact
            </h3>

            <a
              href="mailto:rookiesbedford@att.net"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
              rookiesbedford@att.net
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
          <p>© {new Date().getFullYear()} Rookies. All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <Link
              href="https://whiteriver.media"
              target="_blank"
              className="hover:text-white font-medium"
            >
              White River Media
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
