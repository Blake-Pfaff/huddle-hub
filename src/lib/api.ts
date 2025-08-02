export type League = "nba";

export const NBA_TEAMS_ENDPOINT =
  "https://api.balldontlie.io/v1/teams?per_page=30";

export type Team = {
  id: number;
  full_name: string;
  abbreviation: string;
  city: string;
  conference?: string;
  division?: string;
};

export const fetchTeams = async (): Promise<Team[]> => {
  const res = await fetch("/api/teams");
  console.log(res, "RES");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};
