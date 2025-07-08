# 📤 CARA UPLOAD PROJECT KE GITHUB REPOSITORY

## 🎯 Langkah-langkah Upload ke GitHub:

### OPSI 1: Menggunakan GitHub Web Interface (MUDAH)

#### 1. Buat Repository Baru di GitHub
1. Buka https://github.com
2. Klik tombol **"New"** atau **"+"** → **"New repository"**
3. Isi nama repository: `aplikasi-jadwal-sholat`
4. Pilih **Public** (agar GitHub Actions gratis)
5. Centang **"Add a README file"** (akan diganti dengan README.md kita)
6. Klik **"Create repository"**

#### 2. Upload Files
1. Di halaman repository yang baru dibuat, klik **"uploading an existing file"**
2. **Drag & drop** atau **choose files** untuk upload semua file berikut:

**📁 File Utama yang WAJIB diupload:**
```
├── src/                     # Folder lengkap dengan semua isinya
├── android/                 # Folder Android project lengkap
├── public/                  # Folder assets
├── .github/                 # Folder GitHub Actions
├── package.json
├── package-lock.json
├── next.config.ts
├── capacitor.config.ts
├── tsconfig.json
├── tailwind.config.js (jika ada)
├── postcss.config.mjs
├── eslint.config.mjs
├── components.json
├── README.md
├── .gitignore
├── build-apk.sh
└── semua file .md (dokumentasi)
```

#### 3. Commit Files
1. Scroll ke bawah
2. Isi commit message: `Initial commit - Aplikasi Jadwal Sholat`
3. Klik **"Commit changes"**

### OPSI 2: Menggunakan Git Command Line

```bash
# 1. Inisialisasi git di folder project
git init

# 2. Tambahkan remote repository
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 3. Tambahkan semua file
git add .

# 4. Commit
git commit -m "Initial commit - Aplikasi Jadwal Sholat"

# 5. Push ke GitHub
git branch -M main
git push -u origin main
```

## 🚀 Setelah Upload Selesai:

### 1. GitHub Actions Akan Otomatis Berjalan
- Buka tab **"Actions"** di repository
- Lihat progress build APK
- Tunggu sampai selesai (biasanya 5-10 menit)

### 2. Download APK
- Setelah build selesai, buka tab **"Releases"**
- Download file APK yang sudah di-build otomatis

### 3. Install APK
- Transfer file APK ke perangkat Android
- Enable **"Install from unknown sources"** di settings
- Install aplikasi

## ⚠️ PENTING - File yang WAJIB ada:

✅ **Folder `src/`** - Source code Next.js
✅ **Folder `android/`** - Android native project  
✅ **Folder `public/`** - Assets dan manifest
✅ **Folder `.github/workflows/`** - GitHub Actions
✅ **`package.json`** - Dependencies
✅ **`capacitor.config.ts`** - Konfigurasi Capacitor
✅ **`next.config.ts`** - Konfigurasi Next.js

## 🔧 Troubleshooting:

### Jika GitHub Actions Gagal:
1. Check tab "Actions" untuk error message
2. Pastikan semua file sudah terupload
3. Pastikan `package.json` dan `capacitor.config.ts` ada

### Jika APK Tidak Muncul di Releases:
1. Tunggu sampai GitHub Actions selesai
2. Refresh halaman Releases
3. Check tab Actions untuk memastikan build berhasil

## 🎊 Hasil Akhir:

Setelah upload selesai, Anda akan mendapatkan:
- ✅ Repository GitHub dengan semua source code
- ✅ GitHub Actions yang otomatis build APK
- ✅ File APK siap download dari Releases
- ✅ Dokumentasi lengkap di README.md

---

**🚀 Selamat! Aplikasi Jadwal Sholat Anda siap di-share dan di-download sebagai APK!**
