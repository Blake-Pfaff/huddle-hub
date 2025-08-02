import { NextResponse } from "next/server";
import { NBA_TEAMS_ENDPOINT, Team } from "@/lib/api";

export async function GET() {
  try {
    const apiKey = process.env.BALLDONTLIE_KEY!;
    const res = await fetch(NBA_TEAMS_ENDPOINT, {
      headers: { Authorization: apiKey, Accept: "application/json" },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[api/teams] upstream status:", res.status, text);
      return NextResponse.json(
        { error: "Upstream error", status: res.status },
        { status: 502 }
      );
    }

    const contentType = res.headers.get("content-type")!;
    if (!contentType.includes("application/json")) {
      console.error("[api/teams] wrong content-type:", contentType);
      return NextResponse.json(
        { error: "Upstream did not return JSON" },
        { status: 502 }
      );
    }

    const { data }: { data: Team[] } = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("[api/teams] fetch failed", err);
    return NextResponse.json({ error: "Fetch exception" }, { status: 502 });
  }
}
