"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/src/lib/prisma";
import { ensureUserExists } from "@/src/lib/ensureUserExists";

export async function createYarn(formData: FormData){
    try{
        const userId = await ensureUserExists();

        if (!userId){
            redirect("/sign-in");
        }

        const name = String(formData.get("name") ?? "").trim();
        const brand = String(formData.get("brand") ?? "").trim();  
        const weight = String(formData.get("weight") ?? "").trim() || null;
        const colour = String(formData.get("colour") ?? "").trim() || null;
        const quantityRaw = formData.get("quantity");
        const quantity = quantityRaw ? parseInt(String(quantityRaw)) : null;
        const notes = String(formData.get("notes") ?? "").trim() || null;      

        if (!name){
            throw new Error("Name is required");
        }
        await prisma.yarn.create({
            data: {
                name,
                brand,
                weight,
                colour,
                quantity,
                notes,
                user: { connect: { id: userId}}
            }
        });
    }
    catch (error) {
        throw error;
    }
    revalidatePath("/");
        redirect("/");
}

export async function deleteYarn(id: string){
    const userId = await ensureUserExists();

    if (!userId){
        redirect("/sign-in");
    }

    const yarn = await prisma.yarn.findUnique({
        where: { id },
        select: { userId: true }
    });

    if (!yarn || yarn.userId !== userId){
        throw new Error("Yarn not found or you don't have permission to delete it");
    }

    await prisma.yarn.delete({ where: { id } });
    revalidatePath("/");
    redirect("/");
}