import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Header(){
    const { userId } = await auth();

    return (
        <header className="header">
            <Link href="/" className="header-logo">
                stitch<span>track</span>
            </Link>
            <div className="header-actions">
                {userId && (
                    <Link href="/yarns/create" className="button">
                        + Add Yarn
                    </Link>
                )}
                <UserButton />
            </div>
        </header>
    );
}