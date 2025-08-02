"use client";
import { useTeams } from "@/lib/hooks/useTeams";

export default function TeamsGrid({ league }: { league: string }) {
  const { data: teams, isLoading, error } = useTeams(league as any);

  if (isLoading) return <p>Loading teams…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {teams?.map((team) => (
        <div
          key={team.id}
          className="p-4 bg-white rounded shadow hover:shadow-lg transition"
        >
          <p className="font-semibold">{team.full_name}</p>
          <p className="text-sm text-gray-500">{team.city}</p>
        </div>
      ))}
    </div>
  );
}
