import { PrismaClient, Prisma, KategoriGaleri } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "krisbowt3ri1",
    role: "ADMIN",
  },
];

const homeData = [
  { id: 1, judul: "banner1", imageUrl: "/homepage/banner.webp", urutan: 1 },
  { id: 2, judul: "apel", imageUrl: "/homepage/apel.webp", urutan: 2 },
  { id: 3, judul: "banner3", imageUrl: "/homepage/music.webp", urutan: 3 },
  { id: 4, judul: "banner4", imageUrl: "/homepage/braille3.webp", urutan: 4 },
  { id: 5, judul: "banner5", imageUrl: "/homepage/tausiyah2.webp", urutan: 5 },
];

const inovasiData = [
  { title: "Pembuatan Roket", desc: "Inovasi teknologi bantuan untuk mobilitas penyandang disabilitas netra berbasis sensor.", icon: "rocket_launch", imageSrc: "/tentang/roket.jpeg", caption: "Pembuatan roket inovasi panti", urutan: 1 },
  { title: "Disagana", desc: "Program Kesiapsiagaan Bencana untuk penyandang disabilitas guna meminimalisir risiko fatalitas.", icon: "shield", imageSrc: "/tentang/disagana.jpeg", caption: "Program Disagana kesiapsiagaan bencana", urutan: 2 },
  { title: "LAKSAN", desc: "Layanan Konsultasi Tuna Netra untuk memberikan dukungan kepada individu dengan gangguan penglihatan", icon: "devices", imageSrc: "/tentang/laksan.jpeg", caption: "LAKSAN", urutan: 3 },
  { title: "Gerakan Sensorik Mandiri Pangan", desc: "Menciptakan Kemandirian pangan di lingkungan panti", icon: "gallery_thumbnail", imageSrc: "/tentang/gsmp.jpeg", caption: "Gerakan Sensorik Mandiri Pangan", urutan: 4 },
];

const dampakData = [
  { title: "Penghargaan Nasional", icon: "trophy", imageSrc: "/tentang/dampak.jpeg", caption: "Penghargaan nasional yang diraih", urutan: 1 },
  { title: "Transformasi Layanan", icon: "auto_graph", imageSrc: "/tentang/dampak1.jpeg", caption: "Transformasi diri penerima manfaat", urutan: 2 },
  { title: "Juara Kebersihan", icon: "groups", imageSrc: "/tentang/dampak2.jpeg", caption: "Kegiatan integrasi sosial", urutan: 3 },
  { title: "Perwujudan Prestasi", icon: "psychology", imageSrc: "/tentang/dampak3.jpeg", caption: "Program resiliensi mental", urutan: 4 },
  { title: "Anugrah Inovator", icon: "work", imageSrc: "/tentang/dampak4.jpeg", caption: "Program kemandirian ekonomi", urutan: 5 },
];

