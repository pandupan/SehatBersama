# SehatBersama 🏥

> **Aplikasi kesehatan digital — Informasi kesehatan, kalkulator, forum komunitas, dan layanan konsultasi**

**SehatBersama** adalah platform kesehatan digital berbasis web yang menyediakan berbagai informasi kesehatan, kalkulator kesehatan, forum diskusi komunitas, dan layanan konsultasi. Dibangun dengan **Next.js 14** dan **Firebase** untuk otentikasi serta penyimpanan data.

---

## ✨ Fitur Utama

### 🏠 Landing Page
- Hero section dengan ajakan bergabung
- Carousel artikel kesehatan terkini
- Informasi fitur-fitur utama

### 📚 Informasi Kesehatan
- **Gizi & Suplemen** — Panduan nutrisi dan suplemen
- **Hidup Sehat** — Tips pola hidup bersih dan sehat (PHBS)
- **Kehamilan** — Informasi seputar kehamilan
- **Kesehatan Mental** — Edukasi kesehatan mental
- **Nutrisi & Diet** — Panduan diet seimbang
- **Penyakit** — Informasi berbagai penyakit
- **Pelayanan Kesehatan** — Informasi fasilitas kesehatan
- **Institusi Pendidikan** — Kesehatan di lingkungan pendidikan
- **Rumah Tangga, Tempat Kerja, Tempat Umum**

### 🧮 Kalkulator Kesehatan
- **Kalkulator BMR** — Hitung kebutuhan kalori basal
- **Kalkulator IBM** — Indeks Massa Tubuh (BMI)
- **Kalkulator Asupan Air** — Kebutuhan air harian

### 👥 Forum Komunitas
- Diskusi antar pengguna
- Berbagi pengalaman dan informasi kesehatan

### 👨‍⚕️ Layanan Konsultasi
- Jadwalkan konsultasi dengan tenaga kesehatan
- Sistem autentikasi (login/register) dengan NextAuth

### 🔐 Autentikasi
- Login & Register
- Firebase Authentication
- Middleware proteksi rute

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Bahasa:** TypeScript
- **UI:** Tailwind CSS 3, Headless UI, Radix UI
- **Autentikasi:** NextAuth.js + Firebase Auth
- **Database:** Firebase (Firestore)
- **Keamanan:** bcrypt (password hashing)
- **Ikon:** Lucide React, React Icons
- **Carousel:** Swiper.js
- **State Management:** Zustand

---

## 🚀 Cara Install & Jalankan

### Prasyarat
- Node.js 18+
- Firebase project (konfigurasi Firebase)

### Langkah
```bash
# Clone repositori
git clone https://github.com/pandupan/SehatBersama.git
cd SehatBersama

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Isi dengan konfigurasi Firebase Anda:
# - FIREBASE_API_KEY
# - FIREBASE_AUTH_DOMAIN
# - FIREBASE_PROJECT_ID
# - FIREBASE_STORAGE_BUCKET
# - FIREBASE_MESSAGING_SENDER_ID
# - FIREBASE_APP_ID
# - NEXTAUTH_SECRET
# - NEXTAUTH_URL

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📁 Struktur Folder

```
SehatBersama/
├── app/
│   ├── page.tsx                    # Halaman utama
│   ├── layout.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── InformasiKesehatan/
│   │   ├── page.tsx
│   │   ├── GiziDanSuplemen/
│   │   ├── HidupSehat/
│   │   ├── Kehamilan/
│   │   ├── KesehatanMental/
│   │   ├── NutrisiDanDiet/
│   │   ├── Penyakit/
│   │   └── ... (Kategori lainnya)
│   ├── KalkulatorKesehatan/
│   │   ├── page.tsx
│   │   ├── KalkulatorBMR/
│   │   ├── KalkulatorIBM/
│   │   └── AsupanAir/
│   ├── ForumKomunitas/
│   │   └── page.tsx
│   └── api/
│       └── auth/
├── components/
│   ├── core/               # Komponen inti (Button)
│   ├── layouts/            # Navbar, Footer, Provider
│   ├── pages/              # Komponen per halaman
│   │   ├── LandingPage/
│   │   ├── AuthPage/
│   │   ├── InformasiKesehatan/
│   │   ├── KalkulatorKesehatan/
│   │   ├── ForumDiskusi/
│   │   └── LayananKomunitas/
│   │   └── LayananKonsultasi/
│   └── ui/                 # shadcn/ui
├── lib/
│   ├── firebase/
│   │   ├── init.ts         # Inisialisasi Firebase
│   │   └── service.ts      # Service Firebase
│   ├── store.ts            # Zustand store
│   └── utils.ts
├── middlewares/
│   └── withAuth.ts         # Middleware autentikasi
├── middleware.ts
├── public/
│   └── image/              # Aset gambar
└── package.json
```

## 📄 Lisensi

**MIT License**

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan) — Platform kesehatan digital untuk masyarakat Indonesia.
