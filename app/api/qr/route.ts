import QRCode from "qrcode";
import { NextRequest, NextResponse } from "next/server";
import { inviteUrl, normalizeCode } from "@/lib/invite";

export async function GET(request: NextRequest) {
  const code = normalizeCode(request.nextUrl.searchParams.get("code"));
  const target = request.nextUrl.searchParams.get("url") || inviteUrl(code);

  const svg = await QRCode.toString(target, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#101426", light: "#ffffff" },
    width: 320
  });

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=60"
    }
  });
}
