import { BrandMark, StatusPill } from "./components/Brand";

const apkUrl = process.env.NEXT_PUBLIC_CONNEKFLY_APK_URL || "";
const playUrl = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ConnekFly.app@gmail.com";

export default function OfficialHomePage() {
  return (
    <main className="page-shell">
      <header className="nav">
        <BrandMark />
        <nav className="nav-links">
          <a href="#descarga">Descarga</a>
          <a href="#ecosistema">Ecosistema</a>
          <a href="#pagos">Pagos</a>
          <a href="#planes">Planes</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-card">
          <div className="status-row">
            <StatusPill>Web oficial</StatusPill>
            <StatusPill tone="green">APK pruebas</StatusPill>
            <StatusPill tone="gold">Stripe + Wise/Wish</StatusPill>
          </div>

          <h1>ConnekFly está naciendo como ecosistema real.</h1>

          <p>
            La web oficial será el centro público: descarga de APK, planes, tokens,
            stickers, avatares, boosts oficiales y contacto directo con ConnekFly.
          </p>

          <div id="descarga" className="hero-actions">
            {apkUrl ? (
              <a className="primary-button" href={apkUrl}>Descargar APK</a>
            ) : (
              <span className="primary-button">APK pendiente de subir</span>
            )}

            {playUrl ? (
              <a className="soft-button" href={playUrl}>Google Play</a>
            ) : (
              <span className="soft-button">Google Play pendiente</span>
            )}

            <a className="soft-button" href={`mailto:${contactEmail}`}>
              Contacto oficial
            </a>
          </div>
        </div>

        <aside className="panel">
          <h3>ConnekFly combina</h3>
          <ul>
            <li>Chat, Wall, Tik, Place y Go como entrada social.</li>
            <li>CRM como núcleo de monetización.</li>
            <li>Wallet/Tokens para funciones internas oficiales.</li>
            <li>LIA como inteligencia invisible y guardiana.</li>
          </ul>
        </aside>
      </section>

      <section id="ecosistema" className="section">
        <div className="section-header">
          <div>
            <h2>Ecosistema</h2>
            <p className="section-lead">
              Social Free atrae usuarios; CRM, tokens, boosts y Workstation generan renta.
            </p>
          </div>
        </div>

        <div className="grid-3">
          <article className="feature-card">
            <h3>Social Free</h3>
            <p>Chat, publicaciones, vitrinas, ubicación y contenido compartible.</p>
          </article>
          <article className="feature-card">
            <h3>CRM</h3>
            <p>Clientes, nichos, señales de LIA y oportunidades reales.</p>
          </article>
          <article className="feature-card">
            <h3>Tokens</h3>
            <p>Boosts, destacados, stickers, avatares y funciones premium internas.</p>
          </article>
        </div>
      </section>

      <section id="pagos" className="section">
        <div className="section-header">
          <div>
            <h2>Pagos oficiales</h2>
            <p className="section-lead">
              Solo pagos oficiales del ecosistema ConnekFly. No custodia dinero de terceros.
            </p>
          </div>
        </div>

        <div className="grid-2">
          <article className="plan-card">
            <StatusPill>Stripe</StatusPill>
            <h3>Tokens / CRM Pro</h3>
            <p>Checkout preparado para tokens y suscripciones oficiales.</p>
            <form action="/api/stripe/checkout" method="post" className="card-actions">
              <input type="hidden" name="product" value="tokens" />
              <button className="primary-button" type="submit">Comprar tokens</button>
            </form>
          </article>

          <article className="plan-card">
            <StatusPill tone="gold">Wise/Wish</StatusPill>
            <h3>Pagos alternativos</h3>
            <p>Base preparada para conectar el proveedor cuando estén los datos finales.</p>
            <form action="/api/wise/create-intent" method="post" className="card-actions">
              <button className="soft-button" type="submit">Preparar pago</button>
            </form>
          </article>
        </div>
      </section>

      <section id="planes" className="section">
        <div className="grid-3">
          <article className="plan-card">
            <StatusPill>Free</StatusPill>
            <h3>Social Free</h3>
            <p>Entrada orgánica, comunidad y viralidad.</p>
          </article>
          <article className="plan-card">
            <StatusPill tone="gold">Pro</StatusPill>
            <h3>CRM Pro</h3>
            <p>Plan principal para negocios, equipos y señales LIA.</p>
          </article>
          <article className="plan-card">
            <StatusPill>Workstation</StatusPill>
            <h3>Web empresarial</h3>
            <p>Herramienta superior para productividad y equipos.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
