#!/bin/bash

echo "🚀 Memulai proses build APK untuk Aplikasi Jadwal Sholat..."

# Step 1: Build Next.js app
echo "📦 Building Next.js application..."
npm run export

if [ $? -ne 0 ]; then
    echo "❌ Error: Next.js build gagal!"
    exit 1
fi

# Step 2: Sync dengan Capacitor
echo "🔄 Syncing dengan Capacitor Android..."
npx cap sync android

if [ $? -ne 0 ]; then
    echo "❌ Error: Capacitor sync gagal!"
    exit 1
fi

# Step 3: Buka Android Studio
echo "📱 Membuka Android Studio..."
echo "Selanjutnya:"
echo "1. Tunggu Android Studio selesai loading"
echo "2. Build → Generate Signed Bundle / APK"
echo "3. Pilih APK → Create keystore baru"
echo "4. Build release APK"

npx cap open android

echo "✅ Proses persiapan selesai!"
echo "APK akan tersimpan di: android/app/build/outputs/apk/release/"
