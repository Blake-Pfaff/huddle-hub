"use client";
import { useTeams } from "@/lib/hooks/useTeams";
import { motion } from "framer-motion";

export default function TeamSelector({
  onSelect,
}: {
  onSelect: (teamId: number) => void;
}) {
  const { data: teams, isLoading, error } = useTeams();

  if (isLoading)
    return (
      <p role="status" aria-live="polite">
        Loading teams…
      </p>
    );
  if (error)
    return (
      <p role="alert" aria-live="assertive">
        Error: {error?.message || "Failed to load teams"}
      </p>
    );

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      role="group"
      aria-label="Select NBA team"
    >
      {teams?.map((team) => (
        <button
          key={team.id}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => onSelect(team.id)}
        >
          {team.abbreviation}
        </button>
      ))}
    </motion.div>
  );
}
