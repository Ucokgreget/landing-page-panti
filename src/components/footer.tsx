import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-clay-surface-container-lowest rounded-t-[4rem] shadow-[0_-20px_40px_rgba(42,140,163,0.08)] mt-20">
      <div className="max-w-[1280px] mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="clay-card overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1662.8199427633224!2d104.7357383!3d-2.9469575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75006e6806fb%3A0xcae1ca0dee7770ff!2sPanti%20Sosial%20Rehabilitasi%20Sensorik!5e1!3m2!1sid!2sid!4v1775294527902!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Panti Sosial Rehabilitasi Sensorik"
            />
          </div>
          <Link
            href="https://maps.google.com/?q=-2.9469575,104.7357383"
            target="_blank"
            className="flex items-start gap-2 text-clay-on-surface-variant hover:text-clay-primary transition-all text-sm"
          >
            <span className="material-symbols-outlined text-clay-primary shrink-0">
              location_on
            </span>
            Jl. Komp. Sosial No.Km 6 No. 782, RT.16/RW.03, Suka Bangun,
            Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961
          </Link>
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
            <Link
              href="mailto:uptdpantidisabilitassensorik@gmail.com"
              className="flex items-start gap-3 text-clay-on-surface-variant hover:text-clay-primary transition-all"
            >
              <span className="material-symbols-outlined text-clay-primary">
                mail
              </span>
              <span>uptdpantidisabilitassensorik@gmail.com</span>
            </Link>
            <Link
              href="https://wa.me/6281368750850"
              target="_blank"
              className="flex items-start gap-3 text-clay-on-surface-variant hover:text-clay-primary transition-all"
            >
              <span className="material-symbols-outlined text-clay-primary">
                call
              </span>
              <span>+62 813-6875-0850</span>
            </Link>
            <div className="flex items-start gap-3 text-clay-on-surface-variant">
              <span className="material-symbols-outlined text-clay-primary">
                schedule
              </span>
              <span>Senin - Jumat: 08:00 - 16:00</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://wa.me/6281368750850"
              target="_blank"
              className="w-10 h-10 rounded-full bg-clay-primary/10 flex items-center justify-center text-clay-primary hover:bg-clay-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a
              href="https://www.instagram.com/pantidisabilitassensorik/"
              target="_blank"
              className="w-10 h-10 rounded-full bg-clay-primary/10 flex items-center justify-center text-clay-primary hover:bg-clay-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-10 py-8 border-t border-clay-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-clay-on-surface-variant text-sm">
          &copy; 2026 UPTD Panti Sosial Rehabilitasi Sensorik
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
