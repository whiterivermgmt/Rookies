"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { headerData } from "@/Constants/data";

const ComingSoonPage = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <Image
          src="/johnny/jlogo.png"
          alt="Johnny Junxions Logo"
          width={200}
          height={100}
          className="mx-auto"
        />
      </motion.div>

      {/* Coming Soon Message */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-black max-w-lg"
      >
        <h1 className="text-5xl font-bold mb-3">Coming Soon!</h1>
        <p className="text-lg mb-5">
          We’re updating our site to bring you the best quick serve meals and convenience experience at Johnny Junxions. Stay tuned!
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-yellow-300 text-red-800 font-bold hover:bg-yellow-400 transition"
        >
          Go to Home
        </Link>
      </motion.div>
    </main>
  );
};

export default ComingSoonPage;
