import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request){
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, {status: 401});
        
    }

    const { name, brand} = await req.json();

    const yarn = await prisma.yarn.create({
        data: {
            name,
            brand,
            userId,
        },
    });

    return NextResponse.json(yarn);
}