📄 Product Requirements Document (PRD)
1. Ringkasan Proyek (Project Overview)
Nama Proyek: Landing Page Nasi Goreng Antigravity
Tujuan: Membangun kehadiran online untuk Nasi Goreng Antigravity guna meningkatkan brand awareness, menampilkan menu andalan, dan memudahkan pelanggan menemukan lokasi serta melakukan pemesanan (via WhatsApp).
Target Audiens: Masyarakat sekitar lokasi jualan, pecinta kuliner malam, dan pengguna aplikasi pencarian makanan.
Tech Stack: Next.js (React Framework), Tailwind CSS (Styling), Vercel (Hosting & Deployment).
2. Struktur Halaman (Single Page Application)
Website ini akan menggunakan desain single-page agar pengunjung bisa mendapatkan semua informasi hanya dengan scroll ke bawah.
Navbar (Sticky): Logo "Antigravity", link navigasi (Beranda, Menu, Lokasi, Kontak), dan tombol Call-to-Action (CTA) "Pesan Sekarang".
Hero Section: Bagian utama yang pertama dilihat. Berisi headline yang menggugah selera, sub-headline, tombol CTA, dan foto makanan yang berkualitas tinggi.
Tentang Kami (About): Deskripsi singkat mengapa dinamakan "Antigravity" dan apa ciri khas rasanya (misal: bumbu rahasia, porsi kuli, dll).
Menu Spesial: Grid katalog makanan.
Nasi Goreng
Mie Goreng
Mie Rebus
Kuetiau
Testimoni (Social Proof): Ulasan dari pelanggan yang sudah pernah mencoba (bisa diambil dari Google Maps nantinya).
Lokasi & Operasional: Integrasi peta Google Maps, alamat lengkap, dan jam buka-tutup.
Footer: Copyright, tautan media sosial (Instagram/TikTok), dan kontak WhatsApp.
🚀 Panduan Konten & Optimasi SEO (Agar Mudah Diindeks Google)
Agar website mudah ditemukan di Google (misalnya saat orang mengetik "Nasi Goreng enak di [Nama Daerahmu]"), kamu harus menyusun konten dan kode dengan strategi SEO On-Page. Berikut langkah-langkahnya:
Langkah 1: Setup Meta Data & Title Tag (Next.js SEO)
Gunakan fitur metadata bawaan Next.js (jika menggunakan App Router) untuk memberikan informasi pada Google.
Title: Jangan hanya "Home". Gunakan format: Nasi Goreng Antigravity | Spesialis Nasi Goreng & Kuetiau di [Nama Kotamu]
Description: Buat deskripsi yang mengandung keyword. Contoh: "Nikmati lezatnya Nasi Goreng Antigravity, Mie Goreng, dan Kuetiau dengan bumbu rempah spesial di [Nama Daerah]. Buka dari jam 17.00 - 00.00. Pesan sekarang!"
Langkah 2: Struktur Konten Semantic (Penggunaan Heading)
Google membaca struktur HTML untuk memahami konteks halaman.
H1 (Hanya ada 1): Taruh di Hero Section. Contoh: <h1>Nasi Goreng Antigravity: Sensasi Rasa yang Bikin Melayang!</h1>
H2 (Sub-bagian): Gunakan untuk judul section seperti <h2>Menu Andalan Kami</h2> atau <h2>Lokasi Nasi Goreng Antigravity</h2>.
H3 (Detail): Gunakan untuk nama makanan. Contoh: <h3>Kuetiau Goreng Spesial</h3>.
Langkah 3: Optimasi Gambar (Sangat Penting!)
Gambar makanan yang besar akan membuat web lambat dan dibenci Google.
Wajib gunakan next/image: Komponen <Image/> dari Next.js akan otomatis mengompres gambar (menjadi format WebP) dan melakukan lazy loading.
Alt Text: Selalu isi atribut alt dengan deskripsi jelas. Jangan: alt="gambar1". Gunakan: alt="Seporsi Nasi Goreng Antigravity dengan telur mata sapi dan kerupuk". Ini membantu Google Image Search.
Langkah 4: Konten Menu yang Menjual
Jangan hanya menulis "Nasi Goreng - Rp 15.000". Berikan deskripsi yang membuat orang lapar (dan mengandung keyword pendukung):
Mie Rebus: "Mie rebus hangat dengan kuah kaldu kental yang gurih, sayuran segar, dan irisan ayam. Cocok untuk menemani malam yang dingin."
Langkah 5: Local SEO & Skema Data (Schema Markup)
Karena ini bisnis fisik, tambahkan LocalBusiness Schema (format JSON-LD) di bagian <head>. Ini memberi tahu Google bahwa website ini adalah restoran fisik, sehingga peluang muncul di "Google Local Pack" (hasil pencarian dengan peta) lebih besar.