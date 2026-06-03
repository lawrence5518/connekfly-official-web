import { SUPPORT_EMAIL } from "@/lib/constants";
import { apkDownloadUrl, inviteUrl, normalizeCode } from "@/lib/invite";
import { InviteActions } from "@/components/InviteActions";
import { PhonePreview } from "@/components/PhonePreview";

type Props = { params: { code: string } };

export default function InvitePage({ params }: Props) {
  const code = normalizeCode(params.code);
  const link = inviteUrl(code);
  const download = apkDownloadUrl(code);

  return (
    <main className="page">
      <div className="shell">
        <nav className="nav">
          <div className="brand">
            <span className="logo"><span className="logo-mark" /></span>
            <span>Connek<span className="gradient">Fly</span></span>
          </div>
          <div className="nav-pill">APK tester oficial</div>
        </nav>

        <section className="hero">
          <div className="card hero-card">
            <div className="kicker">QR único · Link de invitación · Descarga oficial</div>
            <h1>Connek<span className="gradient">Fly</span> ya está listo para probar.</h1>
            <p className="lead">
              Descarga la APK tester y entra al ecosistema social/comercial:
              Chat, Wall, FlyMarket y SmartCRM móvil.
            </p>

            <InviteActions referralCode={code} inviteLink={link} downloadLink={download} />

            <div className="status-row">
              <span className="status">Chat</span>
              <span className="status">Wall</span>
              <span className="status">FlyMarket</span>
              <span className="status">SmartCRM</span>
            </div>
          </div>

          <div className="card phone-wrap">
            <PhonePreview />
          </div>
        </section>

        <section className="card qr-area">
          <div className="qr-grid">
            <div className="qr-box">
              <img src={`/api/qr?code=${encodeURIComponent(code)}&url=${encodeURIComponent(link)}`} alt="QR de invitación ConnekFly" />
            </div>

            <div>
              <div className="code">{code}</div>
              <h2 style={{ margin: "0 0 8px", letterSpacing: "-0.04em" }}>
                Link único de invitación
              </h2>
              <p className="lead" style={{ fontSize: 16, marginBottom: 10 }}>
                Comparte este link o QR. La persona entra a la web oficial,
                descarga la APK y queda asociada al código de invitación.
              </p>
              <input className="link-box" readOnly value={link} />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Social primero</h3>
            <p>Prueba chat, Wall, perfiles, media, contactos y comunidad.</p>
          </div>
          <div className="feature">
            <h3>FlyMarket conectado</h3>
            <p>Publica productos o servicios y contacta por chat directo.</p>
          </div>
          <div className="feature">
            <h3>CRM como apoyo</h3>
            <p>SmartCRM organiza interesados, clientes, agenda y catálogo.</p>
          </div>
        </section>

        <footer className="footer">
          Soporte: {SUPPORT_EMAIL} · ConnekFly APK tester
        </footer>
      </div>
    </main>
  );
}
