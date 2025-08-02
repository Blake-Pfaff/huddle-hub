export type League = "nba" | "nfl" | "mlb" | "epl";

export const fetchLeagues = async (): Promise<League[]> => {
  return ["nba", "nfl", "mlb", "epl"];
};

export const leagueToTeamEndpoint: Record<League, string> = {
  nba: "https://api.balldontlie.io/v1/teams?per_page=30",
  nfl: "",
  mlb: "",
  epl: "",
};

export type Team = {
  id: number;
  full_name: string;
  abbreviation: string;
  city: string;
  conference?: string;
  division?: string;
};

export const fetchTeams = async (league: League): Promise<Team[]> => {
  const res = await fetch(`/api/teams?league=${league}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};
