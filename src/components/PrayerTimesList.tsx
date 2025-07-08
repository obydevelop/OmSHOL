"use client";

import React from "react";
import { Speaker } from "lucide-react";

interface PrayerTimesListProps {
  prayerTimes: Record<string, string>;
  currentPrayer: string;
  dateHijri: string;
  dateGregorian: string;
  location: string;
  timeNow: string;
}

const prayersOrder = ["Fajr", "Shuruq", "Dhuhr", "Asr", "Maghrib", "Isha"];

export default function PrayerTimesList({
  prayerTimes,
  currentPrayer,
  dateHijri,
  dateGregorian,
  location,
  timeNow,
}: PrayerTimesListProps) {
  return (
    <div
      className="relative w-full max-w-md mx-auto rounded-lg bg-black bg-opacity-80 p-6 text-white font-sans"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="flex justify-between mb-4 text-sm">
        <div>
          <div>{dateGregorian}</div>
          <div className="text-xs text-gray-300">{dateHijri}</div>
        </div>
        <div className="text-right">
          <div>{location}</div>
          <div className="text-xs">{timeNow}</div>
        </div>
      </div>
      <div className="space-y-3">
        {prayersOrder.map((prayer) => {
          const isCurrent = prayer.toLowerCase() === currentPrayer.toLowerCase();
          return (
            <div
              key={prayer}
              className={`flex items-center justify-between rounded-md px-4 py-2 ${
                isCurrent ? "bg-green-600 text-white" : ""
              }`}
            >
              <div className={isCurrent ? "text-green-200 font-semibold" : ""}>
                {prayer}
              </div>
              <div className="flex items-center space-x-2">
                <Speaker size={16} className={isCurrent ? "text-green-200" : "text-white"} />
                <span className={isCurrent ? "font-bold" : ""}>
                  {prayerTimes[prayer.toLowerCase()] || "--:--"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-sm text-gray-400 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-green-600"></div>
        <div>New updates 5.1.5 &#x21bb;</div>
      </div>
    </div>
  );
}
