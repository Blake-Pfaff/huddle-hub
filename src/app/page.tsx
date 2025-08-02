"use client";
import { useState } from "react";
import TeamsGrid from "@/components/TeamsGrid";

export default function Page() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  return (
    <main className="p-8">
      {selectedTeamId === null ? (
        <>
          <h1 className="text-2xl font-bold mb-4">NBA Teams</h1>
          <TeamsGrid onSelect={setSelectedTeamId} />
        </>
      ) : (
        <>
          <button
            className="mb-4 px-3 py-1 text-sm text-blue-600 underline"
            onClick={() => setSelectedTeamId(null)}
          >
            ← Back to teams
          </button>
          <h2 className="text-xl font-semibold mb-2">TBD</h2>
        </>
      )}
    </main>
  );
}
