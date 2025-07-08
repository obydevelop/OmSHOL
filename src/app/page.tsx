"use client";

import React, { useEffect, useState } from "react";
import PrayerTimeSelector from "@/components/PrayerTimeSelector";
import PrayerTimesList from "@/components/PrayerTimesList";
import { fetchPrayerTimes } from "@/lib/prayerTimes";

const backgroundImageUrl = "https://makkah-madinah.accor.com/wp-content/uploads/2024/08/hajj-rituals-makkah-accorhotels.jpg";

function getCurrentPrayer(prayerTimes: Record<string, string>, currentTime: string) {
  const prayers = ["fajr", "shuruq", "dhuhr", "asr", "maghrib", "isha"];
  for (let i = 0; i < prayers.length; i++) {
    const prayer = prayers[i];
    if (prayerTimes[prayer]) {
      if (currentTime < prayerTimes[prayer]) {
        return prayer;
      }
    }
  }
  return "isha";
}

export default function Home() {
  const [location, setLocation] = useState("jakarta");
  const [source, setSource] = useState("aladhan");
  const [prayerTimes, setPrayerTimes] = useState<Record<string, string>>({});
  const [currentTime, setCurrentTime] = useState("");
  const [currentPrayer, setCurrentPrayer] = useState("fajr");

  useEffect(() => {
    async function loadPrayerTimes() {
      const times = await fetchPrayerTimes(location, source);
      if (times) {
        setPrayerTimes({
          fajr: times.fajr,
          shuruq: times.sunrise || "06:00",
          dhuhr: times.dhuhr,
          asr: times.asr,
          maghrib: times.maghrib,
          isha: times.isha,
        });
      }
    }
    loadPrayerTimes();
  }, [location, source]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setCurrentTime(timeStr);
      if (prayerTimes && Object.keys(prayerTimes).length > 0) {
        const current = getCurrentPrayer(prayerTimes, timeStr);
        setCurrentPrayer(current);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [prayerTimes]);

  const hijriDate = "22 Jumada al-ula, 1446";
  const gregorianDate = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  return (
    <main className="min-h-screen bg-black bg-cover bg-center flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 -z-10 bg-black/70"></div>
      <img
        src={backgroundImageUrl}
        alt="Ka'bah"
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
      />
      <PrayerTimesList
        prayerTimes={prayerTimes}
        currentPrayer={currentPrayer}
        dateHijri={hijriDate}
        dateGregorian={gregorianDate}
        location={location.charAt(0).toUpperCase() + location.slice(1)}
        timeNow={currentTime}
      />
      <div className="mt-6 flex space-x-6 text-white">
        <PrayerTimeSelector
          selectedLocation={location}
          selectedSource={source}
          onLocationChange={setLocation}
          onSourceChange={setSource}
        />
      </div>
    </main>
  );
}
