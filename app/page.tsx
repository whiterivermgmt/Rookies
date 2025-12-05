"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuGallery from "@/components/ui/MenuGallery";
import EventsBanner from "@/components/ui/EventsBanner";
import Calendar from "@/components/ui/Calender";
import Reviews from "@/components/ui/Reviews";
import SocialMediaHeader from "@/components/ui/SocialMediaHeader";
import HomeShow from "@/components/ui/HomeShow";
import Link from "next/link";

const featuredMenu = [
  {
    title: "Dine In At Johnny Junxions",
    description:
      "Enjoy freshly prepared meals right here at our gas station with plenty of seating. From signature pizzas to classic combos, every dish is made fresh from our own kitchen and ready to satisfy your cravings.",
    img: "/gallery/menu1.jpg",
    reverse: false,
  },
  {
    title: "Grab & Go!",
    description:
      "In a hurry? Johnny Junxions has you covered with quick, freshly made meals perfect for those on the run. Stop by, grab your favorites, and keep moving!",
    img: "/gallery/menu.jpg",
    reverse: true,
  },
];

const categories = [
  { name: "Signatures", img: "/gallery/gallery19.jpg" },
  { name: "Breakfast", img: "/gallery/gallery8.jpg" },
  { name: "Pizza", img: "/gallery/galery12.jpg" },
  { name: "Sandwiches", img: "/gallery/galery11.jpg" },
  { name: "Chicken Tenders", img: "/gallery/galery3.jpg" },
];

const HomePage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="bg-white px-4 py-12 flex flex-col items-center space-y-20">


      {/* Hero Section */}
      <section className="relative w-full  mt-6 h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/gallery/hero1.jpg"
          alt="Johnny Junxions Gas Station"
          fill
          className="object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          
        </div>
      </section>

      <HomeShow />

      {/* Featured Menu */}
      <section className="w-full max-w-5xl flex flex-col gap-16">
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
              whileHover={{ scale: 1.02 }}
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
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Menu Categories */}
<section className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
  {categories.map((cat, idx) => (
    <Link key={idx} href="/menu" className="w-32 h-32">
      <motion.div
        className="w-32 h-32 rounded-full overflow-hidden relative cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <Image src={cat.img} alt={cat.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
          {cat.name}
        </div>
      </motion.div>
    </Link>
  ))}
</section>


      {/* Lightbox for Featured Menu */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-3xl h-96 md:h-[500px]"
            >
              <Image
                src={selectedImg}
                alt="Menu Item"
                fill
                className="object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Calendar */}
      <section className="w-full max-w-6xl">
        <Calendar />
      </section>


      {/* Food Gallery */}
      <section className="w-full max-w-6xl">
        <MenuGallery />
      </section>
    </main>
  );
};

export default HomePage;
