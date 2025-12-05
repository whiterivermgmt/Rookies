"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuGallery from "@/components/ui/MenuGallery";

const featuredMenu = [
  {
    title: "Dine In At Johnny Junxions",
    description:
      "Enjoy freshly prepared meals in our own kitchen with plenty of seating. From signature pizzas to classic combos, every dish is made with care and ready to satisfy your cravings.",
    img: "/gallery/menu1.jpg",
    reverse: false,
  },
  {
    title: "Grab & Go!",
    description:
      "In a hurry? Johnny Junxions has you covered with quick, freshly made meals perfect for those on the run. Stop by, grab your favorites, and keep moving—without missing a beat.",
    img: "/gallery/menu.jpg",
    reverse: true,
  },
];

const categories = [
  { name: "Signatures", img: "/gallery/gallery19.jpg" },
  { name: "Breakfast", img: "/gallery/gallery8.jpg" },
  { name: "Pizza", img: "/gallery/galery12.jpg" },
  { name: "Sandwiches", img: "/gallery/galery11.jpg" },
  { name: "Ice Cream", img: "/gallery/galery3.jpg" },
];

const MenuPage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="bg-white pt-24 px-4 flex flex-col items-center">
      {/* ↑ pt-24 moves title down */}
      <h1 className="text-5xl font-bold mb-12 text-[#57b0c7] text-center">
        Our Menu
      </h1>

      {/* Featured Menu Items */}
      <div className="flex flex-col gap-16 w-full max-w-5xl">
        {featuredMenu.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              className="w-full md:w-1/2 relative h-64 md:h-96 flex justify-center cursor-pointer"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(87,176,199,0.6)" }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImg(item.img)}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-[#57b0c7]">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Categories */}
      <div className="w-full max-w-6xl mt-16 mb-16 grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="w-32 h-32 rounded-full overflow-hidden relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <Image src={cat.img} alt={cat.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg rounded-full">
              {cat.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Featured Images */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-3xl h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={selectedImg}
                alt="Menu Item"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 border-2 border-[#57b0c7] rounded-xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MenuGallery />
    </main>
  );
};

export default MenuPage;
