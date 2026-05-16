import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasi Goreng Domis | Spesialis Nasi Goreng & Kuetiau di Jatinegara",
  description: "Nikmati lezatnya Nasi Goreng Domis, Mie Goreng, dan Kuetiau dengan bumbu rempah spesial di Jakarta Timur di blakang stasiun jatinegara jalan pisangan lama 2. Buka dari jam 17.00 - 00.00. Pesan sekarang!",
  keywords: ["Nasi Goreng", "Nasi Goreng Jatinegara", "Kuetiau", "Mie Goreng", "Kuliner Malam Jakarta Timur", "Nasi Goreng Domis"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Nasi Goreng Domis",
  "image": "/images/hero-bg.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jalan Pisangan Lama 2, Belakang Stasiun Jatinegara",
    "addressLocality": "Jakarta Timur",
    "addressRegion": "DKI Jakarta",
    "addressCountry": "ID"
  },
  "servesCuisine": "Indonesian",
  "openingHours": "Mo-Su 17:00-00:00",
  "priceRange": "Rp 15.000 - Rp 20.000",
  "telephone": "+6285870859125",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
