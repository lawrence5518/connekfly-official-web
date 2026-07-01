import { BrandMark, StatusPill } from "../../components/Brand";

const APK_URL =
  process.env.NEXT_PUBLIC_CONNEKFLY_APK_URL ||
  "https://github.com/lawrence5518/connekfly-official-web/releases/latest/download/connekfly-tester.apk";

function cleanInviteCode(value: string): string {
  return value.trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}

export default async function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const inviteCode = cleanInviteCode(code || "");
  const downloadUrl = `${APK_URL}${APK_URL.includes("?") ? "&" : "?"}ref=${encodeURIComponent(inviteCode)}`;
  const appIntentUrl = `intent://invite/${encodeURIComponent(inviteCode)}#Intent;scheme=connekfly;package=com.connekfly.app;S.invite_code=${encodeURIComponent(inviteCode)};S.ref=${encodeURIComponent(inviteCode)};end`;

  return (
    <main className="page-shell invite-page">
      <header className="nav">
        <BrandMark />
        <nav className="nav-links">
          <a href="/">Inicio</a>
          <a href={downloadUrl}>Descargar APK</a>
        </nav>
      </header>

      <section className="hero invite-hero">
        <div className="hero-card invite-card">
          <div className="status-row">
            <StatusPill tone="green">Invitación ConnekFly</StatusPill>
            <StatusPill>Acceso seguro</StatusPill>
          </div>

          <h1>Te invitaron a ConnekFly.</h1>
          <p>
            Abre ConnekFly para aceptar la invitación. Si todavía no tienes la app,
            descarga la APK oficial y vuelve a este enlace después de instalarla.
          </p>

          <div className="invite-code-box">
            <span>Código de invitación</span>
            <strong>{inviteCode || "INVITACIÓN"}</strong>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href={appIntentUrl}>Abrir ConnekFly</a>
            <a className="soft-button" href={downloadUrl}>Descargar APK</a>
            <a className="soft-button" href="/">Ver web oficial</a>
          </div>
        </div>

        <aside className="panel invite-panel">
          <h3>¿Cómo funciona?</h3>
          <ul>
            <li>Si tienes la app instalada, toca <strong>Abrir ConnekFly</strong>.</li>
            <li>Si no la tienes, toca <strong>Descargar APK</strong>.</li>
            <li>Después de instalar, vuelve a este enlace para aceptar la invitación.</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