const pelayananData = [
  { title: "Assessment Klien", desc: "Identifikasi anak-anak yang mau masuk panti.", icon: "assignment_ind", imageSrc: "/tentang/ak.jpeg", caption: "Identifikasi anak-anak yang mau masuk panti.", urutan: 1 },
  { title: "Asrama", desc: "Fasilitas asrama untuk tempat tinggal penerima manfaat selama menjalani rehabilitasi.", icon: "bedroom_parent", imageSrc: "/tentang/asrama.jpeg", caption: "Fasilitas asrama untuk tempat tinggal penerima manfaat selama menjalani rehabilitasi.", urutan: 2 },
  { title: "Makan", desc: "Fasilitas makan 3 kali sehari.", icon: "restaurant", imageSrc: "/tentang/makan.jpeg", caption: "Fasilitas makan 3 kali sehari.", urutan: 3 },
  { title: "Kesehatan", desc: "Fasilitas kesehatan di panti ada obat dan setiap akhir bulan diadakan posyandu.", icon: "health_and_safety", imageSrc: "/tentang/posyandu.jpeg", caption: "Fasilitas kesehatan di panti ada obat dan setiap akhir bulan diadakan posyandu.", urutan: 4 },
  { title: "Mandiri", desc: "Anak-anak di asrama diajarkan mandiri seperti cuci baju, cuci piring, bersih-bersih.", icon: "self_improvement", imageSrc: "/tentang/mandiri.jpeg", caption: "Anak-anak di asrama diajarkan mandiri seperti cuci baju, cuci piring, bersih-bersih.", urutan: 5 },
  { title: "Mobilitas", desc: "Anak-anak diajak bergerak aktif dengan berjalan sekitar.", icon: "directions_walk", imageSrc: "/tentang/om.jpeg", caption: "Anak-anak diajak bergerak aktif dengan berjalan sekitar.", urutan: 6 },
  { title: "SLB-A", desc: "Fasilitas SLB-A untuk anak-anak tunanetra diajak belajar bareng.", icon: "school", imageSrc: "/tentang/slb.jpeg", caption: "Fasilitas SLB-A untuk anak-anak tunanetra diajak belajar bareng.", urutan: 7 },
  { title: "Braille", desc: "Anak-anak diajarkan huruf-huruf abjad menggunakan braille.", icon: "menu_book", imageSrc: "/tentang/belajar.jpeg", caption: "Anak-anak diajarkan huruf-huruf abjad menggunakan braille.", urutan: 8 },
  { title: "Bahasa Isyarat", desc: "Anak-anak tunarungu dan wicara diajak belajar bahasa isyarat mulai dari abjad dan sehari-hari.", icon: "sign_language", imageSrc: "/tentang/isyarat.jpeg", caption: "Anak-anak tunarungu dan wicara diajak belajar bahasa isyarat mulai dari abjad dan sehari-hari.", urutan: 9 },
  { title: "Terapi Wicara", desc: "Anak-anak tunarungu diajak bicara agar lancar.", icon: "record_voice_over", imageSrc: "/tentang/terapi.jpeg", caption: "Anak-anak tunarungu diajak bicara agar lancar.", urutan: 10 },
  { title: "Komputer Netra", desc: "Pelatihan komputer khusus untuk tunanetra.", icon: "computer", imageSrc: "/tentang/komnetra.jpeg", caption: "Pelatihan komputer khusus untuk tunanetra.", urutan: 11 },
  { title: "Alquran & Tausiah", desc: "Anak-anak diajari membaca Al-Quran dan diajarkan tentang agama.", icon: "auto_stories", imageSrc: "/tentang/alquran.jpeg", caption: "Anak-anak diajari membaca Al-Quran dan diajarkan tentang agama.", urutan: 12 },
  { title: "Psikologi", desc: "Anak-anak ditanya tentang kesehariannya bagaimana agar merasa tenang.", icon: "psychology", imageSrc: "/tentang/bimbingan.jpeg", caption: "Anak-anak ditanya tentang kesehariannya bagaimana agar merasa tenang.", urutan: 13 },
  { title: "Sosial", desc: "Anak-anak diajak komunikasi tentang sehari-hari dengan yang lain.", icon: "groups", imageSrc: "/tentang/bimbingan.jpeg", caption: "Anak-anak diajak komunikasi tentang sehari-hari dengan yang lain.", urutan: 14 },
  { title: "Tata Boga", desc: "Anak-anak diajak belajar memasak sendiri dan harus dipantau agar tidak terjadi apa-apa.", icon: "cooking", imageSrc: "/tentang/tataboga.jpeg", caption: "Anak-anak diajak belajar memasak sendiri dan harus dipantau agar tidak terjadi apa-apa.", urutan: 15 },
  { title: "Musik", desc: "Anak-anak tunanetra diajak belajar memakai alat musik agar mencari kesenangannya.", icon: "music_note", imageSrc: "/tentang/musikk.jpeg", caption: "Anak-anak tunanetra diajak belajar memakai alat musik agar mencari kesenangannya.", urutan: 16 },
  { title: "Menjahit", desc: "Anak-anak tunarungu dan wicara diajak belajar menjahit.", icon: "checkroom", imageSrc: "/tentang/jahit.jpeg", caption: "Anak-anak tunarungu dan wicara diajak belajar menjahit.", urutan: 17 },
  { title: "Make-Up", desc: "Anak-anak tunarungu dan wicara diajak belajar make-up.", icon: "face_retouching_natural", imageSrc: "/tentang/makeup.jpeg", caption: "Anak-anak tunarungu dan wicara diajak belajar make-up.", urutan: 18 },
  { title: "Kaligrafi", desc: "Anak-anak diajarkan menulis arab atau kaligrafi.", icon: "draw", imageSrc: "/tentang/kaligraf.jpeg", caption: "Anak-anak diajarkan menulis arab atau kaligrafi.", urutan: 19 },
  { title: "Pijat Urut", desc: "Anak-anak diajarkan cara pijat urut.", icon: "spa", imageSrc: "/tentang/urut.jpeg", caption: "Anak-anak diajarkan cara pijat urut.", urutan: 20 },
  { title: "Karate", desc: "Anak-anak diajarkan bela diri.", icon: "sports_martial_arts", imageSrc: "/tentang/karate.jpeg", caption: "Anak-anak diajarkan bela diri.", urutan: 21 },
  { title: "Gerakan Minum Susu", desc: "Anak-anak diberi susu agar sehat.", icon: "local_cafe", imageSrc: "/tentang/inovasi.jpeg", caption: "Anak-anak diberi susu agar sehat.", urutan: 22 },
  { title: "Rekreasi", desc: "Anak-anak kadang dibawa jalan-jalan agar tidak merasa bosan di panti.", icon: "hiking", imageSrc: "/tentang/rekreasi.jpeg", caption: "Anak-anak kadang dibawa jalan-jalan agar tidak merasa bosan di panti.", urutan: 23 },
  { title: "Reunifikasi", desc: "Pertemuan kembali penerima manfaat dengan keluarga.", icon: "family_restroom", imageSrc: "/tentang/reunifikasi.jpeg", caption: "Pertemuan kembali penerima manfaat dengan keluarga.", urutan: 24 },
];

