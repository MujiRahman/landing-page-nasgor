import Image from "next/image";
import { MapPin, Phone, Clock, Star, MessageCircle, ChevronRight, Utensils } from "lucide-react";

export default function Home() {
  const waLink = "https://wa.me/6285870859125?text=bang+pesen+nasgor+1+pedes"; // Dummy WA

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-xl font-bold text-[var(--primary)] flex items-center gap-2" href="#beranda">
                <Utensils className="h-6 w-6" />
                <span>Domis</span>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li><a className="text-[var(--foreground)] transition hover:text-[var(--primary)] font-medium" href="#beranda">Beranda</a></li>
                  <li><a className="text-[var(--foreground)] transition hover:text-[var(--primary)] font-medium" href="#tentang">Tentang</a></li>
                  <li><a className="text-[var(--foreground)] transition hover:text-[var(--primary)] font-medium" href="#menu">Menu</a></li>
                  <li><a className="text-[var(--foreground)] transition hover:text-[var(--primary)] font-medium" href="#lokasi">Lokasi</a></li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-orange-700 transition"
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="beranda" className="relative overflow-hidden bg-[var(--background)] pt-16 md:pt-24 lg:pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                  Nasi Goreng Domis: <span className="text-[var(--primary)] block mt-2">Sensasi Rasa yang Bikin Melayang!</span>
                </h1>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                  Nikmati lezatnya hidangan khas nusantara dengan bumbu rempah rahasia. Porsi kuli, rasa bintang lima. Cocok untuk menemani malammu di Jatinegara.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={waLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-8 py-3 text-base font-medium text-white hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Pesan via WhatsApp
                  </a>
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--card)] border border-[var(--border)] px-8 py-3 text-base font-medium text-[var(--foreground)] hover:bg-gray-50 dark:hover:bg-zinc-800 transition shadow-sm"
                  >
                    Lihat Menu
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:max-w-full rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square">
                <Image
                  src="/images/hero-bg.png"
                  alt="Koki Nasi Goreng Antigravity sedang memasak dengan api besar"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Kami */}
        <section id="tentang" className="bg-[var(--card)] border-y border-[var(--border)] py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">Tentang &quot;Domis&quot;</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                Mengenyangkan Perut &amp; Menghibur Hati, Cerita Nasi Goreng Domis dimulai pada tahun 2009 dari sebuah gerobak sederhana di pinggir jalan. Kalau kamu tanya dari mana asal nama &quot;Domis&quot;, jawabannya bukan dari rumus fisika atau bahasa asing yang keren. &quot;Domis&quot; adalah panggilan akrab dari para pelanggan pertama kami untuk si juru masak—sosok yang kalau lagi oseng-oseng nasi di wajan, mulutnya nggak pernah libur ngajak ngobrol dan bercanda.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Spesial */}
        <section id="menu" className="py-16 lg:py-24 bg-[var(--background)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">Menu Andalan Kami</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">Pilihan hidangan terbaik untuk memanjakan lidah Anda.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Menu Item 1 */}
              <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/nasi-goreng.png"
                    alt="Seporsi Nasi Goreng Antigravity dengan telur mata sapi dan kerupuk"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Nasi Goreng</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Nasi goreng khas dengan bumbu rempah spesial, disajikan lengkap dengan telur mata sapi, ayam suwir, dan kerupuk renyah.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--primary)]">Rp 15.000</span>
                    <a href={waLink} className="text-sm font-medium text-[var(--primary)] hover:underline" target="_blank" rel="noreferrer">Pesan &rarr;</a>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/mie-goreng.png"
                    alt="Seporsi Mie Goreng dengan sayuran, irisan ayam, dan taburan bawang goreng"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Mie Goreng Spesial</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mie goreng kenyal dengan racikan manis gurih yang pas, dicampur sayuran segar dan potongan ayam.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--primary)]">Rp 15.000</span>
                    <a href={waLink} className="text-sm font-medium text-[var(--primary)] hover:underline" target="_blank" rel="noreferrer">Pesan &rarr;</a>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/mie-rebus.png"
                    alt="Semangkuk Mie Rebus dengan kuah kaldu kental gurih, sayuran, dan telur rebus"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Mie Rebus Hangat</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mie rebus hangat dengan kuah kaldu kental yang gurih, sayuran segar, dan irisan ayam. Cocok untuk menemani malam yang dingin.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--primary)]">Rp 15.000</span>
                    <a href={waLink} className="text-sm font-medium text-[var(--primary)] hover:underline" target="_blank" rel="noreferrer">Pesan &rarr;</a>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/kuetiau.png"
                    alt="Seporsi Kuetiau Goreng dengan balutan kecap manis, seafood, dan sayuran"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Kuetiau Goreng</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Kuetiau kenyal berbalut kecap manis gurih, ditumis dengan telur, sayuran, dan tambahan topping yang melimpah.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--primary)]">Rp 15.000</span>
                    <a href={waLink} className="text-sm font-medium text-[var(--primary)] hover:underline" target="_blank" rel="noreferrer">Pesan &rarr;</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Testimoni */}
        <section className="bg-[var(--card)] border-y border-[var(--border)] py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Kata Mereka</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">Ribuan porsi telah terjual. Inilah pendapat pelanggan kami.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { name: "Budi Santoso", text: "Nasi gorengnya juara! Bumbunya kerasa banget, porsinya juga pas buat makan malam sehabis pulang kerja dari stasiun." },
                { name: "Siti Aminah", text: "Kuetiaunya the best di daerah Jatinegara. Sering beli lewat WA dan selalu cepat pelayanannya. Recommended!" },
                { name: "Andi Wijaya", text: "Sesuai namanya, rasanya bikin melayang. Pedasnya pas, gurihnya mantap. Langganan tiap akhir pekan!" }
              ].map((review, i) => (
                <div key={i} className="rounded-2xl border border-[var(--border)] p-8 bg-[var(--background)] relative">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10 italic">&quot;{review.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--foreground)]">{review.name}</p>
                      <p className="text-xs text-gray-500">Local Guide</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokasi */}
        <section id="lokasi" className="py-16 lg:py-24 bg-[var(--background)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-8">Lokasi & Operasional</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">Alamat Lengkap</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                        Jalan Pisangan Lama 2<br />
                        Belakang Stasiun Jatinegara<br />
                        Jakarta Timur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">Jam Buka</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Senin - Minggu: <span className="font-semibold">18.30 - 00.30 WIB</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">Kontak</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        WhatsApp: +62 858-7085-9125
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="https://maps.app.goo.gl/ZKD1UVN9dLGfLpyE6"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--primary)] px-8 py-3 text-base font-medium text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=-6.214498,106.871127&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Nasi Goreng Antigravity"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--card)] border-t border-[var(--border)] pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 text-center md:text-left">
            <div>
              <div className="flex justify-center md:justify-start items-center gap-2 text-xl font-bold text-[var(--primary)] mb-4">
                <Utensils className="h-6 w-6" />
                <span>Domis</span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
                Spesialis Nasi Goreng dan Kuetiau dengan racikan bumbu rempah rahasia. Rasakan sensasi yang bikin melayang.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold text-[var(--foreground)] mb-4">Tautan</p>
              <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                <li><a href="#beranda" className="hover:text-[var(--primary)] transition">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-[var(--primary)] transition">Tentang Kami</a></li>
                <li><a href="#menu" className="hover:text-[var(--primary)] transition">Menu Spesial</a></li>
                <li><a href="#lokasi" className="hover:text-[var(--primary)] transition">Lokasi</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold text-[var(--foreground)] mb-4">Ikuti Kami</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/aday_permana/" target="_blank"
                  rel="noreferrer" className="text-gray-500 hover:text-[var(--primary)] transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@mr.aday7" target="_blank"
                  rel="noreferrer" className="text-gray-500 hover:text-[var(--primary)] transition">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a href="https://web.facebook.com/aday.permana" target="_blank"
                  rel="noreferrer" className="text-gray-500 hover:text-[var(--primary)] transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Pesan via WhatsApp:<br />
                <a href={waLink} className="font-bold text-[var(--primary)] hover:underline" target="_blank" rel="noreferrer">+62 858-7085-9125</a>
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-[var(--border)] pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nasi Goreng Antigravity. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

