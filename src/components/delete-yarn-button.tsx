import { deleteYarn } from "@/src/app/yarns/actions";

export default function DeleteYarn({ yarn }: { yarn: { id: string } }) {
    return (
        <form action={deleteYarn.bind(null, yarn.id)}>
            <button type="submit">
            Delete 
            </button>
        </form>
    )
}
