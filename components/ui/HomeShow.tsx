"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeContests = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Text + Button (Left) */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Johnny Junxions, we’re more than just a gas station—we’re a local hub for great food, friendly faces, and quick convenience. From our made-to-order pizzas and signature chicken tenders to grab-and-go favorites, every meal is crafted with care and served with a smile. Whether you’re fueling up your car or your appetite, Johnny Junxions is your go-to spot for convenience, flavor, and a welcoming community vibe.
            </p>
            <Link 
              href="/whatwedo" 
              className="inline-block mt-4 px-6 py-3 bg-[#57b0c7] text-white rounded-full font-semibold hover:bg-black transition"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Image (Right) */}
          <motion.div
            className="flex-1 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/gallery/owner.jpg" 
              alt="Daily Contests"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-64 lg:h-80"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default HomeContests;
