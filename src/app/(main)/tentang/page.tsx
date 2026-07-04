import prisma from "@/lib/prisma";
import TentangContent from "@/components/tentang-content";

export default async function Tentang() {
  const tentangKami = await prisma.tentangKami.findFirst({
    include: {
      items: {
        orderBy: { urutan: "asc" },
      },
    },
  });

  const items = tentangKami?.items ?? [];

  const data = {
    judul: tentangKami?.judul ?? "Tentang Kami",
    isi: tentangKami?.isi ?? "",
    inovasi: items.filter((i) => i.kategori === "INOVASI"),
    dampak: items.filter((i) => i.kategori === "DAMPAK_POSITIF"),
    pelayanan: items.filter((i) => i.kategori === "PELAYANAN_PANTI"),
  };

  return <TentangContent data={data} />;
}
