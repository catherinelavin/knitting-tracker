import Link from "next/link";
import ReactMarkdown from "react-markdown";
import DeleteYarn from "@/src/components/delete-yarn-button";

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
    <div className="yarn-card">
      <div className="yarn-card-header">
        <h2>{yarn.name}</h2>
        {yarn.colour && (
          <span className="yarn-badge">{yarn.colour}</span>
        )}
      </div>
      <div className="yarn-meta">
        {yarn.brand && <span className="yarn-meta-item">{yarn.brand}</span>}
        {yarn.weight && <span className="yarn-meta-item">{yarn.weight}</span>}
        {yarn.quantity && <span className="yarn-meta-item">{yarn.quantity} skein{yarn.quantity !== 1 ? "s" : ""}</span>}
      </div>
      {yarn.notes && <p className="yarn-notes">{yarn.notes}</p>}
    </div>
  );
}