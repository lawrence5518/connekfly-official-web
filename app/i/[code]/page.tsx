import { BrandMark, StatusPill } from "../../components/Brand";
import InviteBridge from "./InviteBridge";

type InvitePageProps = {
  params: Promise<{ code: string }>;
};

const apkUrl =
  process.env.NEXT_PUBLIC_CONNEKFLY_APK_URL ||
  "https://github.com/lawrence5518/connekfly-official-web/releases/latest/download/connekfly-tester.apk";

function cleanCode(value: string): string {
  try {
    return decodeURIComponent(value || "")
      .trim()
      .replace(/[^a-zA-Z0-9_-]/g, "")
      .slice(0, 80);
  } catch {
    return "";
  }
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { code } = await params;
  const inviteCode = cleanCode(code);

  return (
    <main className="invite-shell">
      <div className="sky-glow sky-glow-a" />
      <section className="invite-panel glass-xl">
        <BrandMark />
        <StatusPill>Invitación ConnekFly</StatusPill>

        {inviteCode ? (
          <>
            <h1>Te invitaron a conectar en ConnekFly.</h1>
            <p>
              Descarga la aplicación y conserva esta página. Al terminar la
              instalación, vuelve aquí para abrir ConnekFly con la invitación.
            </p>

            <div className="invite-code-box">
              <span>Código de invitación</span>
              <strong>{inviteCode}</strong>
            </div>

            <InviteBridge inviteCode={inviteCode} apkUrl={apkUrl} />
          </>
        ) : (
          <div className="invite-error" role="alert">
            <h1>Invitación no válida</h1>
            <p>Este enlace no contiene un código de invitación válido.</p>
          </div>
        )}

        <a className="mini-button invite-home" href="/">
          Volver a la web oficial
        </a>
      </section>
    </main>
  );
}
