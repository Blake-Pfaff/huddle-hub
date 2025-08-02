import { useQuery } from "@tanstack/react-query";
import { fetchLeagues, League } from "../api";

export function useLeagues() {
  return useQuery<League[], Error>({
    queryKey: ["leagues"],
    queryFn: fetchLeagues,
    staleTime: 5 * 60 * 1000,
  });
}
