import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "@/src/lib/prisma";
import { auth } from "@clerk/nextjs/server";


type YarnPageProps = {
    params: Promise<{ id: string }>;
};

export default async function YarnPage({ params }: YarnPageProps) {
    const { id } = await params;
    const [user, yarn] = await Promise.all([
        auth(),
        prisma.yarn.findUnique({
            where: { id },
            include: {
                user: {
                    select: {name: true },
                },
            },
        }),
    ]);

    if(!yarn) {
        notFound();
    }

    const yarnBelongsToUser = user.userId === yarn.userId;
    const name = yarn.name;

    return (
        <article className="panel">
            <h1>{name}</h1>
            <p className="meta">By {yarn.user?.name ?? "Unknown user"}</p>
            <ReactMarkdown>{yarn.brand}</ReactMarkdown>
        </article>
    );
    
}