import Link from "next/link";
import ReactMarkdown from "react-markdown";

export type YarnCardData = {
  id: string;
  name: string;
  brand: string | null;
  weight: string | null;
  colour: string | null;
  quantity: number | null;
  notes: string | null;

  userId: string;
  user: {
    name: string | null;
  } | null;
};

export default function YarnCard({ yarn }: { yarn: YarnCardData }) {
  return (
    <Link className="yarn-card" href={`/yarns/${yarn.id}`}>
      <h2>{yarn.name}</h2>
      <p className="meta">By {yarn.user?.name ?? "Unknown user"}</p>
      {yarn.brand ? <ReactMarkdown>{yarn.brand}</ReactMarkdown> : null}
    </Link>
  );
}