const galeriPosterData: Prisma.GaleriItemCreateInput[] = [
  { kategori: KategoriGaleri.POSTER, title: "Tata Cara Sholat", imageSrc: "/galeri/sholat.jpg", urutan: 0 },
  { kategori: KategoriGaleri.POSTER, title: "Panduan Wudhu", imageSrc: "/galeri/wudhu.jpg", urutan: 1 },
  { kategori: KategoriGaleri.POSTER, title: "Makanan Sehat vs Makanan Cepat Saji", imageSrc: "/galeri/sehat_vs_saji.jpg", urutan: 2 },
  { kategori: KategoriGaleri.POSTER, title: "Makanan Sehat", imageSrc: "/galeri/makan sehat.jpg", urutan: 3 },
  { kategori: KategoriGaleri.POSTER, title: "Huruf Braille", imageSrc: "/galeri/braille.jpg", urutan: 4 },
  { kategori: KategoriGaleri.POSTER, title: "Bisindo", imageSrc: "/galeri/bisindo.jpg", urutan: 5 },
  { kategori: KategoriGaleri.POSTER, title: "Tata Cara Cuci Tangan", imageSrc: "/galeri/cuci-tangan.jpg", urutan: 6 },
  { kategori: KategoriGaleri.POSTER, title: "Tata Cara Sikat Gigi", imageSrc: "/galeri/sikat gigi.jpg", urutan: 7 },
];

const galeriVideoData: Prisma.GaleriItemCreateInput[] = [
  { kategori: KategoriGaleri.VIDEO, title: "Pentingnya Sanitasi Lingkungan", desc: "Panduan menjaga kebersihan diri dan area panti untuk kesehatan bersama.", tag: "Kesehatan", imageSrc: "https://youtu.be/q7nkwaoWEnU?si=sS4gl5tmxJRNsK-B", urutan: 0 },
  { kategori: KategoriGaleri.VIDEO, title: "Metode Braille Menyenangkan", desc: "Belajar teknik membaca dan menulis Braille dengan cara yang inovatif.", tag: "Keterampilan", imageSrc: "https://youtu.be/a9O2tpLgtWQ?si=wOyOGVSYvDfQsyw4", urutan: 1 },
  { kategori: KategoriGaleri.VIDEO, title: "tes", desc: "tes", tag: "tes", imageSrc: "https://youtu.be/Yy2v98O4mz4?si=Bj5iCq9E6Z22OFjV", urutan: 2 },
];

const galeriFotoData: Prisma.GaleriItemCreateInput[] = [
  { kategori: KategoriGaleri.FOTO, title: "Kelas Memasak", imageSrc: "/galeri/cook.jpg", tanggal: new Date(2024, 9, 1), urutan: 0 },
  { kategori: KategoriGaleri.FOTO, title: "Literasi Braille", imageSrc: "/galeri/braille1.jpg", tanggal: new Date(2024, 8, 1), urutan: 1 },
  { kategori: KategoriGaleri.FOTO, title: "Cuci Tangan", imageSrc: "/galeri/cucitangan1.jpg", tanggal: new Date(2024, 9, 1), urutan: 2 },
  { kategori: KategoriGaleri.FOTO, title: "Kemandirian", imageSrc: "/galeri/mandiri.jpg", tanggal: new Date(2024, 7, 1), urutan: 3 },
  { kategori: KategoriGaleri.FOTO, title: "Tausiyah", imageSrc: "/galeri/tausiyah.jpg", tanggal: new Date(2024, 6, 1), urutan: 4 },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
  }

  for (const h of homeData) {
    await prisma.home.upsert({
      where: { id: h.id },
      update: { judul: h.judul, imageUrl: h.imageUrl, urutan: h.urutan },
      create: h,
    });
  }

  const tentangKami = await prisma.tentangKami.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      judul: "Tentang Kami",
      isi: "Melayani dengan hati untuk mewujudkan kemandirian penyandang disabilitas sensorik melalui pendekatan yang humanis dan inovatif.",
    },
  });

  const allItems = [
    ...inovasiData.map((item) => ({ ...item, kategori: "INOVASI" as const, tentangKamiId: tentangKami.id })),
    ...dampakData.map((item) => ({ ...item, desc: null, kategori: "DAMPAK_POSITIF" as const, tentangKamiId: tentangKami.id })),
    ...pelayananData.map((item) => ({ ...item, kategori: "PELAYANAN_PANTI" as const, tentangKamiId: tentangKami.id })),
  ];

  for (const item of allItems) {
    const existing = await prisma.tentangKamiItem.findFirst({
      where: { kategori: item.kategori, urutan: item.urutan, tentangKamiId: item.tentangKamiId },
    });

    if (existing) {
      await prisma.tentangKamiItem.update({
        where: { id: existing.id },
        data: { title: item.title, desc: item.desc, icon: item.icon, imageSrc: item.imageSrc, caption: item.caption },
      });
    } else {
      await prisma.tentangKamiItem.create({ data: item });
    }
  }

  // Galeri items
  await prisma.galeriItem.deleteMany();
  const allGaleri = [...galeriPosterData, ...galeriVideoData, ...galeriFotoData];
  for (const item of allGaleri) {
    await prisma.galeriItem.create({ data: item });
  }
}

main();
