# 📱 Aplikasi Jadwal Sholat - Android APK

![Build Status](https://github.com/username/repo/workflows/Build%20Android%20APK/badge.svg)

Aplikasi jadwal sholat modern dengan interface yang elegan dan fitur lengkap untuk umat Muslim di Indonesia.

## 🎯 Fitur Utama

- 🕌 **Waktu Sholat Real-time** - Menampilkan waktu sholat yang akurat
- 📍 **4 Kota Indonesia** - Jakarta, Bandung, Surabaya, Medan
- 🌙 **Dark Theme** - Interface gelap dengan background Ka'bah yang indah
- 📱 **Mobile Responsive** - Optimized untuk semua ukuran layar
- 🔄 **Auto Refresh** - Waktu sholat terupdate otomatis
- 🌐 **API Integration** - Menggunakan Aladhan API untuk data akurat

## 📥 Download APK

### Cara 1: Download dari GitHub Releases (OTOMATIS)
1. Klik tab **[Releases](../../releases)** di repository ini
2. Download file APK terbaru
3. Install di perangkat Android Anda

### Cara 2: Build Sendiri
```bash
# Clone repository
git clone https://github.com/username/repo.git
cd repo

# Install dependencies
npm install --legacy-peer-deps

# Build APK
npm run android:sync
cd android
./gradlew assembleRelease
```

APK akan tersimpan di: `android/app/build/outputs/apk/release/`

## 🚀 Cara Setup GitHub Actions (Untuk Build Otomatis)

1. **Fork repository ini**
2. **Upload ke GitHub repository Anda**
3. **GitHub Actions akan otomatis build APK**
4. **Download dari tab Releases**

### Setup Signing (Opsional untuk Release)
Untuk APK yang signed, tambahkan secrets berikut di repository settings:
- `SIGNING_KEY` - Base64 encoded keystore
- `ALIAS` - Keystore alias
- `KEY_STORE_PASSWORD` - Keystore password
- `KEY_PASSWORD` - Key password

## 🛠️ Teknologi yang Digunakan

- **Frontend:** Next.js 15 + TypeScript
- **Styling:** Tailwind CSS + Shadcn/ui
- **Mobile:** Capacitor
- **API:** Aladhan Prayer Times API
- **Build:** GitHub Actions

## 📱 Screenshot

![App Screenshot](https://via.placeholder.com/300x600/000000/FFFFFF?text=Aplikasi+Jadwal+Sholat)

## 🔧 Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Sync with Android
npm run android:sync

# Open Android Studio
npx cap open android
```

## 📂 Struktur Project

```
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React Components
│   └── lib/                 # Utilities & API
├── android/                 # Android Native Project
├── public/                  # Static Assets
├── .github/workflows/       # GitHub Actions
└── capacitor.config.ts      # Capacitor Configuration
```

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak

- Email: tid.official@gmail.com
- GitHub: [@obydevelop](https://github.com/yourusername)

---

**⭐ Jangan lupa beri star jika project ini bermanfaat!**
