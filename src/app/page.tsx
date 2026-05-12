import Image from "next/image";
import YarnCard, { type YarnCardData } from "@/src/components/yarn-card";
import prisma from "@/src/lib/prisma";

export const revalidate = 10;

export default async function FeedPage() {
  const feed = await prisma.yarn.findMany({
    include: {
      user: {
        select: { name: true},
      },
    },
    orderBy: { id: "desc" },
  });

  return (
    <div className="stack">
      <h1>Yarn</h1>
      {feed.length ? (
        feed.map((yarn: YarnCardData) => <YarnCard key={yarn.id} yarn={yarn} />)
      ) : (
        <div className = "panel"> No published yarns yet. </div>
      )}
    </div>
  )
  
}