import { BrandMark, StatusPill } from "../../components/Brand";

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
  const downloadWithRef = `${apkUrl}?ref=${encodeURIComponent(inviteCode)}`;
  const openApp = `connekfly://invite/${encodeURIComponent(inviteCode)}`;

  return (
    <main className="invite-shell">
      <div className="sky-glow sky-glow-a" />
      <section className="invite-panel glass-xl">
        <BrandMark />
        <StatusPill>Invitación ConnekFly</StatusPill>
        <h1>Te invitaron a conectar en ConnekFly.</h1>
        <p>
          Abre la app si ya la tienes instalada. Si todavía no la tienes, descarga la APK tester oficial y vuelve a abrir este enlace.
        </p>
        <div className="invite-code-box">
          <span>Código de invitación</span>
          <strong>{inviteCode || "CONNEKFLY"}</strong>
        </div>
        <div className="hero-actions centered">
          <a className="primary-button big" href={openApp}>Abrir ConnekFly</a>
          <a className="soft-button big" href={downloadWithRef}>Descargar APK</a>
        </div>
        <a className="mini-button" href="/">Volver a la web oficial</a>
      </section>
    </main>
  );
}
