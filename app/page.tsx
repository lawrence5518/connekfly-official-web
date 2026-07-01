import { BrandMark, StatusPill } from "./components/Brand";

const apkUrl =
  process.env.NEXT_PUBLIC_CONNEKFLY_APK_URL ||
  "https://github.com/lawrence5518/connekfly-official-web/releases/latest/download/connekfly-tester.apk";

const openAppUrl = process.env.NEXT_PUBLIC_CONNEKFLY_OPEN_URL || "connekfly://home";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ConnekFly.app@gmail.com";

const features = [
  { title: "Chat", text: "Mensajes, audio, stickers, llamadas y contactos reales.", icon: "💬" },
  { title: "Wall", text: "Publica fotos, historias, enlaces y contenido visual.", icon: "🧩" },
  { title: "FlyMarket", text: "Vitrina social para productos, servicios y oportunidades.", icon: "🛍️" },
  { title: "SmartCRM", text: "Clientes, agenda, seguimiento y estación de trabajo móvil.", icon: "📊" },
  { title: "ConnekGo", text: "Explora, comparte y gana stickers únicos dentro del ecosistema.", icon: "📍" },
];

export default function OfficialHomePage() {
  return (
    <main className="site-shell">
      <div className="sky-glow sky-glow-a" />
      <div className="sky-glow sky-glow-b" />
      <header className="top-nav">
        <BrandMark />
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#ecosistema">Ecosistema</a>
          <a href="#descarga">Descarga</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#seguridad">Seguridad</a>
          <a href={`mailto:${contactEmail}`}>Contacto</a>
        </nav>
        <a className="top-cta" href={apkUrl}>APK tester oficial</a>
      </header>

      <section className="hero-premium" id="descarga">
        <div className="hero-copy glass-xl">
          <div className="hero-badge">⚡ Ecosistema social y comercial</div>
          <h1>
            Connek<span>Fly</span> te conecta con todo.
          </h1>
          <p>
            Chat, Wall, FlyMarket, SmartCRM y más. Un solo ecosistema para comunicarte,
            compartir, vender, organizar y hacer crecer tu mundo.
          </p>

          <div className="hero-actions">
            <a className="primary-button big" href={apkUrl}>Descargar APK</a>
            <a className="soft-button big" href={openAppUrl}>Abrir ConnekFly</a>
          </div>

          <div className="invite-card">
            <div className="qr-faux" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div>
              <strong>Conéctate con cualquier persona</strong>
              <p>Comparte tu código o escanea el de un amigo para entrar al ecosistema.</p>
              <a href="/i/demo" className="mini-button">Ver ejemplo de invitación</a>
            </div>
          </div>
        </div>

        <div className="phone-stage" aria-label="Vista del ecosistema ConnekFly">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone phone-main">
            <div className="phone-top"><BrandMark compact /><span>CF</span></div>
            <div className="phone-tabs"><b>Chat</b><b>Wall</b><b>FlyMarket</b><b>CRM</b></div>
            <div className="phone-search">Buscar...</div>
            <div className="story-row">
              {['LG','MA','JP','AN'].map((x) => <span key={x}>{x}</span>)}
            </div>
            <div className="chat-list">
              {['María González','Juan Pérez','Team Ventas','Ana Torres','Carlos M.'].map((name, index) => (
                <div className="chat-item" key={name}>
                  <i>{name.slice(0,1)}</i>
                  <div><strong>{name}</strong><small>{index === 2 ? 'Nueva campaña activa' : 'Mensaje recibido'}</small></div>
                  <em>{index === 4 ? 'Ayer' : '11:4' + index}</em>
                </div>
              ))}
            </div>
            <div className="phone-bar"><span>Chat</span><span>Wall</span><b>+</b><span>Go</span><span>Más</span></div>
          </div>

          <div className="phone phone-market">
            <div className="phone-top"><strong>FlyMarket</strong><span>CF</span></div>
            <div className="phone-search">Buscar productos, servicios...</div>
            <div className="category-grid">
              <span>Ofertas</span><span>Productos</span><span>Servicios</span><span>Paquetes</span>
            </div>
            <div className="product-card"><i>🎧</i><div><strong>Auriculares Premium</strong><small>Sonido de alta calidad</small><b>Oferta destacada</b></div></div>
            <div className="product-card"><i>💻</i><div><strong>Diseño Web Profesional</strong><small>Servicio completo</small><b>Contacto directo</b></div></div>
            <div className="phone-bar"><span>Chat</span><span>Wall</span><b>+</b><span>Go</span><span>Más</span></div>
          </div>
        </div>
      </section>

      <section id="ecosistema" className="feature-strip glass-dark">
        {features.map((item) => (
          <article key={item.title}>
            <div>{item.icon}</div>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section id="beneficios" className="content-grid">
        <article className="glass-dark panel-premium">
          <StatusPill>Por qué ConnekFly</StatusPill>
          <h2>Un ecosistema hecho para personas y negocios.</h2>
          <ul className="premium-list">
            <li>Todo en una sola app: social, comercial y organización diaria.</li>
            <li>Contactos reales, invitaciones, QR y descubrimiento internacional.</li>
            <li>FlyMarket como vitrina comercial conectada al SmartCRM.</li>
            <li>Actualizaciones constantes para testers y mejoras continuas.</li>
          </ul>
        </article>

        <article className="glass-light device-panel">
          <h2>Disponible para pruebas Android</h2>
          <p>La versión tester permite validar el ecosistema real antes del lanzamiento público.</p>
          <div className="device-stack">
            <span>Android</span><span>iOS próximamente</span><span>Web próximamente</span>
          </div>
          <div className="mini-dashboard">
            <div /><div /><div /><div /><div /><div />
          </div>
        </article>

        <article className="glass-dark metrics-panel">
          <h2>ConnekFly en números</h2>
          <div className="metric-line"><strong>+10K</strong><span>Usuarios en crecimiento</span></div>
          <div className="metric-line"><strong>+250K</strong><span>Publicaciones compartidas</span></div>
          <div className="metric-line"><strong>+75K</strong><span>Conexiones creadas</span></div>
          <div className="metric-line"><strong>+20</strong><span>Países conectados</span></div>
        </article>
      </section>

      <section id="seguridad" className="security-band glass-xl">
        <div className="shield">🛡️</div>
        <div>
          <StatusPill tone="blue">Seguridad y confianza</StatusPill>
          <h2>Privacidad, control y enlaces oficiales.</h2>
          <p>
            Usa únicamente esta web para descargar la APK tester oficial. ConnekFly no procesa pagos
            de ventas entre usuarios ni custodia dinero de terceros.
          </p>
        </div>
      </section>

      <section className="final-cta glass-dark">
        <BrandMark compact />
        <div>
          <h2>Sé parte de la evolución ConnekFly</h2>
          <p>Descarga la APK tester oficial y entra al ecosistema que lo conecta todo.</p>
        </div>
        <a className="primary-button big" href={apkUrl}>Descargar APK ahora</a>
      </section>

      <footer className="site-footer">
        <BrandMark />
        <p>Conectamos personas, negocios y oportunidades.</p>
        <small>ConnekFly © 2026 · Todos los derechos reservados.</small>
      </footer>
    </main>
  );
}
