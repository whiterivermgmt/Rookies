"use client";

import React from "react";
import { SiFacebook } from "react-icons/si";
import { motion } from "framer-motion";

const locations = [
  {
    address: "385 Hillcrest Way, Bedford, IN 47421",
    query: "385 Hillcrest Way, Bedford, IN 47421",
  },
];

const ContactPage = () => {
  const openMap = (query: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#f6f6f6] flex flex-col items-center justify-start pt-24 px-4"> 
      {/* ↑ Added pt-24 to move title down so it’s not overlapped by logo */}

      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#57b0c7]">Get In Touch!</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Johnny Junxions – Your local convenience store & quick-serve restaurant. Reach out for questions, catering, or just to say hello!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-[#57b0c7]">Contact Form</h2>
        <p className="text-gray-600 mb-4">
          Send us a message for questions, catering requests, or general inquiries. We'll get back to you quickly!
        </p>

        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#57b0c7] transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#57b0c7] transition"
        />
        <input
          type="text"
          placeholder="Subject"
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#57b0c7] transition"
        />
        <textarea
          placeholder="Your Message..."
          rows={5}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#57b0c7] transition resize-none"
        />

        <div className="flex gap-4 mt-2 justify-center">
          <a
            href="https://www.facebook.com/johnnyjunxions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#57b0c7] hover:text-yellow-300 text-2xl transition"
          >
            <SiFacebook />
          </a>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-3 rounded-xl bg-[#57b0c7] text-white font-bold hover:bg-blue-700 hover:scale-105 transition transform shadow-md"
        >
          Send Message
        </button>
      </motion.form>

      {/* Contact Methods */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Location */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-location-dot text-3xl text-[#57b0c7] mb-2"></i>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <div className="text-gray-600 text-center space-y-1">
            {locations.map((loc, idx) => (
              <p
                key={idx}
                onClick={() => openMap(loc.query)}
                className="cursor-pointer hover:text-[#57b0c7] transition"
              >
                {loc.address}
              </p>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-envelope text-3xl text-[#57b0c7] mb-2"></i>
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <a
            href="mailto:info@johnnyjunxions.com"
            className="text-gray-600 hover:text-[#57b0c7] transition"
          >
            steve@johnnyjunxions.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-phone text-3xl text-[#57b0c7] mb-2"></i>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">
            <a href="tel:+18122770436" className="hover:text-[#57b0c7] transition">
              +1 812-277-0436
            </a>
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactPage;
