export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

const locations: Record<string, Location> = {
  jakarta: { city: "Jakarta", country: "Indonesia", latitude: -6.2088, longitude: 106.8456 },
  bandung: { city: "Bandung", country: "Indonesia", latitude: -6.9175, longitude: 107.6191 },
  surabaya: { city: "Surabaya", country: "Indonesia", latitude: -7.2575, longitude: 112.7521 },
  medan: { city: "Medan", country: "Indonesia", latitude: 3.5952, longitude: 98.6722 },
};

export async function fetchPrayerTimes(locationId: string, source: string): Promise<PrayerTimes | null> {
  const location = locations[locationId];
  if (!location) return null;

  if (source === "aladhan") {
    // Use Aladhan API for prayer times
    const url = `https://api.aladhan.com/v1/timings?latitude=${location.latitude}&longitude=${location.longitude}&method=2`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.code === 200) {
        const timings = data.data.timings;
        return {
          fajr: timings.Fajr,
          sunrise: timings.Sunrise,
          dhuhr: timings.Dhuhr,
          asr: timings.Asr,
          maghrib: timings.Maghrib,
          isha: timings.Isha,
        };
      }
    } catch (error) {
      console.error("Failed to fetch prayer times from Aladhan API", error);
    }
  } else if (source === "muslimpro") {
    // Placeholder for Muslim Pro API or other source
    // For now, return null or mock data
    return null;
  }

  return null;
}
