import Link from "next/link";
import { createYarn } from "@/src/app/yarns/actions";
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
            <form action={createYarn} method="post" className="form">
                <h1>Add Yarn</h1>
                <label className="field">
                    <span>Name *</span>
                    <input autoFocus name="name" placeholder="e.g. Soft Merino" required />
                </label>
                <label className="field">
                    <span>Brand</span>
                    <input name="brand" placeholder="e.g. Drops" />
                </label>
                <label className="field">
                    <span>Weight</span>
                    <select name="weight">
                        <option value="">Select weight</option>
                        <option>Lace</option>
                        <option>Fingering</option>
                        <option>Sport</option>
                        <option>DK</option>
                        <option>Worsted</option>
                        <option>Bulky</option>
                        <option>Super Bulky</option>
                    </select>
                </label>
                <label className="field">
                    <span>Colour</span>
                    <input name="colour" placeholder="e.g. Dusty Rose" />
                </label>
                <label className="field">
                    <span>Quantity (skeins)</span>
                    <input name="quantity" type="number" min="1" placeholder="1" />
                </label>
                <label className="field">
                    <span>Notes</span>
                    <textarea name="notes" placeholder="Any extra details..." />
                </label>
                <div className="actions">
                    <button type="submit">Add Yarn</button>
                    <Link className="button secondary" href="/">Cancel</Link>
                </div>
            </form>
        </div>
    );

}