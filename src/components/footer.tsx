import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-clay-surface-container-lowest rounded-t-[4rem] shadow-[0_-20px_40px_rgba(42,140,163,0.08)] mt-20">
      <div className="max-w-[1280px] mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-clay-primary text-4xl"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              diversity_2
            </span>
            <span className="text-2xl text-clay-primary font-extrabold tracking-tight">
              UPTD Panti Sosial
            </span>
          </div>
          <p className="text-clay-on-surface-variant">
            Melayani dengan Hati, Membina dengan Dedikasi. Panti Sosial
            Rehabilitasi Sensorik Terdepan.
          </p>
          <div className="clay-card overflow-hidden h-48 relative rounded-2xl">
            <div className="w-full h-full bg-clay-surface-container flex items-center justify-center">
              <div className="text-clay-on-surface-variant text-center p-4">
                <span className="material-symbols-outlined text-clay-primary text-3xl mb-2">
                  location_on
                </span>
                <p className="font-bold">Lihat di Google Maps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-bold text-xl text-clay-primary">Tautan Cepat</h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-clay-on-surface-variant hover:text-clay-primary flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="text-clay-on-surface-variant hover:text-clay-primary flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                Profil Lembaga
              </Link>
            </li>
            <li>
              <Link
                href="/galeri"
                className="text-clay-on-surface-variant hover:text-clay-primary flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                Galeri Kegiatan
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-clay-on-surface-variant hover:text-clay-primary flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                Pengaduan Layanan
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="font-bold text-xl text-clay-primary">Hubungi Kami</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-clay-on-surface-variant">
              <span className="material-symbols-outlined text-clay-primary">
                mail
              </span>
              <span>kontak@uptdpantisosial.go.id</span>
            </div>
            <div className="flex items-start gap-3 text-clay-on-surface-variant">
              <span className="material-symbols-outlined text-clay-primary">
                call
              </span>
              <span>(021) 1234-5678</span>
            </div>
            <div className="flex items-start gap-3 text-clay-on-surface-variant">
              <span className="material-symbols-outlined text-clay-primary">
                schedule
              </span>
              <span>Senin - Jumat: 08:00 - 16:00</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-clay-primary/10 flex items-center justify-center text-clay-primary hover:bg-clay-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">face_nod</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-clay-primary/10 flex items-center justify-center text-clay-primary hover:bg-clay-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-clay-primary/10 flex items-center justify-center text-clay-primary hover:bg-clay-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">video_library</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-10 py-8 border-t border-clay-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-clay-on-surface-variant text-sm">
          &copy; 2024 UPTD Panti Sosial Rehabilitasi Sensorik. Melayani dengan
          Hati.
        </p>
        <div className="flex gap-6 text-sm font-bold text-clay-on-surface-variant">
          <a href="#" className="hover:text-clay-primary transition-all">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-clay-primary transition-all">
            Syarat &amp; Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
}
