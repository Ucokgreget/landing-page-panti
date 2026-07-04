import prisma from "@/lib/prisma";
import HomeContent from "@/components/home-content";

export default async function Home() {
  const slides = await prisma.home.findMany({
    where: { status: "ACTIVE" },
    orderBy: { urutan: "asc" },
  });

  return <HomeContent slides={slides} />;
}
