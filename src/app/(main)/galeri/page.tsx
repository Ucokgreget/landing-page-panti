import prisma from "@/lib/prisma";
import Footer from "@/components/footer";
import {
  PosterGrid,
  VideoGrid,
  PhotoGrid,
} from "@/components/galeri-sections";

export default async function Galeri() {
  const [posters, videos, photos] = await Promise.all([
    prisma.galeriItem.findMany({
      where: { kategori: "POSTER" },
      orderBy: { urutan: "asc" },
    }),
    prisma.galeriItem.findMany({
      where: { kategori: "VIDEO" },
      orderBy: { urutan: "asc" },
    }),
    prisma.galeriItem.findMany({
      where: { kategori: "FOTO" },
      orderBy: { tanggal: "desc" },
    }),
  ]);

  const serialize = (items: typeof posters) =>
    items.map((item) => ({
      ...item,
      tanggal: item.tanggal?.toISOString() ?? null,
    }));

  return (
    <div className="bg-clay-surface">
      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 max-w-[1280px] mx-auto text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-clay-mint rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-clay-pink rounded-full blur-3xl opacity-30" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-clay-primary mb-6 tracking-tight">
          Galeri Inspirasi &amp; Edukasi
        </h1>
        <p className="text-clay-on-surface-variant max-w-2xl mx-auto text-lg">
          Dokumentasi perjalanan kemandirian dan materi edukatif bagi penerima
          manfaat di lingkungan UPTD Panti Sosial Rehabilitasi Sensorik.
        </p>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 space-y-24 pb-20">
        {/* Poster Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 clay-card bg-clay-mint flex items-center justify-center rounded-2xl">
              <span className="material-symbols-outlined text-clay-primary">
                auto_awesome_motion
              </span>
            </div>
            <h2 className="text-2xl font-bold text-clay-on-surface">Poster</h2>
          </div>
          <PosterGrid items={serialize(posters)} />
        </section>

        {/* Video Edukasi Section */}
        <section className="bg-clay-teal-light/30 rounded-3xl p-8 md:p-12 shadow-[inset_0_10px_20px_rgba(255,255,255,1)]">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 clay-card bg-clay-orange flex items-center justify-center rounded-2xl">
              <span className="material-symbols-outlined text-clay-tertiary">
                videocam
              </span>
            </div>
            <h2 className="text-2xl font-bold text-clay-on-surface">
              Video Edukasi
            </h2>
          </div>
          <VideoGrid items={serialize(videos)} />
        </section>

        {/* Foto Panti Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 clay-card bg-clay-pink flex items-center justify-center rounded-2xl">
              <span className="material-symbols-outlined text-clay-error">
                photo_library
              </span>
            </div>
            <h2 className="text-2xl font-bold text-clay-on-surface">
              Kegiatan Harian Panti
            </h2>
          </div>
          <PhotoGrid items={serialize(photos)} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
