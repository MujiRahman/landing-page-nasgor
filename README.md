# Nasi Goreng Domis - Landing Page

Website Landing Page untuk **Nasi Goreng Domis**, sebuah warung spesialis Nasi Goreng, Mie Goreng, dan Kuetiau yang berlokasi di Jatinegara, Jakarta Timur. Website ini dirancang untuk memberikan informasi terkait menu, lokasi, jam operasional, serta memudahkan pelanggan untuk melakukan pemesanan langsung melalui WhatsApp.

## 🚀 Fitur Utama

- **Desain Modern & Responsif**: Tampilan yang elegan dan nyaman digunakan di berbagai ukuran layar (Mobile & Desktop).
- **Katalog Menu**: Menampilkan pilihan menu andalan beserta harga dan foto yang menggugah selera.
- **Integrasi WhatsApp**: Tombol "Pesan Sekarang" yang secara otomatis mengarahkan pelanggan ke chat WhatsApp beserta format pesan.
- **Peta Lokasi (Google Maps)**: Memudahkan pelanggan menavigasi rute menuju lokasi warung di belakang Stasiun Jatinegara.
- **SEO Optimized**: Konfigurasi meta tag dan *Schema Markup* khusus restoran (`Restaurant`) agar bisnis mudah ditemukan di mesin pencari Google.
- **Dark Mode Support**: Tema gelap (*dark mode*) yang mengikuti setelan atau preferensi perangkat pengguna secara otomatis.

## 🛠️ Tech Stack

- **[Next.js (App Router)](https://nextjs.org/)** - React framework yang cepat dan mendukung SEO (*Server Components*).
- **[Tailwind CSS](https://tailwindcss.com/)** - *Utility-first CSS framework* untuk mempercepat *styling*.
- **[Lucide React](https://lucide.dev/)** - Kumpulan ikon *open-source* yang minimalis dan rapi.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript untuk penulisan kode yang lebih aman (*type-safe*).

## 📦 Cara Menjalankan Project (Local Development)

1. Clone repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com/MujiRahman/landing-page-nasgor.git
   cd landing-page-nasgor
   ```

2. Install semua dependensi yang dibutuhkan:
   ```bash
   npm install
   ```

3. Jalankan *development server*:
   ```bash
   npm run dev
   ```

4. Buka tab browser baru dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya. Anda bisa mengedit halaman secara *real-time* di `src/app/page.tsx`.

## 📂 Struktur Folder Penting

- `src/app/page.tsx` — Konten utama (UI) dari Landing Page.
- `src/app/layout.tsx` — *Wrapper* halaman, konfigurasi metadata SEO, dan Font.
- `src/app/globals.css` — Konfigurasi warna tema (*CSS variables*) dan integrasi Tailwind.
- `public/images/` — Direktori tempat penyimpanan aset foto dan *background*.

## 📄 Lisensi

Hak Cipta dilindungi. Proyek ini dibangun secara khusus untuk **Nasi Goreng Domis**. Penggunaan ulang aset atau desain komersial tanpa seizin pemilik dilarang.
