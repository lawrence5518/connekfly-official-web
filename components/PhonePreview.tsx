export function PhonePreview() {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-top">
          <div>
            <div className="phone-title">ConnekFly</div>
            <div className="work-sub">Chat · Wall · FlyMarket · CRM</div>
          </div>
          <div className="avatar">CF</div>
        </div>

        <div className="work-card">
          <div className="work-label">Wall</div>
          <div className="work-title">Comparte y descubre</div>
          <div className="work-sub">Publicaciones, fotos, historias y conexión social.</div>
        </div>

        <div className="work-card">
          <div className="work-label">Chat</div>
          <div className="work-title">Habla con tus contactos</div>
          <div className="work-sub">Mensajes, fotos, audio, stickers y llamadas.</div>
        </div>

        <div className="work-card">
          <div className="work-label">FlyMarket</div>
          <div className="work-title">Publica y contacta</div>
          <div className="work-sub">Ofertas, productos, servicios y chat directo.</div>
        </div>

        <div className="work-card">
          <div className="work-label">SmartCRM</div>
          <div className="work-title">Mi estación de trabajo</div>
          <div className="work-sub">Clientes, interesados, agenda y catálogo.</div>
        </div>

        <div className="quick-grid">
          <div className="quick">Chat</div>
          <div className="quick">Wall</div>
          <div className="quick">Market</div>
          <div className="quick">CRM</div>
        </div>
      </div>
    </div>
  );
}
