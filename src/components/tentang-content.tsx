"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Image from "next/image";

interface TentangKamiItem {
  id: number;
  kategori: string;
  title: string;
  desc: string | null;
  icon: string;
  imageSrc: string;
  caption: string;
  urutan: number;
}

interface TentangData {
  judul: string;
  isi: string;
  inovasi: TentangKamiItem[];
  dampak: TentangKamiItem[];
  pelayanan: TentangKamiItem[];
}

const STYLE_CYCLE = [
  { color: "text-clay-primary", bg: "bg-clay-teal-light" },
  { color: "text-clay-secondary", bg: "bg-clay-pink" },
  { color: "text-clay-tertiary", bg: "bg-clay-orange" },
  { color: "text-clay-primary", bg: "bg-clay-mint" },
];

function getStyle(index: number) {
  return STYLE_CYCLE[index % STYLE_CYCLE.length];
}

export default function TentangContent({ data }: { data: TentangData }) {
  const [modal, setModal] = useState<{ src: string; caption: string } | null>(
    null,
  );

  return (
    <div className="bg-clay-surface">
      <main className="pt-32 px-5 md:px-10 max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center mb-24">
          <h1 className="text-3xl md:text-5xl font-extrabold text-clay-primary mb-6 tracking-tight">
            {data.judul}
          </h1>
          <p className="text-lg text-clay-on-surface-variant max-w-2xl">
            {data.isi}
          </p>
        </header>

        {/* Inovasi Panti Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-clay-mint flex items-center justify-center clay-card">
              <span className="material-symbols-outlined text-clay-primary">
                lightbulb
              </span>
            </div>
            <h2 className="text-2xl font-bold text-clay-primary">
              Inovasi Panti
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.inovasi.map((item, i) => {
              const style = getStyle(i);
              return (
                <div
                  key={item.id}
                  className="clay-card clay-card-hover rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer"
                  onClick={() =>
                    setModal({ src: item.imageSrc, caption: item.caption })
                  }
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 rounded-full ${style.bg} mb-6 flex items-center justify-center`}
                  >
                    <span
                      className={`material-symbols-outlined ${style.color} text-3xl`}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold ${style.color} mb-3`}>
                    {item.title}
                  </h3>
                  <p className="text-clay-on-surface-variant">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dampak Positif Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-clay-pink flex items-center justify-center clay-card">
              <span className="material-symbols-outlined text-clay-secondary">
                verified
              </span>
            </div>
            <h2 className="text-2xl font-bold text-clay-secondary">
              Dampak Positif Panti
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.dampak.map((item) => (
              <div
                key={item.id}
                className="clay-card clay-card-hover rounded-2xl p-4 flex flex-col items-center justify-center gap-3 group cursor-pointer"
                onClick={() =>
                  setModal({ src: item.imageSrc, caption: item.caption })
                }
              >
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-2">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="material-symbols-outlined text-clay-secondary text-3xl transition-transform group-hover:scale-125">
                  {item.icon}
                </span>
                <span className="font-bold text-sm text-center text-clay-on-surface-variant">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pelayanan Panti Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-clay-teal-light flex items-center justify-center clay-card">
              <span className="material-symbols-outlined text-clay-primary">
                medical_services
              </span>
            </div>
            <h2 className="text-2xl font-bold text-clay-primary">
              Pelayanan Panti
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.pelayanan.map((item, i) => {
              const style = getStyle(i);
              return (
                <div
                  key={item.id}
                  className="clay-card clay-card-hover rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer"
                  onClick={() =>
                    setModal({ src: item.imageSrc, caption: item.caption })
                  }
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center shadow-inner mb-3`}
                  >
                    <span
                      className={`material-symbols-outlined ${style.color} text-3xl`}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold ${style.color} mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-clay-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setModal(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            onClick={() => setModal(null)}
          >
            <span className="material-symbols-outlined text-clay-primary text-2xl">
              close
            </span>
          </button>
          <div
            className="clay-card p-4 rounded-3xl max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
              <Image
                src={modal.src}
                alt={modal.caption}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center font-medium text-clay-on-surface-variant mt-4 px-2 pb-2">
              {modal.caption}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
