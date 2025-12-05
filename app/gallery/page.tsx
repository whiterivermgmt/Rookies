"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

const galleryImages = [
  "/gallery/galery1.jpg",
  "/gallery/galery2.jpg",
  "/gallery/galery3.jpg",
  "/gallery/galery4.jpg",
  "/gallery/galery5.jpg",
  "/gallery/galery6.jpg",
  "/gallery/galery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
  "/gallery/galery11.jpg",
  "/gallery/galery12.jpg",
  "/gallery/gallery13.jpg",
  "/gallery/gallery14.jpg",
  "/gallery/gallery15.jpg",
  "/gallery/gallery16.jpg",
  "/gallery/gallery17.jpg",
  "/gallery/gallery18.jpg",
  "/gallery/gallery19.jpg",
  "/gallery/gallery20.jpg",
];

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24 px-4 flex flex-col items-center">
      {/* ↑ added pt-24 to move title down */}
      <h1 className="text-4xl font-bold mb-8 text-[#57b0c7]">Johnny Junxions Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer relative overflow-hidden rounded-xl shadow-md border-2 border-transparent hover:border-[#57b0c7] transition"
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-[#57b0c7] text-4xl hover:text-white transition"
              onClick={closeLightbox}
            >
              <IoMdClose />
            </button>

            <button
              className="absolute left-6 text-[#57b0c7] text-4xl hover:text-white transition"
              onClick={prevImage}
            >
              <IoIosArrowBack />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-[90%] max-h-[80%]"
            >
              <Image
                src={galleryImages[lightboxIndex]}
                alt={`Gallery Image ${lightboxIndex + 1}`}
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
            </motion.div>

            <button
              className="absolute right-6 text-[#57b0c7] text-4xl hover:text-white transition"
              onClick={nextImage}
            >
              <IoIosArrowForward />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;
