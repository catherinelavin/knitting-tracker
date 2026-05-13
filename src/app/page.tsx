import Link from "next/link";
import { createYarn } from "@/src/app/actions";
import { auth } from "@clerk/nextjs/server";

export default async function CreateYarn(){
    const { userId } = await auth();
    
    if (!userId) {
        return (
            <div className="panel">
                <h1>Add a Yarn</h1>
                <p>You need to be authenticated to add a yarn</p>
            </div>
        );
    }

    return (
        <div className="panel">
            <form action={createYarn} className="form">
                <h1>Add a Yarn</h1>
                <label className="field">
                    <span>Name</span>
                    <input autoFocus name="name" placeholder="Name" required />
                </label>
                <label className="field">
                    <span>Brand</span>
                    <input name="brand" placeholder="Brand" />
                </label>
                <div className="actions">
                    <button type="submit">Create</button>
                    <Link className="button secondary" href="/">
                        Cancel 
                    </Link>
                </div>
            </form>
        </div>
    );
}