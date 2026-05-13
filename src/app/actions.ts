"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/src/lib/prisma";

export async function createYarn(formData: FormData){
    const { userId } = await auth();

    if (!userId){
        redirect("/sign-in");
    }

    const name = String(formData.get("Name") ?? "").trim();
    const brand = String(formData.get("Brand") ?? "").trim();

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
}