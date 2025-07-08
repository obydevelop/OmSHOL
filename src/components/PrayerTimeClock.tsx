"use client";

import React, { useEffect, useState } from "react";

export default function PrayerTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  return (
    <div className="text-center font-mono text-4xl text-white">
      {formatTime(time)}
    </div>
  );
}
