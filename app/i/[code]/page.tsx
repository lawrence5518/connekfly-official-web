import { BrandMark, StatusPill } from "../../components/Brand";
import InviteActions from "./InviteActions";

type InvitePageProps = {
  params: Promise<{ code: string }>;
};

const apkUrl =
  process.env.NEXT_PUBLIC_CONNEKFLY_APK_URL ||
  "https://github.com/lawrence5518/connekfly-official-web/releases/latest/download/connekfly-tester.apk";

function cleanCode(code: string) {
  return decodeURIComponent(code || "")
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 80);
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
        <h1>Te invitaron a conectar en ConnekFly.</h1>
        <p>
          Este código se conservará temporalmente en el navegador para completar la conexión después de instalar la app.
        </p>
        <div className="invite-code-box">
          <span>Código de invitación</span>
          <strong>{inviteCode || "CONNEKFLY"}</strong>
        </div>

        {inviteCode ? (
          <InviteActions inviteCode={inviteCode} apkUrl={apkUrl} />
        ) : (
          <div className="invite-error" role="alert">
            El enlace no contiene un código de invitación válido.
          </div>
        )}

        <a className="mini-button invite-home-link" href="/">Volver a la web oficial</a>
      </section>
    </main>
  );
}

        </div>
        <a className="mini-button" href="/">Volver a la web oficial</a>
      </section>
    </main>
  );
}
