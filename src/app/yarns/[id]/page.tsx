import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "@/src/lib/prisma";


type YarnPageProps = {
    params: Promise<{ id: string }>;
};

export default async function YarnPage({ params }: YarnPageProps) {
    const { id } = await params;
    const yarn = await prisma.yarn.findUnique({
        where: { id },
        include: {
            user: {
                select: {name: true },
            },
        },
    });
    if(!yarn) {
        notFound();
    }

    const title = yarn.name;

    return (
        <article className="panel">
            <h1>{title}</h1>
            <p className="meta">By {yarn.user?.name ?? "Unknown user"}</p>
            {yarn.brand ? <ReactMarkdown>{yarn.brand}</ReactMarkdown> : null}
        </article>
    );
    
}