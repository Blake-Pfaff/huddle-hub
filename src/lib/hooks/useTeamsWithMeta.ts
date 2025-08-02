import { useMemo } from "react";
import { useTeams } from "./useTeams";
import { teamMeta, TeamMeta } from "@/lib/teamMeta";
import { Team } from "@/lib/api";

export type TeamWithMeta = Team & Partial<TeamMeta>;

export function useTeamsWithMeta() {
  const { data: teams = [], ...rest } = useTeams();

  const extended = useMemo<TeamWithMeta[]>(
    () =>
      teams.map((team) => ({
        ...team,
        ...(teamMeta[team.id] ?? {}),
      })),
    [teams]
  );

  return { data: extended, ...rest };
}
