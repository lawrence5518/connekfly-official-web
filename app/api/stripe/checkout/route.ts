import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      message: "Pagos desactivados en la web APK tester de ConnekFly."
    },
    { status: 503 }
  );
}

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Pagos desactivados en la web APK tester de ConnekFly."
    },
    { status: 503 }
  );
}
