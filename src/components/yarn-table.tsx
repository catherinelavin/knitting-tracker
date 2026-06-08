import YarnCard, { type YarnCardData} from "@/src/components/yarn-card";
import { ensureUserExists} from "@/src/lib/ensureUserExists";
import prisma from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export default async function YarnTable() {
    const user = await ensureUserExists();

    if (!user) {
        redirect("/sign-in");
    }

    const yarnTable = await prisma.yarn.findMany({
    where: {
        userId: user,
    },
    include: {
        user: {
            select: {
                name: true,
            },
        },
    },
    orderBy: { id: "desc" },
    })

    return (
        <div className="stack">
            <h1>My Yarn</h1>
            {yarnTable.length ? (
                yarnTable.map((yarn) => <YarnCard key={yarn.id} yarn={yarn} />)
            ) : (
                <div className="panel"> You don't have any yarns yet </div>
            )}
        </div>
    )
}