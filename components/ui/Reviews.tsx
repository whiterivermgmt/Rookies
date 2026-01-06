import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const reviews = [
  { name: "William P.", text: "Super fun place. Wristband deal is really worth it, we spent several hours here and enjoyed all of it. Super friendly staff." },
  { name: "Thomas R.", text: "The staff was very friendly & helpful. The food was good. And there was lots of fun stuff to do." },
  { name: "Faith V.", text: "We had a great time at Ralphie’s Fun Center! Very fair pricing, lots of things to do! 2 toddlers (1&3) 4 adults lots of fun!" },
  { name: "Tina H.", text: "My first time ever playing laser tag! Ralphie’s is one of our boys favorite places to go. Usually Dad takes them, but they begged me to come along today & Ralphie’s didn’t disappoint! We had so much FUNNNN!" },
  { name: "Amanda G.", text: "This place was awesome. Wish we had gone earlier. There’s a skating rink, bowling alley, concessions, and a HUGE arcade. We had a total blast at this place. Too bad we were just visiting, because if we lived here we would most definitely be regulars." },
  { name: "James M.", text: "Great value, great people, and concessions were so affordable, we had so much fun that we are planning our next trip. It was worth the 70-minute drive." },
];

const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % reviews.length); // rotate 3 at a time
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="py-20 bg-gray-100 relative">
      <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
        What Our Customers Are Saying
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {visibleReviews.map((review) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow"
            >
              <p className="mb-4 text-gray-800 text-sm md:text-base">&quot;{review.text}&quot;</p>
              <span className="font-semibold text-gray-900 text-right mt-auto">{review.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === Math.floor(index / 3) ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsCarousel;
