"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBirthdayCake, FaPuzzlePiece, FaUsers } from "react-icons/fa";
import Reviews from "@/components/ui/Reviews";

const features = [
  { title: "Arcade Games", description: "Classic and modern arcade games for all ages.", image: "/gallery/arcade.jpg" },
  { title: "Restaurant & Bar", description: "Enjoy delicious meals and snacks during your visit.", image: "/gallery/bar.jpg" },
  { title: "Bowling", description: "Family-friendly lanes with party packages.", image: "/gallery/bowling.jpg" },
  { title: "Party Packages", description: "Host unforgettable birthday parties and events.", image: "/gallery/party.jpg" },
];

export const activities = [
  {
    title: "Restaurant & Bar",
    description: "Enjoy delicious meals and snacks during your visit.",
    image: "/gallery/bar.jpg",
    href: "/activities",
  },
  {
    title: "Arcade",
    description: "Chase high scores and prizes! Endless fun awaits.",
    image: "/gallery/arcade.jpg",
    href: "/activities",
  },
  {
    title: "Sports Simulator",
    description: "Test your skills with our interactive sports simulators.",
    image: "/gallery/golf.jpg",
    href: "/activities",
  },
  {
    title: "Axe Throwing",
    description: "Challenge your friends to some fun and safe axe throwing.",
    image: "/gallery/axe.jpg",
    href: "/activities",
  },
  {
    title: "Darts",
    description: "Classic dart games for casual fun and competition.",
    image: "/gallery/party.jpg",
    href: "/activities",
  },
  {
    title: "Party Rooms",
    description: "Host your birthday or event in one of our fun party rooms.",
    image: "/gallery/party.jpg",
    href: "/activities",
  },
];

const reviews = [
  { name: "William P.", text: "Super fun place. Wristband deal is really worth it, we spent several hours here and enjoyed all of it. Super friendly staff." },
  { name: "Thomas R.", text: "The staff was very friendly & helpful. The food was good. And there was lots of fun stuff to do." },
  { name: "Faith V.", text: "We had a great time at Ralphie’s Fun Center! Very fair pricing, lots of things to do! 2 toddlers (1&3) 4 adults lots of fun!" },
  { name: "Tina H.", text: "My first time ever playing laser tag! Ralphie’s is one of our boys favorite places to go. Usually Dad takes them, but they begged me to come along today & Ralphie’s didn’t disappoint! We had so much FUNNNN!" },
  { name: "Amanda G.", text: "This place was awesome. Wish we had gone earlier. There’s a skating rink, bowling alley, concessions, and a HUGE arcade. We had a total blast at this place. Too bad we were just visiting, because if we lived here we would most definitely be regulars." },
  { name: "James M.", text: "Great value, great people, and concessions were so affordable, we had so much fun that we are planning our next trip. It was worth the 70-minute drive." },
];

const HomePage = () => {
  return (
    <main className="relative overflow-hidden">

      {/* Hero Section */}
<section
  className="relative text-white h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/gallery/hero.jpg')" }}
>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-6"
  >
    <Image src="/johnny/rookie1.png" alt="Rookies Logo" width={250} height={140} />
  </motion.div>

  <motion.h1
    className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    Fun. Games. Parties. Memories.
  </motion.h1>

  <motion.p
    className="text-lg md:text-xl mb-6 max-w-xl drop-shadow"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    Rookies is your ultimate entertainment destination with games, parties, and family fun for everyone!
  </motion.p>

  <Link
    href="/party-packages"
    className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform"
  >
    Book Your Party
  </Link>
