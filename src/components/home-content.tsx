"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  id: number;
  judul: string;
  imageUrl: string | null;
  urutan: number;
}

export default function HomeContent({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setModalVideo(false);
  };

  const moveSlider = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-clay-surface">
      <div className="mt-8 mx-8 rounded-lg">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                  {slide.imageUrl && (
                    <Image
                      src={slide.imageUrl}
                      alt={slide.judul}
                      className="object-cover"
                      fill={true}
                      priority={index === 0}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Video Profile Section */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-clay-teal-light rounded-full text-clay-primary font-bold mb-6">
            <span className="material-symbols-outlined text-lg">
              play_circle
            </span>
            <span>Video Profil</span>
          </div>
          <h2 className="text-3xl font-bold">Mengenal Lebih Dekat</h2>
        </div>
        <div className="clay-card p-4 max-w-4xl mx-auto">
          <div
            className="relative rounded-[2rem] overflow-hidden cursor-pointer group"
            onClick={() => setModalVideo(true)}
          >
            <video
              className="w-full aspect-video object-cover"
              src="/homepage/perkenalan.mp4"
              muted
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-clay-primary text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto" id="sejarah">
        <div className="clay-card p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-clay-teal-light rounded-full text-clay-primary font-bold mb-6">
              <span className="material-symbols-outlined text-lg">history</span>
              <span>Sejarah Kami</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Membangun Harapan Sejak Berdiri
            </h2>
            <p className="text-clay-on-surface-variant leading-relaxed mb-6">
              UPTD Panti Sosial Rehabilitasi Sensorik merupakan unit pelaksana
              teknis yang didedikasikan untuk memberikan pelayanan prima bagi
              penyandang disabilitas sensorik. Berdiri dengan visi kemanusiaan,
              kami terus berinovasi dalam metode rehabilitasi yang inklusif.
            </p>
            <p className="text-clay-on-surface-variant leading-relaxed">
              Kami percaya bahwa setiap individu memiliki potensi yang luar
              biasa. Melalui bimbingan fisik, mental, dan sosial, kami membantu
              para penerima manfaat untuk meraih kembali kepercayaan diri dan
              peran aktif mereka dalam masyarakat.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3]">
            <Image src="/homepage/slb.jpg" alt="slb" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Visi & Misi Bento Grid */}
      <section className="py-20 bg-clay-surface-container-low px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-clay-primary mb-4">
              Visi &amp; Misi
            </h2>
            <div className="h-1.5 w-24 bg-clay-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visi Card */}
            <div className="md:col-span-3 clay-card p-10 bg-gradient-to-br from-clay-primary/5 to-clay-secondary/5 border-2 border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner">
                  <span
                    className="material-symbols-outlined text-clay-primary text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    visibility
                  </span>
                </div>
                <h3 className="text-2xl font-bold">Visi Utama</h3>
              </div>
              <p className="text-xl italic text-clay-primary-container font-medium text-center py-6">
                &ldquo;Terwujudnya penyelenggaraan usaha kesehatan sosial yang
                profesional dan berkelanjutan terhadap Pemerlu Pelayanan
                Kesejahteraan Sosial (PPKS) disabilitas sensorik &rdquo;
              </p>
            </div>
            {/* Misi Card */}
            <div className="md:col-span-3 clay-card p-10 bg-gradient-to-br from-clay-mint/20 to-clay-teal-light/20 border-2 border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner">
                  <span
                    className="material-symbols-outlined text-clay-secondary text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    flag
                  </span>
                </div>
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>
              <ol className="space-y-4 text-clay-on-surface-variant list-decimal list-inside">
                <li>
                  Memberikan pelayanan akomodasi, kesehatan, dan terapi khusus
                  serta perumusan pelayanan yang cepat dan tepat
                </li>
                <li>
                  Memberikan bimbingan dan pengembangan kecerdasan, fisik,
                  psikologi, mental, spiritual, komunikasi, dan keterampilan
                  kerja
                </li>
                <li>
                  Melaksanakan penyaluran dan penempatan kembali kepada keluarga
                  atau lingkungan kerja
                </li>
                <li>
                  Melakukan bimbingan untuk mengentaskan penerima manfaat
                  disabilitas sensorik
                </li>
                <li>Meningkatkan kerjasama dan peran aktif masyarakat</li>
                <li>Memberikan pembinaan lanjut dan perlindungan sosial</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Sasaran Pelayanan */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-6">Sasaran Pelayanan</h2>
            <p className="text-clay-on-surface-variant mb-8">
              Kami melayani dengan standar prosedur yang terukur untuk
              memastikan kenyamanan setiap individu.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-clay-outline-variant/30">
                <div className="bg-clay-primary/10 p-3 rounded-full text-clay-primary">
                  <p>1</p>
                </div>
                <span className="font-bold">
                  Penyandang disabilitas sensorik yang berasal dari
                  kabupaten/kota di wilayah sumatera selatan
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-clay-outline-variant/30">
                <div className="bg-clay-secondary/10 p-3 rounded-full text-clay-secondary">
                  <p>2</p>
                </div>
                <span className="font-bold">
                  Penyandang disabilitas sensorik yang mengalami rawan ekonomi
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-clay-outline-variant/30">
                <div className="bg-clay-secondary/10 p-3 rounded-full text-clay-secondary">
                  <p>3</p>
                </div>
                <span className="font-bold">
                  Penyandang disabilitas sensorik dengan rentang usia 9 sampai
                  35 tahun
                </span>
              </div>
            </div>
          </div>
          {/* SOP & Persyaratan */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="clay-card clay-card-hover group overflow-hidden cursor-pointer"
              onClick={() => setModalImage("/homepage/sop.webp")}
            >
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">
                  Standar Operasional (SOP)
                </h3>
              </div>
              <div className="aspect-[3/4] bg-clay-surface-container relative">
                <Image
                  src="/homepage/sop.webp"
                  alt="SOP"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-clay-primary">
                      zoom_in
                    </span>
                    <span className="font-bold text-sm text-clay-primary">
                      Lihat Gambar
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="clay-card clay-card-hover group overflow-hidden cursor-pointer"
              onClick={() => setModalImage("/homepage/persyaratan.webp")}
            >
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">
                  Persyaratan Penerimaan
                </h3>
              </div>
              <div className="aspect-[3/4] bg-clay-surface-container relative">
                <Image
                  src="/homepage/persyaratan.webp"
                  alt="Persyaratan"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-clay-primary">
                      zoom_in
                    </span>
                    <span className="font-bold text-sm text-clay-primary">
                      Lihat Gambar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Card */}
      <div className="md:col-span-3 clay-card p-10 bg-gradient-to-br from-clay-primary/5 to-clay-secondary/5 border-2 border-white/50">
        <div className="flex flex-col items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-center">Motto</h3>
        </div>
        <p className="text-xl italic text-clay-primary-container font-medium text-center py-6">
          &ldquo;MANTAP (MANDIRI, TANGGUH, DAN PROFESIONAL) &rdquo;
        </p>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            onClick={() => setModalImage(null)}
          >
            <span className="material-symbols-outlined text-clay-primary text-2xl">
              close
            </span>
          </button>
          <div
            className="clay-card p-2 max-w-4xl max-h-[90vh] overflow-auto rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Preview"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Video Modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeVideoModal}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
            onClick={closeVideoModal}
          >
            <span className="material-symbols-outlined text-clay-primary text-2xl">
              close
            </span>
          </button>
          <div
            className="w-full max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              className="w-full rounded-2xl shadow-2xl"
              src="/homepage/perkenalan.mp4"
              controls
              autoPlay
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
