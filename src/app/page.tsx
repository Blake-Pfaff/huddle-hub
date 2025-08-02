"use client";
import { useState } from "react";
import LeagueSelector from "@/components/LeagueSelector";
import TeamsGrid from "@/components/TeamsGrid";

export default function Page() {
  const [league, setLeague] = useState<string | null>(null);

  return (
    <main className="p-8">
      {!league ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Choose a League</h1>
          <LeagueSelector onSelect={setLeague} />
        </>
      ) : (
        <>
          <button
            className="mb-4 px-3 py-1 text-sm text-blue-600 underline"
            onClick={() => setLeague(null)}
          >
            ← Back
          </button>
          <h2 className="text-xl font-semibold mb-2">
            {league.toUpperCase()} Teams
          </h2>
          <TeamsGrid league={league} />
        </>
      )}
    </main>
  );
}
