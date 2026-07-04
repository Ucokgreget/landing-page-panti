"use client";

import { useState } from "react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { getTagColor } from "@/lib/tag-color-map";

type GaleriItem = {
  id: string;
  kategori: string;
  title: string;
  desc: string | null;
  tag: string | null;
  tanggal: string | null;
  imageSrc: string;
  urutan: number;
};

export function PosterGrid({ items }: { items: GaleriItem[] }) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((poster) => (
          <div
            key={poster.id}
            className="clay-card clay-card-hover p-4 rounded-3xl cursor-pointer"
            onClick={() => setZoomedImage(poster.imageSrc)}
          >
            <div className="rounded-2xl overflow-hidden clay-inset mb-4 aspect-[3/4] relative">
              <img
                className="w-full h-full object-cover"
                src={poster.imageSrc}
                alt={poster.title}
              />
            </div>
            <h3 className="font-bold text-lg text-center text-clay-primary px-2">
              {poster.title}
            </h3>
          </div>
        ))}
      </div>
      <ZoomOverlay src={zoomedImage} onClose={() => setZoomedImage(null)} />
    </>
  );
}

export function VideoGrid({ items }: { items: GaleriItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {items.map((video) => {
        const tagColor = getTagColor(video.tag);
        return (
          <div key={video.id} className="clay-card overflow-hidden rounded-3xl">
            <div className="relative aspect-video clay-inset bg-clay-surface-dim">
              <img
                className="w-full h-full object-cover"
                src={video.imageSrc}
                alt={video.title}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <span
                    className="material-symbols-outlined text-clay-primary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <span
                className={`px-3 py-1 ${tagColor.bg} ${tagColor.color} text-xs font-bold rounded-full mb-3 inline-block`}
              >
                {video.tag}
              </span>
              <h3 className="font-bold text-xl text-clay-on-surface mb-2">
                {video.title}
              </h3>
              <p className="text-clay-on-surface-variant text-sm">
                {video.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function PhotoGrid({ items }: { items: GaleriItem[] }) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((photo) => (
          <div
            key={photo.id}
            className="clay-card clay-card-hover p-4 rounded-3xl break-inside-avoid cursor-pointer"
            onClick={() => setZoomedImage(photo.imageSrc)}
          >
            <div className="rounded-2xl overflow-hidden clay-inset mb-3">
              <img
                className="w-full h-auto"
                src={photo.imageSrc}
                alt={photo.title}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-clay-primary">
                {photo.title}
              </span>
              <span className="text-xs text-clay-on-surface-variant">
                {photo.tanggal
                  ? format(new Date(photo.tanggal), "MMM yyyy", {
                      locale: idLocale,
                    })
                  : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ZoomOverlay src={zoomedImage} onClose={() => setZoomedImage(null)} />
    </>
  );
}

function ZoomOverlay({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#00687b]/90 backdrop-blur-sm cursor-zoom-out"
      onClick={onClose}
    >
      <img
        className="max-w-[90%] max-h-[90%] object-contain rounded-2xl shadow-2xl"
        src={src}
        alt="Zoomed"
      />
      <button className="absolute top-8 right-8 text-white text-4xl">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
