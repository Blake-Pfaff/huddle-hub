import { NextResponse } from "next/server";
import { leagueToTeamEndpoint, Team, League } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const league = (searchParams.get("league") || "nba") as League;
  const url = leagueToTeamEndpoint[league];

  try {
    const apiKey = process.env.BALLDONTLIE_KEY;
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey!,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error(
        "[api/teams] upstream status:",
        res.status,
        await res.text()
      );
      return NextResponse.json(
        { error: "Upstream error", status: res.status },
        { status: 502 }
      );
    }

    // sanity‐check the content type
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      console.error("[api/teams] wrong content-type:", contentType);
      return NextResponse.json(
        { error: "Upstream did not return JSON" },
        { status: 502 }
      );
    }

    const json = await res.json();
    const teams: Team[] = json.data;
    return NextResponse.json(teams);
  } catch (err) {
    console.error("[api/teams] fetch failed", err);
    return NextResponse.json({ error: "Fetch exception" }, { status: 502 });
  }
}
