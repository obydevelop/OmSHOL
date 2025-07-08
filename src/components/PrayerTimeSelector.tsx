"use client";

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const locations = [
  { id: "jakarta", name: "Jakarta" },
  { id: "bandung", name: "Bandung" },
  { id: "surabaya", name: "Surabaya" },
  { id: "medan", name: "Medan" },
];

const sources = [
  { id: "aladhan", name: "Aladhan API" },
  { id: "muslimpro", name: "Muslim Pro" },
];

interface PrayerTimeSelectorProps {
  onLocationChange: (location: string) => void;
  onSourceChange: (source: string) => void;
  selectedLocation: string;
  selectedSource: string;
}

export default function PrayerTimeSelector({
  onLocationChange,
  onSourceChange,
  selectedLocation,
  selectedSource,
}: PrayerTimeSelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 text-white">
      <div>
        <label className="block mb-1 font-semibold">Pilih Lokasi</label>
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pilih lokasi" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc.id} value={loc.id}>
                {loc.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block mb-1 font-semibold">Sumber Waktu Sholat</label>
        <Select value={selectedSource} onValueChange={onSourceChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pilih sumber" />
          </SelectTrigger>
          <SelectContent>
            {sources.map((src) => (
              <SelectItem key={src.id} value={src.id}>
                {src.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
