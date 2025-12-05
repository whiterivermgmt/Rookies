"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeGallery from "@/components/ui/HomeGallery";

interface Event {
  date: string;
  title: string;
  description: string;
  type?: "pizza" | "combo" | "holiday" | "other";
}

// Sample events
const events: Event[] = [
  {
    date: "2025-12-10",
    title: "Pizza Special Day",
    description: "Get any pizza for $5 all day!",
    type: "pizza",
  },
  {
    date: "2025-12-15",
    title: "Chicken Tender Combo",
    description: "Special combo deals all day.",
    type: "combo",
  },
  {
    date: "2025-12-24",
    title: "Holiday Celebration",
    description: "Holiday treats and giveaways.",
    type: "holiday",
  },
  {
    date: "2026-01-01",
    title: "New Year Kickoff",
    description: "Celebrate the new year with free coffee.",
    type: "other",
  },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Event dot colors based on type
const getEventColor = (type?: string) => {
  switch (type) {
    case "pizza": return "bg-yellow-300";
    case "combo": return "bg-[#57b0c7]"; // teal for combo
    case "holiday": return "bg-green-400";
    default: return "bg-blue-200";
  }
};

const EventsPage = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const formattedDate = (day: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const todaysEvents = selectedDate ? events.filter(e => e.date === selectedDate) : [];

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  return (
    <main className="min-h-screen bg-white py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10 text-[#57b0c7]">Johnny Junxions Events</h1>

      {/* Calendar */}
      <div className="w-full max-w-3xl">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={prevMonth} 
            className="text-[#57b0c7] font-bold px-5 py-2 rounded-lg hover:bg-[#ccebf6] transition"
          >{"<"}</button>
          <h2 className="text-2xl font-semibold">{currentMonth.toLocaleString("default", { month: "long" })} {year}</h2>
          <button 
            onClick={nextMonth} 
            className="text-[#57b0c7] font-bold px-5 py-2 rounded-lg hover:bg-[#ccebf6] transition"
          >{">"}</button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center mb-2 font-semibold text-gray-700 text-lg">
          {DAYS.map(day => <div key={day}>{day}</div>)}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {calendarDays.map((day, idx) => {
            if (!day) return <div key={idx} className="py-6"></div>;
            const dayDate = formattedDate(day);
            const dayEvents = events.filter(e => e.date === dayDate);
            const isToday = formattedDate(today.getDate()) === dayDate;
            const isSelected = selectedDate === dayDate;

            return (
              <motion.div
                key={idx}
                onClick={() => setSelectedDate(dayDate)}
                whileHover={{ scale: 1.05 }}
                className={`py-6 flex flex-col items-center justify-center cursor-pointer rounded-lg transition
                  ${isSelected ? "bg-[#57b0c7] text-white font-bold" : "text-gray-800"}
                  ${isToday ? "border-2 border-[#57b0c7]" : ""}`}
              >
                <span>{day}</span>
                <div className="flex flex-col mt-1 gap-1">
                  {dayEvents.map((e, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${getEventColor(e.type)}`} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Details */}
      <div className="w-full max-w-3xl mt-8">
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              key={selectedDate}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#e0f7fb] border border-[#57b0c7] rounded-2xl p-6 shadow-md mb-8"
            >
              {todaysEvents.length > 0 ? todaysEvents.map((event, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <h3 className="text-2xl font-bold text-[#57b0c7] mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              )) : (
                <p className="text-gray-600 text-center">No events scheduled for this day.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <HomeGallery />
    </main>
  );
};

export default EventsPage;
