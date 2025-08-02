import { useQuery } from "@tanstack/react-query";
import { fetchTeams, Team, League } from "../api";

export function useTeams(league: League | null) {
  return useQuery<Team[], Error>({
    queryKey: ["teams", league],
    queryFn: () => {
      if (league !== "nba") return Promise.resolve([]);
      return fetchTeams("nba");
    },
    enabled: !!league,
    staleTime: 5 * 60 * 1000,
  });
}
