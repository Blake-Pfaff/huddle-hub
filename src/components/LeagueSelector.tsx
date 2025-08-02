"use client";
import { motion } from "framer-motion";
import { useLeagues } from "@/lib/hooks/useLeagues";

export default function LeagueSelector({
  onSelect,
}: {
  onSelect: (league: string) => void;
}) {
  const { data: leagues, isLoading, error } = useLeagues();

  if (isLoading) return <p>Loading leagues…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {leagues!.map((l) => (
        <button
          key={l}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => onSelect(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </motion.div>
  );
}
