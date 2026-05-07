import { NextResponse } from "next/server";

export async function POST() {
  const token = process.env.WISE_API_TOKEN;
  const profileId = process.env.WISE_PROFILE_ID;

  if (!token || !profileId) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Wise/Wish pendiente de configurar. Agrega WISE_API_TOKEN y WISE_PROFILE_ID en Vercel.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    provider: "wise",
    message:
      "Base lista. La creación real de pago/transferencia se conecta cuando estén los datos finales.",
  });
}
