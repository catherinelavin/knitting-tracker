import Link from "next/link";
import YarnCard, { type YarnCardData } from "@/src/components/yarn-card";
import prisma from "@/src/lib/prisma";

export const dynamic = "force-dynamic";

export default async function FeedPage(){
    const feed = await prisma.yarn.findMany({
        include: {user: { select: {name: true}}},
        orderBy: {createdAt: "desc"},

    });

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>My Yarn Stash</h1>
                    <p>{feed.length} {feed.length === 1 ? "yarn" : "yarns"} in your collection</p>
                </div>
                <Link href="/yarns/create" className="button">+ Add Yarn</Link>
            </div>
            {feed.length ? (
                <div className="yarn-grid">
                    {feed.map((yarn: YarnCardData) => (
                        <YarnCard key={yarn.id} yarn={yarn} />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <h2>No yarn yet</h2>
                    <p>Add your first skein to get started</p>
                </div>
            )}
        </div>
    )
}