</section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div key={feature.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform" whileHover={{ scale: 1.05 }}>
                <Image src={feature.image} alt={feature.title} width={120} height={120} className="mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Party Packages CTA with Parallax */}
<section
  className="relative py-20 text-white text-center overflow-hidden"
  style={{
    backgroundImage: "url('/johnny/backg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // key for parallax effect
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/20 bg-opacity-50"></div>

  <div className="relative max-w-4xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
      Host Your Next Party at Rookies!
    </h2>
    <p className="mb-6 text-lg md:text-xl drop-shadow">
      Birthday parties, corporate events, or just a fun day with friends — we make it unforgettable.
    </p>
    <Link
      href="/party-packages"
      className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform"
    >
      View Party Packages
    </Link>
  </div>
</section>



      {/* Spring Hours Section */}
<section className="py-16 bg-gray-50 text-gray-900 max-w-6xl mx-auto px-6 rounded-2xl shadow-inner">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900">
    Spring Hours
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
    {[
      { day: "Monday-Thursday", hours: "4:00PM - 9:00PM" },
      { day: "Friday", hours: "4:00PM - 11:00PM" },
      { day: "Saturday", hours: "11:00AM - 11:00PM" },
      { day: "Sunday", hours: "1:00PM - 7:00PM" },
    ].map((item) => (
      <div
        key={item.day}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <span className="font-semibold text-lg">{item.day}</span>
        <span className="text-gray-700 mt-1">{item.hours}</span>
      </div>
    ))}
  </div>

  <div className="text-center">
    <Link
      href="/daily-specials"
      className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-md hover:bg-red-700 hover:scale-105 transition transform"
    >
      View Our Daily Specials!
    </Link>
  </div>
</section>



      {/* Gift Cards Section */}
      <section className="py-16 bg-white text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Rookies Gift Cards</h2>
        <p className="text-gray-700 mb-6">
          The perfect gift for any occasion! Our gift cards can be used for arcade games, bowling, laser tag, mini-golf, roller skating, and more. Purchase in-store or order online with options from $10 to $500.
        </p>
        <Image src="/gallery/giftcard.png" alt="Rookies Gift Card" width={768} height={494} className="mx-auto rounded-xl mb-4" />
        <Link href="/gift-cards" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-md hover:bg-red-700 hover:scale-105 transition transform">
          Click to Buy a Gift Card
        </Link>
      </section>

      {/* Activities Section with Parallax Background */}
<section
  className="relative py-16 text-white overflow-hidden"
  style={{
    backgroundImage: "url('/johnny/backg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // parallax effect
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white drop-shadow-lg">
      Activities
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {activities.map((act) => (
        <motion.div
          key={act.title}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={act.image}
            alt={act.title}
            width={120}
            height={120}
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-900">{act.title}</h3>
          <p className="text-gray-600">{act.description}</p>
          <Link
            href={`/activities/${act.title.toLowerCase().replace(/\s/g, "-")}`}
            className="mt-3 text-red-600 font-semibold hover:underline"
          >
            Read More
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* --- Fixed Bottom Sections --- */}

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-12 text-center text-gray-900">Why Choose Rookies's?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-col items-center">
            <FaUsers className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Family-Friendly Entertainment</h3>
            <p className="text-gray-700">We offer a diverse range of activities suitable for all ages! Families and friends can spend quality time together, knowing everyone will have a blast!</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-col items-center">
            <FaBirthdayCake className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Party Hosting & Event Space</h3>
            <p className="text-gray-700">Hosting a special celebration or event? Ralphie’s Fun Center provides party rooms for birthdays, corporate gatherings, and more. Create a memorable, stress-free event!</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-col items-center">
            <FaPuzzlePiece className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">All-In-One Entertainment</h3>
            <p className="text-gray-700">Ralphie’s Fun Center combines entertainment, dining, and events in one location. Enjoy a full day of fun without traveling between venues!</p>
          </div>
        </div>

        {/* Customer Reviews */}
        <div >
         <Reviews/ >
        </div>

        {/* Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-extrabold mb-4 text-center text-gray-900">Find Us Here</h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.491212741151!2d-85.91438778442188!3d36.94697298007256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8867c5f88e0a1b2f%3A0x8eae78f7c0d1f7a2!2sRalphie%27s%20Fun%20Center!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Contact Us</h3>
          <form className="bg-white p-8 rounded-2xl shadow-md max-w-2xl mx-auto grid grid-cols-1 gap-6">
            <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <textarea placeholder="Message" rows={5} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
            <button type="submit" className="bg-red-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-red-700 hover:scale-105 transition transform">Send Message</button>
          </form>
        </section>
      </section>

    </main>
  );
};

export default HomePage;
