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
        <div
          key={team.id}
          onClick={() => onSelect?.(team.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelect?.(team.id)
            }
          }}
          tabIndex={onSelect ? 0 : -1}
          role="button"
          aria-label={`Select ${team.full_name}`}
        <div
          key={team.id}
          onClick={() => onSelect?.(team.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelect?.(team.id)
            }
          }}
          tabIndex={onSelect ? 0 : -1}
          role="button"
          aria-label={`Select ${team.full_name}`}
          className="cursor-pointer rounded-lg overflow-hidden shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: team.primaryColor ?? "#eee",
            color: team.secondaryColor ?? "#000",
          }}
        >
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
