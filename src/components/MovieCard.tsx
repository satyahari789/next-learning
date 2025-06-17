import { Movie } from "@/types/movie";

export default function MovieCard({ title, genre }: Movie) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{genre.join(", ")}</p>
    </div>
  );
}