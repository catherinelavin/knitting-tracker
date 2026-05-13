"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/src/lib/prisma";
import { ensureUserExists } from "@/src/lib/ensureUserExists";

export async function createYarn(formData: FormData){

    console.log("CREATE YARN ACTION STARTED");

    try{
        const userId = await ensureUserExists();
        console.log("USER EXISTS:", userId);

        if (!userId){
            redirect("/sign-in");
        }

        const name = String(formData.get("name") ?? "").trim();
        const brand = String(formData.get("brand") ?? "").trim();

        if (!name){
            throw new Error("Name is required");
        }

        const yarn = await prisma.yarn.create({
            data: {
                name,
                brand,
                user: { connect: { id: userId}}
            }
        });

        console.log("YARN CREATED:", yarn);
        revalidatePath("/");
        redirect("/");
    }
    catch (error) {
        console.error("CREATE YARN FAILED:", error);
        throw error;
    }
}