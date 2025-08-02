import { useQuery } from "@tanstack/react-query";
import { fetchTeams, Team } from "../api";

export function useTeams() {
  return useQuery<Team[], Error>({
    queryKey: ["teams"],
    queryFn: () => fetchTeams(),
    staleTime: 5 * 60 * 1000,
  });
}
