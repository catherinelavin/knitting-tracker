"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/src/lib/prisma";
import { ensureUserExists } from "@/src/lib/ensureUserExists";

export async function createYarn(formData: FormData){
    const userId = await ensureUserExists();

    if (!userId){
        redirect("/sign-in");
    }

    const name = String(formData.get("name") ?? "").trim();
    const brand = String(formData.get("brand") ?? "").trim();

    if (!name){
        throw new Error("Name is required");
    }

    await prisma.yarn.create({
        data: {
            name,
            brand,
            user: { connect: { id: userId}}
        }
    });

    revalidatePath("/");
    redirect("/");
}