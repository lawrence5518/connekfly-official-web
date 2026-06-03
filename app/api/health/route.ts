import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: "ConnekFly Official Web",
    mode: "apk-tester"
  });
}
