"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { headerData } from "@/Constants/data";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100063690004065",
      icon: <SiFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.google.com/search?q=johnny+junctions",
      icon: <SiGoogle />,
      name: "Google Reviews",
    },
  ];

  return (
    <footer
      className="
        text-white mt-auto relative overflow-hidden
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/johnny/footer.png')", // ⭐ set BACKGROUND image
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      {/* subtle dark overlay to help text pop */}

      <Container>
        <div className="relative z-10 max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-center">

          {/* Logo + Description + Social */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="cursor-pointer">
                <Image
                  src="/johnny/jlogo.png"
                  alt="Johnny Logo"
                  width={160}
                  height={80}
                  className="object-contain mx-auto"
                />
              </motion.div>
            </Link>
            <p className="text-base text-center">
              Convenience store with a quick serve restaurant offering made-to-order meals. This is not gas station food!
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2 justify-center">
              {socialLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 flex items-center justify-center rounded-full 
                      bg-white text-[#57b0c7] 
                      hover:bg-[#57b0c7] hover:text-white transition
                    "
                  >
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b-2 border-[#57b0c7] inline-block pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base flex flex-col items-center">
              {headerData.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`transition-all font-medium ${
                      pathname === link.href
                        ? "text-[#57b0c7] font-semibold"
                        : "text-white hover:text-[#57b0c7]"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Come Visit Us */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b-2 border-[#57b0c7] inline-block pb-2">
              Come Visit Us
            </h3>
            <div className="flex flex-col gap-2 items-center">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#57b0c7]" /> Judah
              </h4>
              <p className="text-center">385 Hillcrest Way, Bedford, Indiana 47421</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.123456789!2d-86.4923456!3d38.8612345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886df1234567890%3A0xabcdef1234567890!2s385+Hillcrest+Way%2C+Bedford%2C+IN+47421!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                className="rounded-md border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b-2 border-[#57b0c7] inline-block pb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2 items-center">
              <a href="tel:+18122770436" className="flex items-center gap-2 hover:text-[#57b0c7] transition">
                <Phone className="w-4 h-4 text-[#57b0c7]" /> (812)-277-0436
              </a>
              <a href="mailto:steve@johnnyjunxions.com" className="flex items-center gap-2 hover:text-[#57b0c7] transition">
                <Mail className="w-4 h-4 text-[#57b0c7]" /> steve@johnnyjunxions.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 border-t border-[#57b0c7] mt-8 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-white">
          <p className="mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Johnny Junxions. All Rights Reserved
          </p>
          <p className="text-center md:text-right">
            Designed by{" "}
            <Link href="https://whiteriver.media" target="_blank" className="font-medium hover:text-[#57b0c7]">
              White River Media
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
