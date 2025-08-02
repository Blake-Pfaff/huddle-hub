"use client";
import { useState } from "react";
import { useTeams } from "@/lib/hooks/useTeams";
import TeamsGrid from "@/components/TeamsGrid";

export default function Page() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const { data: teams, isLoading, error } = useTeams();

  if (isLoading) return <p>Loading teams…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-8">
      {selectedTeamId === null ? (
        <>
          <h1 className="text-2xl font-bold mb-4">NBA Teams</h1>
          <div className="flex flex-wrap gap-2">
            {teams!.map((team) => (
              <button
                key={team.id}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setSelectedTeamId(team.id)}
              >
                {team.abbreviation}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            className="mb-4 px-3 py-1 text-sm text-blue-600 underline"
            onClick={() => setSelectedTeamId(null)}
          >
            ← Back to teams
          </button>
          <h2 className="text-xl font-semibold mb-2">
            {teams!.find((t) => t.id === selectedTeamId)?.full_name}
          </h2>
          {/* TODO: fetch & display more details (roster, stats, etc.) */}
        </>
      )}
    </main>
  );
}
