"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ComingSoonPage = () => {
  // Colors for floating shapes
  const colors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA"];

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center bg-gray-100">
      {/* Floating Neon Shapes */}
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            width: 96,
            height: 96,
            backgroundColor: color,
            top: `${15 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0], // float up and down
            x: [0, 20, 0],  // slight horizontal drift
          }}
          transition={{
            duration: 5 + i, // vary speeds
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 z-10"
      >
        <Image
          src="/johnny/rookie1.png" // Update path to Rookies logo
          alt="Rookies Entertainment Logo"
          width={220}
          height={120}
          className="mx-auto"
        />
      </motion.div>

      {/* Coming Soon Box */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md z-10"
      >
        <h1 className="text-5xl font-extrabold mb-3 text-black">Coming Soon!</h1>
        <p className="text-lg mb-5 text-black">
          Rookies is almost ready to open! Get ready for the ultimate entertainment experience with parties, games, and family fun. Stay tuned!
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-md"
        >
          Go to Home
        </Link>
      </motion.div>
    </main>
  );
};

export default ComingSoonPage;
