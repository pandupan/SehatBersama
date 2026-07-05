# 🏥 SehatBersama — Platform Kesehatan Komunitas

Aplikasi **layanan kesehatan bersama** yang menyediakan informasi kesehatan, forum komunitas, dan manajemen artikel. Dibangun dengan Next.js, Firebase, dan NextAuth untuk autentikasi yang aman.

## ✨ Fitur

### Informasi Kesehatan
- **Gizi & Suplemen** — Kumpulan artikel tentang nutrisi, gizi seimbang, dan suplemen
  - 5 artikel informatif terstruktur
- **Hidup Sehat** — Panduan gaya hidup sehat
  - 5 artikel tentang pola hidup dan kebiasaan sehat
- **Institusi Pendidikan** — Informasi tentang institusi kesehatan

### Forum Komunitas
- **Forum Diskusi** — Wadah berbagi pengalaman kesehatan
- Tanya jawab antar anggota komunitas

### Autentikasi
- **NextAuth.js** — Login aman dengan berbagai provider
- **Firebase** — Backend real-time
- **bcrypt** — Enkripsi password

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Library** | shadcn/ui (Radix) |
| **Auth** | NextAuth.js + bcrypt |
| **Backend** | Firebase |
| **Icons** | Lucide React |
| **Headless** | @headlessui/react |

## 📁 Struktur Proyek

```
app/
├── InformasiKesehatan/
│   ├── GiziDanSuplemen/
│   │   ├── Artikel/                  # Daftar artikel
│   │   ├── Artikel1/ — Artikel5/     # 5 artikel gizi
│   │   └── page.tsx
│   ├── HidupSehat/
│   │   ├── Artikel/                  # Daftar artikel
│   │   ├── Artikel1/ — Artikel4/     # 4 artikel hidup sehat
│   │   └── page.tsx
│   └── InstitusiPendidikan/
└── ForumKomunitas/                   # Halaman forum
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

> **Note**: Konfigurasikan Firebase dan NextAuth terlebih dahulu di environment variables.

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
