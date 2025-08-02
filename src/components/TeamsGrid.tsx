"use client";
import { useTeamsWithMeta } from "@/lib/hooks/useTeamsWithMeta";
import type { TeamWithMeta } from "@/lib/hooks/useTeamsWithMeta";

export default function TeamsGrid({
  onSelect,
}: {
  onSelect?: (teamId: number) => void;
}) {
  const { data: teams = [], isLoading, error } = useTeamsWithMeta();

  if (isLoading) return <p>Loading teams…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {teams.map((team: TeamWithMeta) => (
        <div
          key={team.id}
          onClick={() => onSelect?.(team.id)}
          className="cursor-pointer rounded-lg overflow-hidden shadow hover:scale-105 transition-transform"
          style={{
            backgroundColor: team.primaryColor ?? "#eee",
            color: team.secondaryColor ?? "#000",
          }}
        >
          {team.logoUrl && (
            <img
              src={team.logoUrl}
              alt={`${team.full_name} logo`}
              className="w-full h-24 object-contain bg-white p-2"
            />
          )}
          <div className="p-2 text-center">
            <h3 className="font-bold">{team.abbreviation}</h3>
            <p className="text-sm">{team.full_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
