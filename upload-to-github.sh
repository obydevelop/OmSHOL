#!/bin/bash

echo "🚀 Script Upload Aplikasi Jadwal Sholat ke GitHub"
echo "=================================================="

# Warna untuk output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Langkah-langkah yang akan dilakukan:${NC}"
echo "1. Inisialisasi Git repository"
echo "2. Menambahkan semua file"
echo "3. Commit pertama"
echo "4. Setup remote repository"
echo "5. Push ke GitHub"
echo ""

# Cek apakah git sudah terinstall
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git tidak terinstall. Silakan install Git terlebih dahulu.${NC}"
    exit 1
fi

echo -e "${YELLOW}⚠️  PENTING: Pastikan Anda sudah membuat repository di GitHub terlebih dahulu!${NC}"
echo ""

# Input repository URL
read -p "🔗 Masukkan URL repository GitHub (contoh: https://github.com/username/repo.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo -e "${RED}❌ URL repository tidak boleh kosong!${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}🔄 Memulai proses upload...${NC}"

# 1. Inisialisasi Git (jika belum ada)
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📁 Inisialisasi Git repository...${NC}"
    git init
    echo -e "${GREEN}✅ Git repository berhasil diinisialisasi${NC}"
else
    echo -e "${GREEN}✅ Git repository sudah ada${NC}"
fi

# 2. Menambahkan semua file
echo -e "${YELLOW}📦 Menambahkan semua file...${NC}"
git add .

# 3. Commit
echo -e "${YELLOW}💾 Membuat commit...${NC}"
git commit -m "🎉 Initial commit - Aplikasi Jadwal Sholat

✨ Fitur:
- Waktu sholat real-time untuk 4 kota Indonesia
- Interface modern dengan background Ka'bah
- Dark theme yang elegan
- Responsive design untuk mobile
- GitHub Actions untuk auto-build APK

🛠️ Tech Stack:
- Next.js 15 + TypeScript
- Tailwind CSS + Shadcn/ui
- Capacitor untuk mobile wrapper
- Aladhan API untuk data sholat

📱 APK akan otomatis di-build oleh GitHub Actions"

# 4. Setup remote
echo -e "${YELLOW}🔗 Menambahkan remote repository...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

# 5. Push ke GitHub
echo -e "${YELLOW}🚀 Uploading ke GitHub...${NC}"
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}🎉 BERHASIL! Project berhasil diupload ke GitHub!${NC}"
    echo ""
    echo -e "${BLUE}📋 Langkah selanjutnya:${NC}"
    echo "1. 🔍 Buka repository di GitHub"
    echo "2. 🏃 Tunggu GitHub Actions selesai build (5-10 menit)"
    echo "3. 📥 Download APK dari tab 'Releases'"
    echo "4. 📱 Install APK di perangkat Android"
    echo ""
    echo -e "${GREEN}🔗 Repository URL: $REPO_URL${NC}"
    echo -e "${GREEN}📱 APK akan tersedia di: ${REPO_URL//.git/}/releases${NC}"
else
    echo ""
    echo -e "${RED}❌ Upload gagal! Periksa:${NC}"
    echo "- URL repository sudah benar?"
    echo "- Repository sudah dibuat di GitHub?"
    echo "- Koneksi internet stabil?"
    echo ""
    echo -e "${YELLOW}💡 Coba upload manual melalui GitHub web interface${NC}"
fi
