import { auth, currentUser } from"@clerk/nextjs/server";
import  prisma  from "@/src/lib/prisma";

export async function ensureUserExists(){
    const { userId } = await auth();

    if(!userId) {
        throw new Error("Not logged in");
    }

    const user = await currentUser();

    await prisma.user.upsert({
        where: { id: userId },
        update: {
            email: user?.emailAddresses[0]?.emailAddress ?? "",
            name: user?.firstName ?? null,
        },
        create: {
            id: userId,
            email: user?.emailAddresses[0]?.emailAddress ?? "",
            name: user?.firstName ?? null,
        },
    });

    return userId;
}